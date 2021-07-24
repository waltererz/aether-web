<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\InvestmentThemeController;
use App\Http\Controllers\DataController;

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

Route::prefix('advisors')->group(function () {
    Route::post('/', [AdvisorController::class, 'store']);
    Route::post('/index', [AdvisorController::class, 'index']);
});

Route::prefix('investment/themes')->group(function () {
    Route::post('/', [InvestmentThemeController::class, 'store']);
    Route::post('/index', [InvestmentThemeController::class, 'index']);
});

// DataController
Route::prefix('data')->group(function () {
    Route::post('/document/title', [DataController::class, 'documentTitle']);
    Route::post('/document/description', [DataController::class, 'documentDescription']);
});
