<?php

namespace Tests\Feature;

use App\Models\Address_users;
use App\Models\Major;
use App\Models\Major_user;
use App\Models\Schools;
use App\Models\Students;
use App\Models\User;
use App\Models\Value_user;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PendaftarTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    use RefreshDatabase;
    public function test_pendaftar_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();

        $major = Major::factory(8)->create();
        $school = Schools::create([
            "name" => "smp 1"
        ]);
        $value_user = Value_user::create([
            "semester_1" => 100,
            "semester_2" => 100,
            "semester_3" => 100,
            "semester_4" => 100,
            "semester_5" => 100,
        ]);
        $date = fake()->date();
        $user1 = User::factory()->state([
            "name" => "joni",
            "id_school"     => $school->id,
            "date_birthday" => $date,
            "birth_place"   => "Tulungagung",
            "id_value"      => $value_user,
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ])->create();
        Major_user::factory()->state([
            "id_user" => $user1->id,
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ])->create();

        $response = $this->actingAs($user)->get('dashboard/pendaftar');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/Pendaftar")->has(
                    'registrant.0',
                    fn (Assert $page) => $page
                        ->where("name", "joni")
                        ->where("school.name", "smp 1")
                        ->where("date_birthday", $date)
                        ->where("value.semester_1", 100)
                        ->where("value.semester_2", 100)
                        ->where("value.semester_3", 100)
                        ->where("value.semester_4", 100)
                        ->where("value.semester_5", 100)
                        ->where("major.major_1.name", $major[0]->name)
                        ->where("major.major_2.name", $major[1]->name)
                        ->where("major.major_3.name", $major[2]->name)
                        ->etc()
                )
                ->has("students", 0)
        );
    }

    public function test_upload_pengumuman_can_be_render(): void
    {
        $user = User::factory()->admin()->create();
        $response = $this->actingAs($user)->get('dashboard/pendaftar/pengumuman');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/FormPengumuman")
        );
    }

    public function test_pengumuman_can_upload(): void
    {
        $user = User::factory()->admin()->create();

        $major = Major::factory(8)->create();
        $school = Schools::create([
            "name" => "smp 1"
        ]);
        $value_user1 = Value_user::create([
            "semester_1" => 100,
            "semester_2" => 100,
            "semester_3" => 100,
            "semester_4" => 100,
            "semester_5" => 100,
        ]);
        $value_user2 = Value_user::create([
            "semester_1" => 200,
            "semester_2" => 100,
            "semester_3" => 100,
            "semester_4" => 100,
            "semester_5" => 100,
        ]);
        $value_user3 = Value_user::create([
            "semester_1" => 300,
            "semester_2" => 100,
            "semester_3" => 100,
            "semester_4" => 100,
            "semester_5" => 100,
        ]);
        $date = fake()->date();
        $user1 = User::factory()->state([
            "name" => "jona",
            "id_school"     => $school->id,
            "date_birthday" => $date,
            "birth_place"   => "Tulungagung",
            "id_value"      => $value_user1,
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ])->create();
        $user2 = User::factory()->state([
            "name" => "joni",
            "id_school"     => $school->id,
            "date_birthday" => $date,
            "birth_place"   => "Tulungagung",
            "id_value"      => $value_user2,
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ])->create();
        $user3 = User::factory()->state([
            "name" => "jonu",
            "id_school"     => $school->id,
            "date_birthday" => $date,
            "birth_place"   => "Tulungagung",
            "id_value"      => $value_user3,
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ])->create();

        Major_user::factory()->state([
            "id_user" => $user1->id,
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ])->create();
        Major_user::factory()->state([
            "id_user" => $user2->id,
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ])->create();
        Major_user::factory()->state([
            "id_user" => $user3->id,
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ])->create();

        $response = $this->actingAs($user)->post('dashboard/pendaftar', [
            "dpib" => 1,
            "tkro" => 1,
            "tbsm" => 1,
            "tp" => 1,
            "tpm" => 1,
            "titl" => 1,
            "tkj" => 1,
            "tei" => 1,
        ]);
        $response->assertSessionHasNoErrors()->assertRedirect('/dashboard');
        $students = Students::all();
        $this->assertTrue($students[0]->id == $user3->id || $students[0]->id_major == $major[0]->id);
        $this->assertTrue($students[1]->id == $user2->id || $students[1]->id_major == $major[1]->id);
        $this->assertTrue($students[2]->id == $user1->id || $students[2]->id_major == $major[2]->id);
    }

    public function test_pendaftar_diterima_can_be_rendered(): void
    {
        $user = User::factory()->admin()->create();

        $major = Major::factory(8)->create();
        $school = Schools::create([
            "name" => "smp 1"
        ]);
        $value_user = Value_user::create([
            "semester_1" => 100,
            "semester_2" => 100,
            "semester_3" => 100,
            "semester_4" => 100,
            "semester_5" => 100,
        ]);
        $date = fake()->date();
        $user1 = User::factory()->state([
            "name" => "joni",
            "gender" => "male",
            "id_school"     => $school->id,
            "date_birthday" => $date,
            "birth_place"   => "Tulungagung",
            "id_value"      => $value_user,
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ])->create();
        Major_user::factory()->state([
            "id_user" => $user1->id,
            "option_1" => $major[0]->id,
            "option_2" => $major[1]->id,
            "option_3" => $major[2]->id,
        ])->create();
        Students::create([
            "id_user" => $user1->id,
            "id_major" => $major[0]->id,
            "wave" => 1
        ]);

        $response = $this->actingAs($user)->get('dashboard/pendaftar/diterima');
        $response->assertStatus(200)->assertSessionHasNoErrors()->assertInertia(
            fn (Assert $page) => $page
                ->component("Admin/StudentsAccepted")->has(
                    'students.0',
                    fn (Assert $page) => $page
                        ->where("user.name", "joni")
                        ->where("user.gender", "male")
                        ->where("user.school.name", "smp 1")
                        ->where("user.date_birthday", $date)
                        ->where("major.name", $major[0]->name)
                        ->etc()
                )
        );
    }
}
