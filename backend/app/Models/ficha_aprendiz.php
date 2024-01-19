<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ficha_aprendiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'fic_ficha',
        'fic_jornada',
        'fic_fechainicio',
        'fic_fechafin',
        'users_id',
        'ficha_for'
    ];
    
    protected $primaryKey = 'fic_ficha';
}
