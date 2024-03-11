<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Value_userFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "semester_1" => random_int(100, 400),
            "semester_2" => random_int(100, 400),
            "semester_3" => random_int(100, 400),
            "semester_4" => random_int(100, 400),
            "semester_5" => random_int(100, 400),
        ];
    }
}
