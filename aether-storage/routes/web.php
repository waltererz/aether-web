<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserImageController;

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

Route::prefix('userimage')->group(function () {
    Route::get('s/{uuid}', [UserImageController::class, 'show'])->where('uuid', '[0-9a-z\-]+');
});
