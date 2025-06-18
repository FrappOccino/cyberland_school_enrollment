<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    use HasFactory;

    protected $table = 'enrollments';
    protected $fillable = [
        'child_name',
        'child_birthday',
        'lrn',
        'parent_name',
        'parent_contact',
        'parent_email',
        'parent_relationship',
    ];
}
