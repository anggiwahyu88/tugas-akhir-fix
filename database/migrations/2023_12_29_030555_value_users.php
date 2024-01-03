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
        Schema::create('value_users', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("id_user");
            $table->integer("semester_1");
            $table->integer("semester_2");
            $table->integer("semester_3");
            $table->integer("semester_4");
            $table->integer("semester_5");

            $table->foreign("id_user")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('value_users');
    }
};
