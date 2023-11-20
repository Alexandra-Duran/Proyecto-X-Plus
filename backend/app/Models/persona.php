<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class persona extends Model
{

    use HasFactory;

    protected $table = 'personas';

    protected $fillable = [
        'per_documento',
        'per_tipodoc',
        'per_nombre',
        'per_apellido',
        'per_telefono',
        'per_email',
        'per_genero',
        'per_foto',
        'per_estado'
    ];

    protected $primaryKey = 'per_documento'; //Agg esta linea cuando el campo primario no es llamado por defecto id como lo llama Laravel
}
