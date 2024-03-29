<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Major;
use App\Models\Major_user;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;


class MajorController extends Controller
{
    public function show(Request $request)
    {
        $user = $request->user();
        $major = Cache::get('major');
        if ($major == null) {
            $major = Major::all();
            Cache::put('major', $major, 1000);
        }

        if ($user->step_1 && $user->step_2 && !$user->step_3) return Inertia::render('User/ChooseMajor', [
            "major" => $major
        ]);
        return abort(404);
    }

    public function create(Request $request): RedirectResponse
    {
        $user = $request->user();
        if ($user->step_1 && $user->step_2 && !$user->step_3) {
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
        return abort(404);
    }
}
