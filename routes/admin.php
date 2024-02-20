<?php

use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PinController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth', 'isAdmin')->group(function () {
    Route::get('/dashboard/news', [NewsController::class, 'index'])->name("news.index");
    Route::get('/dashboard/news/upload', [NewsController::class, 'store'])->name("news.store");
    Route::post('/dashboard/news', [NewsController::class, 'create'])->name("news.create");
    Route::get('/dashboard/news/{id}', [NewsController::class, 'edit'])->name("news.edit");
    Route::put('/dashboard/news/{id}', [NewsController::class, 'update'])->name("news.update");
    Route::delete('/dashboard/news/{id}', [NewsController::class, 'destroy'])->name("news.destroy");

    Route::get('/dashboard/pin', [PinController::class, 'store'])->name("pin.store");
    Route::post('/dashboard/pin', [PinController::class, 'create'])->name("pin.create");
});