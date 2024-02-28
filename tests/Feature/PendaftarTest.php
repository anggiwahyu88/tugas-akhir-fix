<?php

namespace Tests\Feature;

use App\Models\Major;
use App\Models\Major_user;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PendaftarTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
    public function test_example(): void
    {
        Major::factory(8)->create();
        $student= User::factory(20)->step_3()->create();
        $user = User::factory()->admin()->create();
        $major = Major::all();
        $id_major = $major->map(function ($data) {
            return $data->id;
        });

        foreach ($student as $key => $value) {
            Major_user::create([
                "id_user" => $value->id,
                "option_1" => fake()->randomElement($id_major),
                "option_2" => fake()->randomElement($id_major),
                "option_3" => fake()->randomElement($id_major),
            ]);
        }
        $response = $this->actingAs($user)->post('/dashboard/pendaftar/', [
            "dpib" => 1,
            "tkro" => 1,
            "tbsm" => 1,
            "tp" => 2,
            "tpm" => 1,
            "titl" => 1,
            "tkj" => 1,
            "tei" => 1,
        ]);
        $response->assertOk();
    }
}
