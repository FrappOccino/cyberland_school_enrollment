<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Enrollment;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index(Enrollment $enrollment){
        return Inertia::render('Admin', [
            'enrollments' => $enrollment->all(),
        ]);
    }
}
