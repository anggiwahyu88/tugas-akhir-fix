<?php

use App\Http\Controllers\MajorController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RaporController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\UserController;
use App\Models\News;

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

Route::get('/', function () {
    $news = News::all();
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'news' => $news,
    ]);
})->name("home");
Route::get('/faqs', function () {
    return Inertia::render('Faqs');
})->name("faqs");
Route::get('/sejarah', function () {
    return Inertia::render('History');
});
Route::get('/visi-dan-misi', function () {
    return Inertia::render('VisionMision');
});
Route::get('/jurusan/{nickname}', function ($nickname) {
    return Inertia::render('Major', [
        "nickname" => $nickname
    ]);
});
Route::get('/student-admission', function () {
    return Inertia::render('StudentAdmission');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/dashboard/biodata', [UserController::class, 'edit'])->name("user.edit");
    Route::put('/dashboard/biodata', [UserController::class, 'update'])->name("user.update");
    Route::get('/dashboard/rapor', [RaporController::class, 'show'])->name("rapor.show");
    Route::post('/dashboard/rapor', [RaporController::class, 'create'])->name("rapor.create");
    Route::get('/dashboard/jurusan', [MajorController::class, 'show'])->name("major.show");
    Route::post('/dashboard/jurusan', [MajorController::class, 'create'])->name("major.create");
    Route::get('/dashboard/news', [NewsController::class, 'show'])->name("news.show");
    Route::post('/dashboard/news', [NewsController::class, 'create'])->name("news.post");
});

require __DIR__ . '/auth.php';
