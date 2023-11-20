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
        Schema::create('entrada_salidas', function (Blueprint $table) {
            $table->id();
            $table->string('ent_porteria');
            $table->timestamp('ent_fechaingreso');
            $table->string('ent_observacion1');
            $table->timestamp('ent_fechasalida')->nullable();
            $table->string('ent_observacion2');
            $table->string('ent_estado');
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
        Schema::dropIfExists('entrada_salidas');
    }
};
