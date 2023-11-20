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
        Schema::create('eventos', function (Blueprint $table) {
            $table->id();
            $table->string('eve_tipo');
            $table->string('eve_nombre');
            $table->string('eve_area');
            $table->timestamp('eve_fechainicio');
            $table->timestamp('eve_fechafin')->nullable();
            $table->string('eve_estado');
            $table->unsignedBigInteger('usu_id');
            $table->foreign('usu_id')->references('id')->on('users');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('eventos');
    }
};
