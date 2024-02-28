<?php

use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PendaftarController;
use App\Http\Controllers\Admin\PinController;
use Illuminate\Support\Facades\Route;


Route::prefix('dashboard')->middleware('auth', 'isAdmin')->group(function () {
    Route::prefix('news')->name('news.')->group(function () {
        Route::get('/', [NewsController::class, 'index'])->name("index");
        Route::get('/upload', [NewsController::class, 'store'])->name("store");
        Route::post('/', [NewsController::class, 'create'])->name("create");
        Route::get('/{id}', [NewsController::class, 'edit'])->name("edit");
        Route::put('/{id}', [NewsController::class, 'update'])->name("update");
        Route::delete('/{id}', [NewsController::class, 'destroy'])->name("destroy");
    });

    Route::prefix('pin')->name('pin.')->group(function () {
        Route::get('/', [PinController::class, 'store'])->name("store");
        Route::post('/', [PinController::class, 'create'])->name("create");
    });

    Route::prefix('pendaftar')->name('pendaftar.')->group(function () {
        Route::get('/', [PendaftarController::class, 'index'])->name("index");
        Route::get('/pengumuman', [PendaftarController::class, 'store'])->name("store");
        Route::post('/', [PendaftarController::class, 'create'])->name("create");
    });
});
