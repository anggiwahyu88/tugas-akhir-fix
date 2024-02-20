<?php

namespace Database\Seeders;

use App\Models\News_categorys;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class News_categorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        News_categorys::factory(8)->create();
    }
}
