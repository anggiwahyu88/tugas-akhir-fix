<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pins;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;


class PinController extends Controller
{
    public function store()
    {
        return Inertia::render('Admin/Pin');
    }

    public function create(Request $request): RedirectResponse
    {
        Pins::create([
            "number" => $request->pin
        ]);
        return Redirect::route('dashboard');
    }
}
