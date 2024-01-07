<?php

namespace App\Http\Controllers;

use App\Models\Value_user;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class RaporController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();

        if ($user->step_1 == "false" || $user->step_2 == "true") return Redirect::route('dashboard');
        return Inertia::render('InputRapor');
    }

    public function create(Request $request): RedirectResponse
    {
        $user = $request->user();
        $semesters = ['semester_1', 'semester_2', 'semester_3', 'semester_4', 'semester_5'];

        $values = [];

        foreach ($semesters as $semester) {
            $semesterObj = (object)$request->$semester;
            $totalScore = $semesterObj->inggris + $semesterObj->indonesia + $semesterObj->ipa + $semesterObj->matematika;

            $values[$semester] = $totalScore;
        }

        Value_user::create([
            "id_user"    => $user->id,
            "semester_1" => $values['semester_1'],
            "semester_2" => $values['semester_2'],
            "semester_3" => $values['semester_3'],
            "semester_4" => $values['semester_4'],
            "semester_5" => $values['semester_5'],
        ]);

        $user->update([
            "step_2" => true
        ]);

        return Redirect::route('dashboard');
    }
}
