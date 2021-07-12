<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;
use App\Http\Controllers\GroupController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::prefix('groups')->group(function () {
    Route::post('/', [GroupController::class, 'store']);
    Route::post('/index', [GroupController::class, 'index']);
    Route::delete('/{group}', [GroupController::class, 'destroy'])->where('group', '[0-9a-z\-]+');
});

// 지정되지 않은 모든 페이지는 리액트에서 처리함
Route::get('/{path}', [ReactController::class, 'index'])->where('path', '.*');
