<?php

namespace Tests\Feature\User;

use App\Models\Major;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class InputBiodataTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_input_biodata_can_be_rendered(): void
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)->get('/dashboard/biodata');

        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("User/EditBiodata")
        );
    }

    public function test_input_biodata_can_upload(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->put('/dashboard/biodata', [
            "father" => [
                'name' => fake()->name("male"),
                'income' => "0",
                'work' => "wirausaha",
                'education' => "s1",
                'phone' => random_int(10000000000, 99999999999),
            ],
            "mother" => [
                'name' => fake()->name("female"),
                'income' => "0",
                'work' => "wirausaha",
                'education' => "s1",
                'phone' => random_int(10000000000, 99999999999),
            ],
            "school" => "SMP 1 ",
            "date_birthday" => fake()->date(),
            "birth_place"   => "Tulungagung",
            "province"      => [
                "title" => "Jawa timur"
            ],
            "city"          => [
                "title" => "Tulungagung"
            ],
            "subdistrict"   => [
                "title" => "Boyolangu"
            ],
            "village"       => [
                "title" => "Beji"
            ],
            "address"       => fake()->address(),
        ]);

        $response->assertRedirect('/dashboard')->assertSessionHasNoErrors();
    }

    public function test_unauthorized_admin_cannot_access_features(): void
    {
        $user = User::factory()->admin()->create();

        $response = $this->actingAs($user)->get('/dashboard/biodata');
        $response->assertStatus(401);

        $response_upload = $this->actingAs($user)->put('/dashboard/biodata', [
            "father" => [
                'name' => fake()->name("male"),
                'income' => "0",
                'work' => "wirausaha",
                'education' => "s1",
                'phone' => random_int(10000000000, 99999999999),
            ],
            "mother" => [
                'name' => fake()->name("female"),
                'income' => "0",
                'work' => "wirausaha",
                'education' => "s1",
                'phone' => random_int(10000000000, 99999999999),
            ],
            "school" => "SMP 1 ",
            "date_birthday" => fake()->date(),
            "birth_place"   => "Tulungagung",
            "province"      => [
                "title" => "Jawa timur"
            ],
            "city"          => [
                "title" => "Tulungagung"
            ],
            "subdistrict"   => [
                "title" => "Boyolangu"
            ],
            "village"       => [
                "title" => "Beji"
            ],
            "address"       => fake()->address(),
        ]);
        $response_upload->assertStatus(401);
    }

    public function test_filter_user_cannot_access_features(): void
    {
        $user1 = User::factory()->step_1()->create();
        $user2 = User::factory()->step_2()->create();
        Major::factory(8)->create();
        $user3 = User::factory()->step_3()->create();

        $users = [$user1, $user2, $user3];

        foreach ($users as $key => $user) {
            try {
                $response = $this->actingAs($user)->get('/dashboard/biodata');
                $response->assertStatus(404);

                $response_upload = $this->actingAs($user)->put('/dashboard/biodata', [
                    "father" => [
                        'name' => fake()->name("male"),
                        'income' => "0",
                        'work' => "wirausaha",
                        'education' => "s1",
                        'phone' => random_int(10000000000, 99999999999),
                    ],
                    "mother" => [
                        'name' => fake()->name("female"),
                        'income' => "0",
                        'work' => "wirausaha",
                        'education' => "s1",
                        'phone' => random_int(10000000000, 99999999999),
                    ],
                    "school" => "SMP 1 ",
                    "date_birthday" => fake()->date(),
                    "birth_place"   => "Tulungagung",
                    "province"      => [
                        "title" => "Jawa timur"
                    ],
                    "city"          => [
                        "title" => "Tulungagung"
                    ],
                    "subdistrict"   => [
                        "title" => "Boyolangu"
                    ],
                    "village"       => [
                        "title" => "Beji"
                    ],
                    "address"       => fake()->address(),
                ]);
                $response_upload->assertStatus(404);
            } catch (\Exception $e) {
                $this->fail("user" . $key + 1 . "can access"  . $e->getMessage());
            }
        }
    }
}
