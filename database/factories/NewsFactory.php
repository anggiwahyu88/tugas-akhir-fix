<?php

namespace Database\Factories;

use App\Models\News_categorys;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(),
            'content' => "<p>lorem<p>",
            'thumnil' => fake()->url(),
            'id_category' => News_categorys::factory(),
        ];
    }

    public function author($id): NewsFactory
    {
        return $this->state(function (array $attributes) use ($id) {
            return [
                'id_author' => $id,
            ];
        });
    }

    public function category($id): NewsFactory
    {
        return $this->state(function (array $attributes) use ($id) {
            return [
                'id_category' => $id,
            ];
        });
    }
}
