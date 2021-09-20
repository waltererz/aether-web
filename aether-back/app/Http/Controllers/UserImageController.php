<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class UserImageController extends Controller
{
    /**
     * 사용자 이미지를 스토리지에 저장하는 메소드
     * 파일이 저장되는 경로는 /user_image/{filename} 이며, 파일 이름은 사용자 UUID, 확장자는 지정하지 않습니다.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        /**
         * 스토리지 인스턴스 저장 변수
         * 
         * @var \Illuminate\Contracts\Filesystem\Filesystem $storage
         */
        $storage = Storage::disk('azure');

        /**
         * 스토리지 내 사용자 이미지 저장 경로
         * 
         * @var string $path
         */
        $path = 'user_image/' . $request->post('user_uuid');

        /**
         * 스토리지에 이미 파일이 존재하는지 확인합니다.
         * 파일이 존재한다면 삭제합니다.
         */
        if ($storage->exists($path)) {
            $storage->delete($path);
        } else {
            /**
             * 사용자 이미지 저장 디렉토리가 존재하는지 확인 후 존재하지 않으면 생성합니다.
             */
            $directories = $storage->directories();
            if (!isset($directories['user_image'])) {
                $storage->makeDirectory('user_image');
            }
        }

        /**
         * 임시 디렉토리에 저장되어 있는 사용자 이미지를 스토리지에 저장합니다.
         */
        $result = $storage->put($path, file_get_contents($request->file('user_image')->getRealPath()));

        /**
         * 사용자 이미지 업로드 결과를 반환합니다.
         */
        if ($result) {
            return response()->json(config('app.storage_url') . '/userimage/s/' . $request->post('user_uuid'), 201);
        } else {
            return response()->json(null, 400);
        }
    }
}
