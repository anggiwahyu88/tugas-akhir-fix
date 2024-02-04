<?php

use App\Http\Controllers\Admin\NewsController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
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
    $news = News::limit(6)->select('id', 'title', 'thumnil')->get();
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
Route::get('/123', function () {
    return abort(404);
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
Route::get('/news/{id}', [NewsController::class, 'show'])->name("news.show");



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__ . '/auth.php';
require __DIR__ . '/user.php';
require __DIR__ . '/admin.php';
