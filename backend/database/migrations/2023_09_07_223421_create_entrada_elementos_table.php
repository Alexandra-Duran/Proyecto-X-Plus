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
        Schema::create('entrada_elementos', function (Blueprint $table) {
            $table->id();
            $table->string('ele_id');
            $table->foreign('ele_id')->references('ele_serial')->on('elementos');
            $table->unsignedBigInteger('ent_id');
            $table->foreign('ent_id')->references('id')->on('entrada_salidas');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entrada_elementos');
    }
};
