<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cargo extends Model
{
    use HasFactory;

    protected $table = 'cargos';

    protected $fillable = [
        'car_nombre',
        'car_descripcion',
        'car_estado'
    ];  
}
