<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReactController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdvisorController;

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

Route::prefix('back')->group(function () {
    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::get('/{uuid}', [UserController::class, 'show']);
        Route::post('/', [UserController::class, 'store']);
    });

    Route::prefix('advisors')->group(function () {
        Route::get('/', [AdvisorController::class, 'index']);
    });
});

Route::get('/{path}', [ReactController::class, 'index'])->where('path', '.*');
