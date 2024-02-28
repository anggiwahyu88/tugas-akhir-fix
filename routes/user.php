<?php

use App\Http\Controllers\User\MajorController;
use App\Http\Controllers\User\RaporController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->middleware('auth', 'isUser')->group(function () {
    Route::prefix('biodata')->name('user.')->group(function () {
        Route::get('/', [UserController::class, 'edit'])->name("edit");
        Route::put('/', [UserController::class, 'update'])->name("update");
    });
    
    Route::prefix('rapor')->name('rapor.')->group(function () {
        Route::get('/', [RaporController::class, 'show'])->name("show");
        Route::post('/', [RaporController::class, 'create'])->name("create");
    });

    Route::prefix('jurusan')->name('major.')->group(function () {
        Route::get('/', [MajorController::class, 'show'])->name("show");
        Route::post('/', [MajorController::class, 'create'])->name("create");
    });
});