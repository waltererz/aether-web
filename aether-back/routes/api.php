<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('groups')->group(function () {
    Route::post('/', [GroupController::class, 'store']);
    Route::post('/index', [GroupController::class, 'index']);
    Route::delete('/{group}', [GroupController::class, 'destroy'])->where('group', '[0-9a-z\-]+');
});

Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::post('/index', [UserController::class, 'index']);
    Route::post('/check/email', [UserController::class, 'checkEmail']);
    Route::delete('/{user}', [UserController::class, 'destroy'])->where('user', '[0-9a-z\-]+');
});
