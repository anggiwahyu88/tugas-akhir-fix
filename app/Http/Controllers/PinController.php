<?php

namespace App\Http\Controllers;

use App\Models\Pins;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class PinController extends Controller
{
    public function store()
    {
        return Inertia::render('Pin');
    }

    public function create(Request $request): RedirectResponse
    {
        Pins::create([
            "number" => $request->pin
        ]);
        return Redirect::route('dashboard');
    }
}
