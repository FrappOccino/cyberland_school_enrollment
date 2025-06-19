<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Mail\ParentConfirmationMail;

class SendEnrollmentEmails implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new job instance.
     */
    public function __construct(array $data)
    {
        $this->data = $data;
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
                <li><strong>Child Name:</strong> {$this->data['child_name']}</li>
                <li><strong>Birthday:</strong> {$this->data['child_birthday']}</li>
                <li><strong>LRN:</strong> {$this->data['lrn']}</li>
                <li><strong>Parent Name:</strong> {$this->data['parent_name']}</li>
                <li><strong>Contact:</strong> {$this->data['parent_contact']}</li>
                <li><strong>Email:</strong> {$this->data['parent_email']}</li>
                <li><strong>Relationship:</strong> {$this->data['parent_relationship']}</li>
            </ul>
        ", function ($message) {
            $message->to(env('MAIL_USERNAME'))->subject('New Enrollment');
        });

        // Send confirmation to parent
        Mail::to($this->data['parent_email'])
            ->send(new ParentConfirmationMail($this->data['parent_name']));
    }
}

