<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvestmentController;

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

Route::middleware('auth')->group(function () {
    Route::prefix('/')->group(function () {
        Route::get('/', [HomeController::class, 'index'])->name('home');
    });

    Route::prefix('assets')->group(function () {
        Route::get('/', [AssetController::class, 'index']);
        Route::get('/moneybook', [AssetController::class, 'index']);
    });

    Route::prefix('investments', function () {
        Route::get('/', [InvestmentController::class, 'index']);

        Route::prefix('portfolio')->group(function () {
            Route::get('/', [InvestmentController::class, 'index']);
            Route::get('/create', [InvestmentController::class, 'index']);
        });
    });

    Route::prefix('advisors')->group(function () {
        Route::get('/', [AdvisorController::class, 'index']);
        Route::get('/search', [AdvisorController::class, 'index']);
    });

    Route::prefix('user')->group(function () {
        Route::get('/', [UserController::class, 'index'])->name('user');
        Route::get('/signout', [UserController::class, 'index'])->name('signout');
    });
});

Route::prefix('user')->group(function () {
    Route::get('/signup', [UserController::class, 'index'])->name('signup');
    Route::get('/signin', [UserController::class, 'index'])->name('signin');
});
