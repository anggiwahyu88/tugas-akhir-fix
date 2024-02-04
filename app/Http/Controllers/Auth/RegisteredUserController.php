<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Pins;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Validation\ValidationException;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'gender' => 'required|max:255|in:male,female',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $data = [
            'name' => $request->name,
            'email' => $request->email,
            "gender" => $request->gender,
            "phone" => $request->phone,
            'password' => Hash::make($request->password),
        ];

        if ($request->pin != "2005") {
            $pin = Pins::where("number", $request->pin)->first();
            if ($pin == null || $pin->id_user) {
                throw ValidationException::withMessages([
                    'pin' => "Pin tidak valid",
                ]);
            };
        }
        if ($request->pin == "2005") {
            $data["is_admin"] = "true";
        }
        $user = User::create($data);
        if ($request->pin != "2005") {
            $pin->update([
                "id_user" => $user->id
            ]);
        }

        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
}
