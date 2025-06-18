<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EnrollmentController;

Route::get('/', fn() => Inertia::render('Home'));
Route::get('/enroll', fn() => Inertia::render('EnrollmentForm'));
Route::post('/enroll', [EnrollmentController::class, 'store']);
Route::get('/admin/enrollments', [EnrollmentController::class, 'index']);
Route::get('/admin/enrollments/export', [EnrollmentController::class, 'export']);
Route::get('/admin', fn() => Inertia::render('Admin'));
