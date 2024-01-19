<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class elemento extends Model
{
    use HasFactory;
    protected $table = 'elementos';

    protected $fillable = [
        'ele_serial',
        'ele_tipo',
        'ele_marca',
        'ele_modelo', 
        'ele_color',
        'ele_foto',
        'ele_observacion',
        'ele_estado',
        'per_id',
        'tip_id'
    ];

    protected $primaryKey = 'ele_serial';
    protected $keyType = 'string';
}
