<?php

namespace Database\Factories;

use App\Models\Major;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Major_userFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $majorIds = Major::pluck('id')->toArray();
        shuffle($majorIds);
        return [
            "option_1" => array_shift($majorIds),
            "option_2" => array_shift($majorIds),
            "option_3" => array_shift($majorIds),
        ];
    }
}
