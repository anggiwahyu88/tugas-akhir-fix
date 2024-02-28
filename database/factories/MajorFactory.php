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
        $major = fake()->unique()->randomElement([
            [
                "name" => "Desain Pemodelan & Informasi Bangunan",
                "nickname" => "dpib"
            ],
            [
                "name" => "Teknik Instalasi Tenaga Listrik",
                "nickname" => "titl"
            ],
            [
                "name" => "Teknik Pemesinan",
                "nickname" => "tpm"
            ],
            [
                "name" => "Teknik Pengelasan",
                "nickname" => "tp"
            ],
            [
                "name" => "Teknik Kendaraan Ringan Otomotif",
                "nickname" => "tkro"
            ],
            [
                "name" => "Teknik & Bisnis Sepeda Motor",
                "nickname" => "tbsm"
            ],
            [
                "name" => "Teknik Elektronik Industri",
                "nickname" => "tei"
            ],
            [
                "name" => "Teknik Komputer Jaringan",
                "nickname" => "tkj"
            ],
        ]);
        return $major;
    }
}
