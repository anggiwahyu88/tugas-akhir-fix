<?php

namespace Database\Seeders;

use App\Models\Major;
use App\Models\Major_user;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory(2)->admin()->create();
        User::factory(2)->step_1()->create();
        User::factory(2)->step_2()->create();
        User::factory(10)->step_3()->create();
        User::factory(2)->create();
    }
}
