<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\InvestmentThemeController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserImageController;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('/signout', [AuthController::class, 'signout']);
        Route::post('/check', [AuthController::class, 'check']);
    });

    Route::prefix('groups')->group(function () {
        Route::post('/', [GroupController::class, 'store']);
        Route::post('/index', [GroupController::class, 'index']);
        Route::delete('/{group}', [GroupController::class, 'destroy'])->where('group', '[0-9a-z\-]+');
    });

    Route::prefix('users')->group(function () {
        Route::post('/index', [UserController::class, 'index']);

        Route::post('/nickname', [UserController::class, 'checkNickname']);
        Route::patch('/nickname/{user}', [UserController::class, 'updateNickname'])->where('user', '[0-9a-z\-]+');

        Route::post('/{user}', [UserController::class, 'show'])->where('user', '[0-9a-z\-]+');
        Route::delete('/{user}', [UserController::class, 'destroy'])->where('user', '[0-9a-z\-]+');
    });

    Route::prefix('advisors')->group(function () {
        Route::post('/', [AdvisorController::class, 'store']);
        Route::post('/index', [AdvisorController::class, 'index']);
    });

    Route::prefix('investment/themes')->group(function () {
        Route::post('/', [InvestmentThemeController::class, 'store']);
        Route::post('/index', [InvestmentThemeController::class, 'index']);
    });

    Route::prefix('storage')->group(function () {
        Route::post('user/image', [UserImageController::class, 'store']);
    });
});

Route::prefix('auth')->group(function () {
    Route::post('/signin', [AuthController::class, 'signin']);
});

Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::post('/check/email', [UserController::class, 'checkEmail']);
});
