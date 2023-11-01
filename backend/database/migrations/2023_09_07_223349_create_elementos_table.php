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
        Schema::create('elementos', function (Blueprint $table) {
            $table->string('ele_serial')->primary();
            $table->string('ele_tipo');
            $table->string('ele_marca');
            $table->string('ele_modelo');
            $table->string('ele_color');
            $table->string('ele_foto');
            $table->string('ele_observacion');
            $table->string('ele_estado');
            $table->string('per_id');
            $table->foreign('per_id')->references('per_documento')->on('personas');
            $table->unsignedBigInteger('tip_id');
            $table->foreign('tip_id')->references('id')->on('tipo_elementos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('elementos');
    }
};
