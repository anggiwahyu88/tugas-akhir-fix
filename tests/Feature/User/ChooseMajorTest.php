<?php

namespace Tests\Feature\User;

use App\Models\Major;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class ChooseMajorTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_input_biodata_can_be_rendered(): void
    {
        $user = User::factory()->step_2()->create();
        Major::factory(8)->create();
        $response = $this->actingAs($user)->get('/dashboard/jurusan');

        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("User/ChooseMajor")
        );
    }

    public function test_input_biodata_can_upload(): void
    {
        $user = User::factory()->step_2()->create();
        $major = Major::factory(8)->create();
        $response = $this->actingAs($user)->post('/dashboard/jurusan', [
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ]);
        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_unauthorized_admin_cannot_access_features(): void
    {
        $user = User::factory()->admin()->create();

        $major = Major::factory(3)->create();
        $response = $this->actingAs($user)->get('/dashboard/jurusan');
        $response->assertStatus(401);

        $response_upload = $this->actingAs($user)->post('/dashboard/jurusan', [
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ]);
        $response_upload->assertStatus(401);
    }

    public function test_filter_user_cannot_access_features(): void
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->step_1()->create();
        $major = Major::factory(8)->create();
        $user3 = User::factory()->step_3()->create();

        $users = [$user1, $user2, $user3];

        foreach ($users as $key => $user) {
            try {
                $response = $this->actingAs($user)->get('/dashboard/jurusan');
                $response->assertStatus(404);

                $response_upload = $this->actingAs($user)->post('/dashboard/jurusan', [
                    "option_1" => $major[0]->id,
                    "option_2" => $major[1]->id,
                    "option_3" => $major[2]->id,
                ]);
                $response_upload->assertStatus(404);
            } catch (\Exception $e) {
                $this->fail("user" . $key + 1 . "can access"  . $e->getMessage());
            }
        }
    }
}
