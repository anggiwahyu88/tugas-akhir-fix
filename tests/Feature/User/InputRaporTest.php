<?php

namespace Tests\Feature\User;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class InputRaporTest extends TestCase
{
    use RefreshDatabase;

    public function test_input_rapor_can_be_rendered(): void
    {
        $user = User::factory()->step_1()->create();
        $response = $this->actingAs($user)->get('/dashboard/rapor');

        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("User/InputRapor")
        );
    }

    public function test_input_rapor_can_upload(): void
    {
        $user = User::factory()->step_1()->create();

        $response = $this->actingAs($user)->get('/dashboard/rapor');


        $response = $this->actingAs($user)->post('/dashboard/rapor', [
            "semester_1" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_2" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_3" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_4" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_5" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
        ]);

        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_unauthorized_admin_cannot_access_features(): void
    {
        $user = User::factory()->admin()->create();

        $response = $this->actingAs($user)->get('/dashboard/rapor');
        $response->assertStatus(401);

        $response_upload = $this->actingAs($user)->post('/dashboard/rapor', [
            "semester_1" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_2" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_3" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_4" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
            "semester_5" => [
                "inggris" => random_int(10, 100),
                "indonesia" => random_int(10, 100),
                "matematika" => random_int(10, 100),
                "ipa" => random_int(10, 100),
            ],
        ]);
        $response_upload->assertStatus(401);
    }
    public function test_filter_user_cannot_access_features(): void
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->step_2()->create();
        $user3 = User::factory()->step_3()->create();

        $users = [$user1, $user2, $user3];

        foreach ($users as $key => $user) {
            try {
                $response = $this->actingAs($user)->get('/dashboard/rapor');
                $response->assertStatus(404);

                $response_upload = $this->actingAs($user)->post('/dashboard/rapor', [
                    "semester_1" => [
                        "inggris" => 90,
                        "indonesia" => 90,
                        "matematika" => 90,
                        "ipa" => 90,
                    ],
                    "semester_2" => [
                        "inggris" => 90,
                        "indonesia" => 90,
                        "matematika" => 90,
                        "ipa" => 90,
                    ],
                    "semester_3" => [
                        "inggris" => 90,
                        "indonesia" => 90,
                        "matematika" => 90,
                        "ipa" => 90,
                    ],
                    "semester_4" => [
                        "inggris" => 90,
                        "indonesia" => 90,
                        "matematika" => 90,
                        "ipa" => 90,
                    ],
                    "semester_5" => [
                        "inggris" => 90,
                        "indonesia" => 90,
                        "matematika" => 90,
                        "ipa" => 90,
                    ],
                ]);
                $response_upload->assertStatus(404);
            } catch (\Exception $e) {
                $this->fail("user" . $key + 1 . "can access"  . $e->getMessage());
            }
        }
    }
}
