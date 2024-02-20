<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MajorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name"=> fake()->unique()->randomElement(["Desain Pemodelan & Informasi Bangunan",
            "Teknik Instalasi Tenaga Listrik",
            "Teknik Pemesinan",
            "Teknik Pengelasan",
            "Teknik Kendaraan Ringan Otomotif",
            "Teknik & Bisnis Sepeda Motor",
            "Teknik Elektronik Industri",
            "Teknik Komputer Jaringan"])
        ];
    }
}
