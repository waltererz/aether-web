<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\DeveloperController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;

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

Route::prefix('')->group(function () {
    Route::get('/', [HomeController::class, 'index']);
});

Route::prefix('user')->group(function () {
    Route::get('/', [UserController::class, 'index']);
    Route::get('/signup', [UserController::class, 'index']);
    Route::get('/login', [UserController::class, 'index']);
});

Route::prefix('assets')->group(function () {
    Route::get('/', [AssetController::class, 'index']);
    Route::get('/moneybook', [AssetController::class, 'index']);
    Route::get('/portfolio', [AssetController::class, 'index']);
});

Route::prefix('advisors')->group(function () {
    Route::get('/', [AdvisorController::class, 'index']);
    Route::get('/search', [AdvisorController::class, 'index']);
});

Route::prefix('developer')->group(function () {
    Route::get('/', [DeveloperController::class, 'index']);
    Route::get('/forum', [DeveloperController::class, 'index']);
});
