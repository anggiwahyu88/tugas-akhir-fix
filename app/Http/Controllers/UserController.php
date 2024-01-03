<?php

namespace App\Http\Controllers;

use App\Models\Fathers;
use App\Models\Mothers;
use App\Models\Schools;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        $user->mother;
        $user->father;
        $user->school;
        return response()->json([
            "status_code" => 200,
            "user" => $user
        ], 200);
    }

    public function update(Request $request, User $user)
    {
        $mother = Mothers::create([
            "name" => "tes",
            "income" => "tes",
            "education" => "tes",
            "phone" => "22222"
        ]);
        $user->mother()->associate($mother)->save();

        $mother = Fathers::create([
            "name" => "tes",
            "income" => "tes",
            "education" => "tes",
            "phone" => "22222"
        ]);
        $user->mother()->associate($mother)->save();

        $school = Schools::where('name', $request->school->name)->first();
        if ($school == null) {
            Schools::create([
                'name' => $request->name,
            ]);
        }
        $user->school()->associate($school)->save();

        $user->update([
            $request->only('nik', 'date_birthday', 'birth_place', 'province', 'city', 'subdistrict', 'village', 'address', 'postal_code', 'number_child', 'number_siblings', 'graduation_year')
        ]);

        return response()->json([
            "status_code" => 200,
            "message" => "data berhasil di update"
        ], 200);
    }
    
    public function destroy(User $user)
    {
        $user->tokens()->delete();
        return response()->json([
            "status_code" => 200,
            "message" => "logout berhasil"
        ], 200);
    }
}
