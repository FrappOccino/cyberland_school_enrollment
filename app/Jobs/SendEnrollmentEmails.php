<?php

namespace App\Jobs;

use App\Models\Enrollment;
use App\Mail\ParentConfirmationMail;
use Illuminate\Bus\Queueable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class SendEnrollmentEmails implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected Enrollment $enrollment;

    /**
     * Create a new job instance.
     */
    public function __construct(Enrollment $enrollment)
    {
        $this->enrollment = $enrollment;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Send admin notification email
        Mail::html("
            <h2>New Enrollment Submitted:</h2>
            <ul>
                <li><strong>Child Name:</strong> {$this->enrollment->child_name}</li>
                <li><strong>Birthday:</strong> {$this->enrollment->child_birthday}</li>
                <li><strong>LRN:</strong> {$this->enrollment->lrn}</li>
                <li><strong>Parent Name:</strong> {$this->enrollment->parent_name}</li>
                <li><strong>Contact:</strong> {$this->enrollment->parent_contact}</li>
                <li><strong>Email:</strong> {$this->enrollment->parent_email}</li>
                <li><strong>Relationship:</strong> {$this->enrollment->parent_relationship}</li>
            </ul>
        ", function ($message) {
            $message->to(env('MAIL_USERNAME'))
                    ->subject('New Enrollment | ' . ' ID: ' . $this->enrollment->id);
        });

        // Send confirmation to parent
        Mail::to($this->enrollment->parent_email)
            ->send(new ParentConfirmationMail($this->enrollment->parent_name));
    }
}
