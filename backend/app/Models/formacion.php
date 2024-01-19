<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class formacion extends Model
{
    use HasFactory;

    protected $table = 'formacions';

    protected $fillable = [
        'for_ficha',
        'for_tipo',
        'for_nombre',
        // 'for_jornada',
        // 'for_fechainicio',
        // 'for_fechafin',
        'for_estado'
    ];
    
    protected $primaryKey = 'for_ficha';
}
