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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('phone')->unique();
            $table->enum("gender", ["male", "female"]);
            $table->date("date_birthday")->nullable();
            $table->string('birth_place')->nullable();
            $table->unsignedBigInteger('id_address')->nullable();
            $table->unsignedBigInteger('id_father')->nullable();
            $table->unsignedBigInteger('id_mother')->nullable();
            $table->unsignedBigInteger('id_school')->nullable();
            $table->unsignedBigInteger('id_value')->nullable();
            $table->enum("step_1", ["true", "false"])->default("false");
            $table->enum("step_2", ["true", "false"])->default("false");
            $table->enum("step_3", ["true", "false"])->default("false");
            $table->enum("is_admin", ["true", "false"])->default("false");
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();

            $table->foreign("id_father")->references("id")->on("fathers");
            $table->foreign("id_mother")->references("id")->on("mothers");
            $table->foreign("id_school")->references("id")->on("schools");
            $table->foreign("id_value")->references("id")->on("value_users");
            $table->foreign("id_address")->references("id")->on("address_users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
