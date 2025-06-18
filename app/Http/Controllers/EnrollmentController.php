<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Enrollment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Exports\EnrollmentsExport;
use Maatwebsite\Excel\Facades\Excel;

class EnrollmentController extends Controller
{

    public function store(Request $request, Enrollment $enrollment)
    {
        // dd($request->all());
        $validated = $request->validate([
            'child_name' => 'required',
            'child_birthday' => 'required|date',
            'lrn' => 'required',
            'parent_name' => 'required',
            'parent_contact' => 'required',
            'parent_email' => 'required|email',
            'parent_relationship' => 'required',
        ]);
        
        // dd($validated);

        $enrollment->create($validated);


        // Send admin email
        Mail::html("
            <h2>New Enrollment Submitted:</h2>
            <ul>
                <li><strong>Child Name:</strong> {$validated['child_name']}</li>
                <li><strong>Birthday:</strong> {$validated['child_birthday']}</li>
                <li><strong>LRN:</strong> {$validated['lrn']}</li>
                <li><strong>Parent Name:</strong> {$validated['parent_name']}</li>
                <li><strong>Contact:</strong> {$validated['parent_contact']}</li>
                <li><strong>Email:</strong> {$validated['parent_email']}</li>
                <li><strong>Relationship:</strong> {$validated['parent_relationship']}</li>
            </ul>
        ", function ($message) {
            $message->to(env('MAIL_USERNAME'))->subject('New Enrollment');
        });


        // Send confirmation to parent
        Mail::to($validated['parent_email'])->send(new \App\Mail\ParentConfirmationMail($validated['parent_name']));

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
