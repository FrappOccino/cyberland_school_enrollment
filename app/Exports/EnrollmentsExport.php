<?php

namespace App\Exports;

use App\Models\Enrollment;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class EnrollmentsExport implements FromCollection, WithHeadings
{
    public function collection()
    {
        return Enrollment::select([
            'child_name',
            'child_birthday',
            'lrn',
            'parent_name',
            'parent_contact',
            'parent_email',
            'parent_relationship',
        ])->get();
    }

    public function headings(): array
    {
        return [
            'Child Name',
            'Birthday',
            'LRN / Student ID',
            'Parent Name',
            'Parent Contact',
            'Parent Email',
            'Relationship',
        ];
    }
}
