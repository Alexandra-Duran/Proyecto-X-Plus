<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $persona = persona::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $persona
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
            'per_documento' => 'required',
            'per_tipodoc' => 'required',
            'per_nombre' => 'required',
            'per_apellido' => 'required',
            'per_telefono' => 'required',
            'per_email' => 'required',
            'per_genero' => 'required',
            'per_foto' => 'required',
            'per_estado' => 'required'
        ]);

        $personas = persona::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $personas
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $per_documento)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $per_documento)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, persona $persona)
    {
        //
        $request->validate([
            'per_documento' => 'required',
            'per_tipodoc' => 'required',
            'per_nombre' => 'required',
            'per_apellido' => 'required',
            'per_telefono' => 'required',
            'per_email' => 'required',
            'per_genero' => 'required',
            'per_foto' => 'required',
            // 'per_estado' => 'required'
        ]);

        $persona->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $persona
        ]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(persona $persona)
    {
        //
        $persona->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => null
        ]);
    }
}
