<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Major;
use App\Models\User;
use App\Models\Major_user;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class PendaftarController extends Controller
{
    public function index()
    {
        $registrant = User::with(['school', 'value'])->select('id', 'name', 'phone', 'date_birthday', 'id_school', 'id_value')->where('step_3', true)->get();
        $id_registrant = $registrant->map(function ($data) {
            return $data->id;
        });
        $major = Major_user::with(['option_1', 'option_2', 'option_3'])->whereIn('id_user', $id_registrant)->get();
        $registrant = $registrant->map(function ($data) use ($major) {
            $data['major'] = $major->firstWhere('id_user', $data->id);
            return $data;
        });

        return Inertia::render('Admin/Pendaftar', [
            "registrant" => $registrant
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
        $user = User::with('school', 'value')->select('id', 'name', 'gender', 'id_school', 'id_value')->where('step_3', 'true')->get();
        $id_user = $user->map(function ($data) {
            return $data->id;
        });


        $major = Major_user::with(['option_11', 'option_21', 'option_31'])->whereIn('id_user', $id_user)->get();
        $user = $user->map(function ($data) use ($major) {
            $data['total_nilai'] = $data->value->semester_1 + $data->value->semester_2 + $data->value->semester_3 + $data->value->semester_4 + $data->value->semester_5;
            $data['major'] = $major->firstWhere('id_user', $data->id);
            return $data;
        });
        $user = $user->sortByDesc('total_nilai');


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
        $accepted_count = [
            "dpib" => 0,
            "tkro" => 0,
            "tbsm" => 0,
            "tp" => 0,
            "tpm" => 0,
            "titl" => 0,
            "tkj" => 0,
            "tei" => 0,
        ];
        $students = [];

        foreach ($user as $value) {
            $option_11 = $value->major->option_11;
            $option_21 = $value->major->option_21;
            $option_31 = $value->major->option_31;
            if ($accepted_count[$option_11->nickname] < $capacity[$option_11->nickname]) {
                array_push($students, [
                    "id_user" => $value->id,
                    "id_major" => $option_11->id,
                    "nick" => $option_11->nickname,
                    "total_nilai" => $value->total_nilai,
                ]);
                $accepted_count[$option_11->nickname] = $accepted_count[$option_11->nickname] + 1;
            } elseif ($accepted_count[$option_21->nickname] < $capacity[$option_21->nickname]) {
                dump($accepted_count[$option_21->nickname], $capacity[$option_21->nickname], 2);
                array_push($students, [
                    "id_user" => $value->id,
                    "id_major" => $option_21->id,
                    "nick" => $option_21->nickname,
                    "total_nilai" => $value->total_nilai,
                ]);
                $accepted_count[$option_21->nickname] = $accepted_count[$option_21->nickname] + 1;
            } elseif ($accepted_count[$option_31->nickname] < $capacity[$option_31->nickname]) {
                dump($accepted_count[$option_31->nickname], $capacity[$option_31->nickname], 3);
                array_push($students, [
                    "id_user" => $value->id,
                    "id_major" => $option_31->id,
                    "nick" => $option_31->nickname,
                    "total_nilai" => $value->total_nilai,
                ]);
                $accepted_count[$option_31->nickname] = $accepted_count[$option_31->nickname] + 1;
            }
        }
        dd($students);
    }
}
