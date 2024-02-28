<?php

namespace Database\Factories;

use App\Models\Major;
use App\Models\Major_user;
use App\Models\Value_user;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

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
            'is_admin' => "false",
            "step_1" => "false",
            "step_2" => "false",
            "step_3" => "false",
        ];
    }

    public function admin(): UserFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'is_admin' => "true",
            ];
        });
    }
    public function step_1(): UserFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'step_1' => "true",
            ];
        });
    }
    public function step_2(): UserFactory
    {
        return $this->state(function (array $attributes) {
            return [
                'step_1' => "true",
                'step_2' => "true",
            ];
        });
    }
    public function step_3(): UserFactory
    {
        return $this->state(function (array $attributes) {
            $value = Value_user::create([
                "semester_1" => random_int(100, 400),
                "semester_2" => random_int(100, 400),
                "semester_3" => random_int(100, 400),
                "semester_4" => random_int(100, 400),
                "semester_5" => random_int(100, 400),
            ]);
            return [
                
                "id_value" => $value->id,
                'step_1' => "true",
                'step_2' => "true",
                'step_3' => "true",
            ];
        });
    }
}
