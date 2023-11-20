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
        Schema::create('asistencias', function (Blueprint $table) {
            $table->id();
            $table->timestamp('asi_ingreso');
            $table->timestamp('asi_salida')->nullable();
            $table->string('asi_estado');
            $table->unsignedBigInteger('usu_id');
            $table->foreign('usu_id')->references('id')->on('users');
            $table->unsignedBigInteger('eve_id');
            $table->foreign('eve_id')->references('id')->on('eventos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('asistencias');
    }
};
