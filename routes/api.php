<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User as User;
use App\Http\Controllers\Fuit as Fruit;
use App\Http\Controllers\AuthController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);

    Route::prefix('fruits')->middleware('jwt.auth')->name('fruits.')->group(function () {
        Route::get('/', Fruit\IndexController::class)->name('index');
    });
});



Route::prefix('user')->name('user.')->group(function () {
    Route::post('/', User\StoreController::class)->name('store');
});


