<?php

namespace App\Http\Controllers;

use App\Exports\StudentsExport;
use App\Models\Students;
use Inertia\Inertia;
use Maatwebsite\Excel\Facades\Excel;

class StudntsController extends Controller
{   
    public function index()
    {
        $students = Students::with([
            'user' => function ($query) {
                $query->with(['school', 'value'])->select('id', 'name', 'gender', 'id_school', 'id_value', 'date_birthday');
            },
            'major'
        ])->get();
        $students->each(function ($student) {
            $total = 0;
            $value = $student->user->value;
            if ($value) {
                $total = $value->semester_1 + $value->semester_2 + $value->semester_3 + $value->semester_4 + $value->semester_5;
            }
            unset($student->user->value);
            $student->user->total_nilai = $total;
        });
        return Inertia::render("StudentsAccepted", [
            "students" => $students
        ]);
    }
    public function export() 
    {
        return Excel::download(new StudentsExport, 'murid.xlsx');
    }
}
