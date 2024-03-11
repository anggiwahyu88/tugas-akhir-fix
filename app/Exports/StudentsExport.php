<?php

namespace App\Exports;

use App\Models\Students;
use DateTime;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class StudentsExport implements FromCollection, WithMapping, WithHeadings, WithStyles, ShouldAutoSize
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        return Students::all();
    }
    public function map($students): array
    {
        $total_nilai = $students->user->value->semester_1 + $students->user->value->semester_2 + $students->user->value->semester_3 + $students->user->value->semester_4 + $students->user->value->semester_5;
        $gender = $students->user->gender;
        if ($gender == "male") $gender = "Laki - Laki";
        else $gender = "Perempuan";
        $dateTime = new DateTime($students->created_at);
        $dateOnly = $dateTime->format("Y-m-d");
        
        return [
            $students->id,
            $students->user->name,
            $gender,
            $students->user->school->name,
            $students->user->date_birthday,
            $total_nilai,
            $students->major->name,
            $dateOnly,
        ];
    }

    public function headings(): array
    {
        return [
            'No',
            'Nama',
            'Jenis Kelamin',
            'Asal Sekolah',
            'Tanggal Lahir',
            'Total Nilai',
            'Jurusan',
            'Diterima Pada Tanggal',
        ];
    }
    public function styles(Worksheet $sheet)
    {
        return [
            1    => [
                'font' => ['bold' => true],
            ],
        ];
    }
}
