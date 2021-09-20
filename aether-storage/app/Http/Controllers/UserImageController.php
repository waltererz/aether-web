<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserImageController extends Controller
{
    /**
     * 사용자 이미지를 출력하는 메소드
     * 
     * @param \Illuminate\Http\Request  $request
     * @param string $uuid
     * @return mixed
     */
    public function show(string $uuid)
    {
        /**
         * 클라우드 스토리지 인스턴스 저장 변수
         * 
         * @var \Illuminate\Contracts\Filesystem\Filesystem $storage
         */
        $storage = Storage::disk('azure');

        /**
         * 스토리지 내 사용자 이미지 저장 경로
         * 
         * @var string $path
         */
        $path = 'user_image/' . $uuid;

        /**
         * 스토리지에 사용자 이미지 파일이 존재하는지 확인합니다.
         * 파일이 존재하지 않으면 공백을 반환합니다.
         */
        if (!$storage->exists($path)) {
            return '';
        }

        /**
         * 사용자 이미지 저장 변수
         * 
         * @var mixed $image
         */
        $image = $storage->get($path);

        /**
         * 로컬에 임시 저장되는 이미지 파일 이름
         * 
         * @var string $local
         */
        $local = Str::random(40);

        /**
         * 이미지를 화면에 출력하기 위해 로컬 스토리지에 사용자 이미지를 저장합니다.
         */
        Storage::put($local, $image);

        /**
         * 이미지 타입을 결정합니다.
         */
        $type = image_type_to_mime_type(exif_imagetype(Storage::path($local)));

        /**
         * 사용자 이미지를 출력합니다.
         */
        return response($image)->header('Content-Type', $type);
    }
}
