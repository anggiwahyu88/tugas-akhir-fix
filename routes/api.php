<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post("/auth/login", [AuthController::class, "login"])->name("login");
// Route::post('/auth/register', [AuthController::class, "register"]);

// Route::middleware(['auth:sanctum'])->group(function () {
//     Route::resource('user', UserController::class)->only([
//         'update', 'index', 'destroy'
//     ]);
//     Route::resource('news', NewsController::class)->except([
//         'edit', 'store'
//     ]);
// });
