<?php

namespace App\Http\Controllers;

use App\Models\Fathers;
use App\Models\Mothers;
use App\Models\Schools;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;


class UserController extends Controller
{
    public function edit(Request $request)
    {
        $user = $request->user();

        if ($user->step_1 == "true") return Redirect::route('dashboard');

        return Inertia::render('EditBiodata');
    }

    public function update(Request $request): RedirectResponse
    {
        $user = $request->user();
        $mother = Mothers::create($request->mother);

        $father = Fathers::create($request->father);

        $school = Schools::firstOrCreate(['name' => $request->school]);

        $user->update([
            "id_father"     => $father->id,
            "id_mother"     => $mother->id,
            "id_school"     => $school->id,
            "date_birthday" => $request->date_birthday,
            "birth_place"   => $request->birth_place,
            "province"      => $request->province,
            "city"          => $request->city,
            "subdistrict"   => $request->subdistrict,
            "village"       => $request->village,
            "address"       => $request->address,
            "step_1" => "true"
        ]);

        return Redirect::route('dashboard');
    }

    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
