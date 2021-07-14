<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected $_encryption_method = 'aes-256-cbc';
    protected $_encryption_algo = 'sha3-512';

    protected function _encrypt(string $text): string
    {
        $first_key = base64_encode(env('APP_KEY'));
        $second_key = base64_encode(env('AETHER_SECRET'));
        $iv_length = openssl_cipher_iv_length($this->_encryption_method);
        $iv = openssl_random_pseudo_bytes($iv_length);
        $first_encrypted = openssl_encrypt($text, $this->_encryption_method, $first_key, OPENSSL_RAW_DATA, $iv);
        $second_encrypted = hash_hmac($this->_encryption_algo, $first_encrypted, $second_key, true);
        $encrypted = base64_encode($iv . $second_encrypted . $first_encrypted);
        return $encrypted;
    }

    protected function _decrypt(string $encrypted): string
    {
        $first_key = base64_encode(env('APP_KEY'));
        $second_key = base64_encode(env('AETHER_SECRET'));
        $encrypted = base64_decode($encrypted);
        $iv_length = openssl_cipher_iv_length($this->_encryption_method);
        $iv = substr($encrypted, 0, $iv_length);
        $second_encrypted = substr($encrypted, $iv_length, 64);
        $first_encrypted = substr($encrypted, $iv_length + 64);
        $decrypted = openssl_decrypt($first_encrypted, $this->_encryption_method, $first_key, OPENSSL_RAW_DATA, $iv);
        $second_encrypted_new = hash_hmac($this->_encryption_algo, $first_encrypted, $second_key, true);
        if (hash_equals($second_encrypted, $second_encrypted_new)) {
            return $decrypted;
        }
        return '';
    }
}
