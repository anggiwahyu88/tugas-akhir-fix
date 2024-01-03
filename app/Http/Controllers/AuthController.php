<?php

namespace App\Http\Controllers;

use App\Models\Pins;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // $request->validate([
        //     "name" => "required|string",
        //     "email" => "required|email|unique:" . User::class,
        //     "gender" => "required|string",
        //     "phone" => "required",
        //     "password" => "required"
        // ]);

        $pin = Pins::where("number", $request->pin)->first();
        if ($pin == null || $pin->id_user) return response()->json([
            "status_code" => 400,
            "message" => "pin tidak valid"
        ], 200);

        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "gender" => $request->gender,
            "phone" => $request->phone,
            "password" => md5($request->password),
        ]);
        $pin->update([
            "id_user" => $user->id
        ]);
        $token = $user->createToken('api-tugas-akhir')->plainTextToken;
        return response()->json([
            "status_code" => 200,
            "message" => "register succses",
            "user" => [
                "name" => $user->name,
                "email" => $user->email,
                "token" => $token,
            ]
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);
        $user = User::where("email", $request->email)->first();
        if ($user == null || $user->password != md5($request->password)) {
            return response()->json([
                "status_code" => 400,
                "message" => "password invalid"
            ], 200);
        };
        $token = $user->createToken("api-tugas-akhir")->plainTextToken;

        return response()->json([
            "status_code" => 200,
            "message" => "login succses",
            "user" => [
                "name" => $user->name,
                "email" => $user->email,
                "token" => $token,
            ]
        ]);
    }

    public function logout(Request $request)
    {
        $user = $request->user()->token();
        return $user;
    }
}
