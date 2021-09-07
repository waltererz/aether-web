<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdvisorController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\InvestmentController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\AdminController;

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
        Route::get('/@{user_nickname}', [UserController::class, 'profile'])->where('user_nickname', '[0-9A-Za-z\-\_]+')->name('profile');
    });

    Route::prefix('app')->group(function () {
        Route::get('/setting', [SettingController::class, 'index'])->name('setting');
    });

    Route::prefix('assets')->group(function () {
        Route::get('/', [AssetController::class, 'index'])->name('asset.home');
        Route::get('/moneybook', [AssetController::class, 'moneybook'])->name('asset.moneybook');
    });

    Route::prefix('investments')->group(function () {
        Route::get('/', [InvestmentController::class, 'index'])->name('investment.home');

        Route::prefix('portfolio')->group(function () {
            Route::get('/', [InvestmentController::class, 'portfolio'])->name('investment.portfolio');
            Route::get('/create', [InvestmentController::class, 'createPortfolio']);
        });
    });

    Route::prefix('advisors')->group(function () {
        Route::get('/', [AdvisorController::class, 'index'])->name('advisor.home');
        Route::get('/search', [AdvisorController::class, 'search'])->name('advisor.search');
    });

    Route::prefix('user')->group(function () {
        Route::get('/signout', [UserController::class, 'signout'])->name('signout');
    });

    Route::prefix('__admin')->group(function () {
        Route::prefix('/')->group(function () {
            Route::get('/', [AdminController::class, 'index'])->name('admin.home');
        });
    });
});

Route::prefix('user')->group(function () {
    Route::get('/signup', [UserController::class, 'signup'])->name('signup');
    Route::get('/signin', [UserController::class, 'signin'])->name('signin');
});
