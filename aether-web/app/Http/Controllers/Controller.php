<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    protected function _getDocumentTitle(): string
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, config('app.api_url') . '/data/document/title');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['path' => $_SERVER['REQUEST_URI']]));

        $response = json_decode(curl_exec($ch));

        return $response ?? '';
    }

    protected function _getDocumentDescription(): string
    {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, config('app.api_url') . '/data/document/description');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(['path' => $_SERVER['REQUEST_URI']]));

        $response = json_decode(curl_exec($ch));

        return $response ?? '';
    }
}
