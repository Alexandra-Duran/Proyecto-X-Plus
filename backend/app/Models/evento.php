<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class evento extends Model
{
    use HasFactory;

    protected $table = 'eventos';

    protected $fillable = [
        'eve_tipo',
        'eve_nombre',
        'eve_area',
        'eve_fechainicio',
        'eve_fechafin',
        'eve_estado',
        'usu_id'
    ];
}
