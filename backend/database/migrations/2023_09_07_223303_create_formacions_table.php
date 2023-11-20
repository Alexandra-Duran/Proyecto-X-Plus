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
        Schema::create('formacions', function (Blueprint $table) {
            $table->integer('for_ficha')->primary();
            $table->string('for_tipo');
            $table->string('for_nombre');
            $table->string('for_jornada');
            $table->date('for_fechainicio');
            $table->date('for_fechafin');
            $table->string('for_estado');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formacions');
    }
};
