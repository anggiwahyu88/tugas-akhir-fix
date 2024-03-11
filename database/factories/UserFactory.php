<?php

namespace Database\Factories;

use App\Models\Address_users;
use App\Models\Major_user;
use App\Models\Schools;
use App\Models\User;
use App\Models\Value_user;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => random_int(10000000000, 99999999999),
            'gender' => fake()->randomElement(['male', 'female']),
            'password' => static::$password ??= Hash::make('password'),
            'is_admin' => false,
            "step_1" => false,
            "step_2" => false,
            "step_3" => false,
        ];
    }

    public function admin(): UserFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'is_admin' => true,
            ];
        });
    }
    
    public function step_1(): UserFactory
    {
        $school = Schools::firstOrCreate(['name' => "Smp 1 tulungagung"]);
        $userAttributes = [
            "id_school"     => $school->id,
            "id_address"    => Address_users::factory(),
            "date_birthday" => fake()->date(),
            "birth_place"   => "Tulungagung",
            'step_1'        => true,
            'step_2'        => false,
            'step_3'        => false,
        ];

        $user = $this->state(fn () => $userAttributes);
        return $user;
    }
    public function step_2(): UserFactory
    {
        $school = Schools::firstOrCreate(['name' => "Smp 1 tulungagung"]);
        $userAttributes = [
            "id_school"     => $school->id,
            "id_address"    => Address_users::factory(),
            "date_birthday" => fake()->date(),
            "birth_place"   => "Tulungagung",
            "id_value"      => Value_user::factory(),
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => false,
        ];

        $user = $this->state(fn () => $userAttributes);
        return $user;
    }

    public function step_3(): UserFactory
    {
        $school = Schools::firstOrCreate(['name' => "Smp 1 tulungagung"]);
        $userAttributes = [
            "id_school"     => $school->id,
            "id_address"    => Address_users::factory(),
            "date_birthday" => fake()->date(),
            "birth_place"   => "Tulungagung",
            "id_value"      => Value_user::factory(),
            'step_1'        => true,
            'step_2'        => true,
            'step_3'        => true,
        ];
        $user = $this->state(fn () => $userAttributes)->afterCreating(function (User $user) {
            Major_user::factory()->state([
                "id_user"=> $user->id
            ])->create();
        });
        return $user;
    }
}
