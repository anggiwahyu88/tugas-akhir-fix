<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('major_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_user");
            $table->unsignedBigInteger("option_1");
            $table->unsignedBigInteger("option_2");
            $table->unsignedBigInteger("option_3");

            $table->foreign("id_user")->references("id")->on("users");
            $table->foreign("option_1")->references("id")->on("majors");
            $table->foreign("option_2")->references("id")->on("majors");
            $table->foreign("option_3")->references("id")->on("majors");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('major_users');
    }
};
