<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Fathers;
use App\Models\Mothers;
use App\Models\Schools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class UserController extends Controller
{
    public function edit(Request $request)
    {
        $user = $request->user();

        if ($user->step_1 == "true") return abort(404);
        $api_url = 'https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json';
        $json_data = file_get_contents($api_url);
        $response_data = json_decode($json_data);
        $province=[[
            "title"=>"::Pilih Provinsi::",
            "value"=>"DEFAULT"
        ]];
        foreach ($response_data as $value) {
            array_push($province,[
                "value"=>$value->id,
                "title"=>$value->name
            ]);
        }

        return Inertia::render('User/EditBiodata',[
            "province"=>$province
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();
        if ($user->step_1 == "true") return abort(404);

        $mother = Mothers::create($request->mother);

        $father = Fathers::create($request->father);

        $school = Schools::firstOrCreate(['name' => $request->school]);

        $user->update([
            "id_father"     => $father->id,
            "id_mother"     => $mother->id,
            "id_school"     => $school->id,
            "date_birthday" => $request->date_birthday,
            "birth_place"   => $request->birth_place,
            "province"      => $request->province['title'],
            "city"          => $request->city['title'],
            "subdistrict"   => $request->subdistrict['title'],
            "village"       => $request->village['title'],
            "address"       => $request->address,
            "step_1" => "true"
        ]);

        return Redirect::route('dashboard');
    }
}
