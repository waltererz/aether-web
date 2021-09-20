<?php

use Illuminate\Support\Facades\Storage;

/**
 * 스토리지에 사용자 이미지가 저장되어 있는지 확인하는 메소드
 * 존재하면 이미지 파일 URL, 존재하지 않으면 공백 반환
 * 
 * @param string $uuid
 * @return string
 */
function checkUserImage(string $uuid): string
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
     * @var string $user_image_path
     */
    $user_image_path = 'user_image/' . $uuid;

    /**
     * 스토리지에 사용자 이미지 파일이 존재하는지 확인합니다.
     * 파일이 존재하지 않으면 공백을 반환합니다.
     * 파일이 존재하면 백엔드 서버를 경유하는 이미지 경로를 반환합니다.
     */
    if (!$storage->exists($user_image_path)) {
        $user_image = '';
    } else {
        $user_image = url(config('app.storage_url') . '/userimage/s/' . $uuid);
    }

    return $user_image;
}
