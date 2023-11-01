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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id();
            $table->string('usu_contraseña');
            $table->string('usu_nombre');
            $table->string('usu_estado');
            $table->unsignedBigInteger('car_id');
            $table->foreign('car_id')->references('id')->on('cargos');
            $table->string('per_id');
            $table->foreign('per_id')->references('per_documento')->on('personas');
            $table->string('for_id');
            $table->foreign('for_id')->references('for_ficha')->on('formacions');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('usuarios');
    }
};
