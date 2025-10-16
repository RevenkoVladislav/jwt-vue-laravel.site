<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User as User;
use App\Http\Controllers\Fuit as Fruit;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('user')->name('user.')->group(function () {
    Route::post('/', User\StoreController::class)->name('store');
});

Route::prefix('fruits')->name('fruits.')->group(function () {
   Route::get('/', Fruit\IndexController::class)->name('index');
});
