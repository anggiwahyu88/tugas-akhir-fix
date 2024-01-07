<?php

namespace App\Http\Controllers;

use App\Models\Major_user;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class MajorController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();

        if ($user->step_1 == "false" || $user->step_2 == "false" || $user->step_3 == "true") return Redirect::route('dashboard');
        return Inertia::render('ChooseMajor');
    }

    public function create(Request $request): RedirectResponse
    {
        $user = $request->user();
        Major_user::create([
            "id_user"    => $user->id,
            "option_1" => $request->option_1,
            "option_2" => $request->option_2,
            "option_3" => $request->option_3,
        ]);

        $user->update([
            "step_3" => true
        ]);

        return Redirect::route('dashboard');
    }
}
