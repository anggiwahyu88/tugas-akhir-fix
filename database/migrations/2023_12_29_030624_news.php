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
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->longText("content");
            $table->string("thumnil");
            $table->unsignedBigInteger("id_category");
            $table->unsignedBigInteger("id_author");
            $table->timestamps();

            $table->foreign("id_category")->references("id")->on("news_categorys");
            $table->foreign("id_author")->references("id")->on("users");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
