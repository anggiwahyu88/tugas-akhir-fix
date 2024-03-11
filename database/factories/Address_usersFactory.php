<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class Address_usersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "province"      => "Jawa timur",
            "city"          => "Tulungagung",
            "subdistrict"   => "Boyolangu",
            "village"       => "Beji",
            "address"       => fake()->address(),
        ];
    }
}
