<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * Laravel BaseController
 * 
 * 라라벨로 개발되는 이 시스템의 모든 컨트롤러가 이 클래스를 상속받습니다.
 * 컨트롤러에서 기본으로 제공해야 하는 함수를 포함하며, 현재 아래의 기능을 제공합니다.
 * 
 * 1. 암호화/복호화 기능
 */

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected string $_encryption_method = 'aes-256-cbc';
    protected string $_encryption_algo = 'sha3-512';

    /**
     * 암호화 함수
     * 
     * 컨트롤러에서 기본으로 사용하는 암호화 함수입니다.
     * 라라벨에서 기본 제공하는 암호화(해싱) 기능을 사용할 수도 있겠으나, 어떤 함수를 사용하느냐는 개발자의 선택입니다.
     * 이 함수가 작동하려면 설정파일에 AETHER_SECRET 값이 지정되어 있어야 합니다.
     * 
     * @param string $text 암호화 대상 텍스트
     * @return string 암호화된 문자열
     */
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

    /**
     * 복호화 함수
     * 
     * 컨트롤러에서 기본으로 사용하는 복호화 함수입니다.
     * 암호화 함수와 함께 사용되며 라라벨 암호화 함수와는 호환되지 않습니다.
     * 
     * @param string $encrypted 암호화된 문자열
     * @return string 복호화된 문자열
     */
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
