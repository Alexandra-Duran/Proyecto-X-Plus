<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tipo_elemento extends Model
{
    use HasFactory;

    protected $table = 'tipo_elementos';

    protected $fillable = [
        'tip_nombre',
        'tip_descripcion',
        'tip_estado'
    ];
}
