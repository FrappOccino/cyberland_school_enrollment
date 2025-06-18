<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\EnrollmentController;

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/enroll', fn() => Inertia::render('EnrollmentForm'));
Route::post('/enroll', [EnrollmentController::class, 'store']);

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [LoginController::class, 'login']);
    Route::get('/register', [RegisterController::class, 'show'])->name('register');
    Route::post('/register', [RegisterController::class, 'store']);
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/enrollments', [EnrollmentController::class, 'index']);
    Route::get('/admin/export', [EnrollmentController::class, 'export']);
    Route::get('/admin', [AdminController::class, 'index'])->name('admin');
    Route::get('/logout', [LoginController::class, 'login']);
});



