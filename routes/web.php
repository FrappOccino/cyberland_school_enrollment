<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\EnrollmentController;

Route::get('/', fn() => Inertia::render('Home'));
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/enroll', fn() => Inertia::render('Parent/EnrollmentForm'));
Route::post('/enroll', [EnrollmentController::class, 'store']);
Route::get('admin/login', [LoginController::class, 'showLoginForm'])->name('login');


Route::middleware('guest')->group(function () {
    Route::post('/login', [LoginController::class, 'login']);
    Route::get('admin/register', [RegisterController::class, 'show'])->name('admin-register');
    Route::post('admin/register', [RegisterController::class, 'store']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/enrollments', [EnrollmentController::class, 'index']);
    Route::get('/admin/export', [EnrollmentController::class, 'export']);
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
    Route::post('/logout', [LoginController::class, 'logout']);
});



