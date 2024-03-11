<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Major;
use App\Models\User;
use App\Models\Major_user;
use App\Models\Students;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PendaftarController extends Controller
{
    public function index()
    {
        $registrant = User::with(['school', 'value'])->select('id', 'name', 'date_birthday', 'id_school', 'id_value')->where('step_3', true)->get();
        $userIds = $registrant->pluck("id");

        $major = Major_user::with(['major_1', 'major_2', 'major_3'])->whereIn('id_user', $userIds)->get();
        $registrant = $registrant->map(function ($data) use ($major) {
            $data['major'] = $major->firstWhere('id_user', $data->id);
            return $data;
        });
        $students = Students::all()->count();

        return Inertia::render('Admin/Pendaftar', [
            "registrant" => $registrant,
            "students"=>$students
        ]);
    }
    public function store()
    {
        $major = Cache::get('major');
        if ($major == null) {
            $major = Major::all();
            Cache::put('major', $major, 1000);
        }
        return Inertia::render("Admin/FormPengumuman", [
            "major" => $major
        ]);
    }

    public function create(Request $request)
    {
        $users = User::with('school', 'value')->select('id', 'name', 'gender', 'id_school', 'id_value')->where('step_3', true)->get();
        $userIds = $users->pluck("id");

        $majors = Major_user::with(['major_1', 'major_2', 'major_3'])
            ->whereIn('id_user', $userIds)
            ->get();

        $users = $users->map(function ($user) use ($majors) {
            $totalNilai = $user->value->semester_1 + $user->value->semester_2 + $user->value->semester_3 + $user->value->semester_4 + $user->value->semester_5;
            $user['total_nilai'] = $totalNilai;
            $user['major'] = $majors->firstWhere('id_user', $user->id);
            return $user;
        })
            ->sortByDesc('total_nilai');

        $capacity = [
            "dpib" => $request->dpib,
            "tkro" => $request->tkro,
            "tbsm" => $request->tbsm,
            "tp" => $request->tp,
            "tpm" => $request->tpm,
            "titl" => $request->titl,
            "tkj" => $request->tkj,
            "tei" => $request->tei,
        ];

        $acceptedCount = array_fill_keys(array_keys($capacity), 0);

        $students = [];

        foreach ($users as $user) {
            foreach (['major_1', 'major_2', 'major_3'] as $majorKey) {
                $major = $user->major->$majorKey;

                if ($acceptedCount[$major->nickname] < $capacity[$major->nickname]) {
                    $students[] = [
                        "id_user" => $user->id,
                        "id_major" => $major->id,
                        "wave" => 1,
                        "created_at" => now(),
                        "updated_at" => now(),
                    ];
                    $acceptedCount[$major->nickname]++;
                    break;
                }
            }
        }
        $chunkedStudents = array_chunk($students, 10);
        foreach ($chunkedStudents as $chunk) {
            Students::insert($chunk);
        }
        return Redirect::route('dashboard');
    }    
}
