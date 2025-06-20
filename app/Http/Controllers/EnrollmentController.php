<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Bus\Dispatcher;
use App\Exports\EnrollmentsExport;
use App\Jobs\SendEnrollmentEmails;
use Illuminate\Support\Facades\Mail;
use Maatwebsite\Excel\Facades\Excel;

class EnrollmentController extends Controller
{

    public function store(Request $request, Enrollment $enrollment)
    {

        $validated = $request->validate([
            'child_name' => 'required',
            'child_birthday' => 'required|date',
            'lrn' => 'required',
            'parent_name' => 'required',
            'parent_contact' => 'required',
            'parent_email' => 'required|email',
            'parent_relationship' => 'required',
        ]);
            
        // Create the enrollment and get the model instance 
        $enrollment = Enrollment::create($validated);
        // Dispatch the job using the full model (or just ID if preferred)
        SendEnrollmentEmails::dispatch($enrollment); // or ->dispatch($enrollment->id)

        return redirect()->back()->with('success', 'Enrollment submitted successfully!');

    }

    public function index()
    {
        return Inertia::render('EnrollmentForm');
    }

    public function export()
    {
        return Excel::download(new EnrollmentsExport, 'enrollments.xlsx');
    }

}
