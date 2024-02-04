<?php

use App\Http\Controllers\User\MajorController;
use App\Http\Controllers\User\RaporController;
use App\Http\Controllers\User\UserController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::get('/dashboard/biodata', [UserController::class, 'edit'])->name("user.edit");
    Route::put('/dashboard/biodata', [UserController::class, 'update'])->name("user.update");

    Route::get('/dashboard/rapor', [RaporController::class, 'show'])->name("rapor.show");
    Route::post('/dashboard/rapor', [RaporController::class, 'create'])->name("rapor.create");

    Route::get('/dashboard/jurusan', [MajorController::class, 'show'])->name("major.show");
    Route::post('/dashboard/jurusan', [MajorController::class, 'create'])->name("major.create");

});