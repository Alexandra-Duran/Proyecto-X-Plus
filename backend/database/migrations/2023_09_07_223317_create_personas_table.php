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
        Schema::create('personas', function (Blueprint $table) {
            $table->string('per_documento')->primary();
            $table->string('per_tipodoc');
            $table->string('per_nombre');
            $table->string('per_apellido');
            $table->string('per_telefono');
            $table->string('per_email');
            $table->string('per_genero');
            $table->string('per_foto');
            $table->string('per_estado');
            $table->timestamps();            
           
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('personas');
    }
};
