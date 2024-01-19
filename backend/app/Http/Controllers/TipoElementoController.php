<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\tipo_elemento;
use Illuminate\Http\Request;

class TipoElementoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $tipo_elementos = tipo_elemento::all();

        return response()->json([
            'status' => 'success',
            'message' => '¡Exito!',
            'data' => $tipo_elementos

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
        'tip_nombre' => 'required',
        'tip_descripcion' => 'required',
        'tip_estado' => 'required'
        ]);

        $tipo_elemento = tipo_elemento::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => '¡Exito!',
            'data' => $tipo_elemento
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, tipo_elemento $tipo_elemento)
    {
        $request->validate([
            'tip_nombre' => 'required',
            'tip_descripcion' => 'required',
            'tip_estado' => 'required'
        ]);
    
            $tipo_elemento->update($request->all());
    
            return response()->json([
                'status' => 'success',
                'message' => '¡Exito!',
                'data' => $tipo_elemento
            ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(tipo_elemento $tipo_elemento)
    {
        $tipo_elemento->delete();
        
        return response()->json([
            'status' => 'success',
            'message' => '¡Exito!',
            'data' => null
        ]);
    }
}
