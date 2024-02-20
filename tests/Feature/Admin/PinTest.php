<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PinTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_upload_pin_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();
        $response = $this->actingAs($user)->get('dashboard/pin');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/Pin")
        );
    }

    public function test_new_pin_can_upload(): void
    {
        $user = User::factory()->admin()->create();
        $response = $this->actingAs($user)->post('dashboard/pin', [
            'pin' => random_int(1000, 99999)
        ]);
        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }
    
    public function test_unauthorized_user_cannot_access_features(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->get('dashboard/pin');
        $response->assertStatus(401);

        $response_upload = $this->actingAs($user)->post('dashboard/pin', [
            'pin' => random_int(1000, 99999)
        ]);
        $response_upload->assertStatus(401);
    }
}
