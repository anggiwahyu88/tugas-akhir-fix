<?php

namespace Tests\Feature\Admin;

use App\Models\Major;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PenerimaanTest extends TestCase
{
    use RefreshDatabase;

    public function penerimaan()
    {
        Major::factory(8)->create();
        User::factory(10)->step_3()->create();
        $user = User::factory()->admin()->create();

        $response = $this->actingAs($user)->post('penerimaan/', [
            "dpib" => 1,
            "tkro" => 1,
            "tbsm" => 1,
            "tp" => 1,
            "tpm" => 1,
            "titl" => 1,
            "tkj" => 1,
            "tei" => 1,
        ]);
        $response->assertOk();
    }
}
