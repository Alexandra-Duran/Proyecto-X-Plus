<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\evento;
use Illuminate\Http\Request;

class EventosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        
        $eventos = evento::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $eventos
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
        //
        $request->validate([
            'eve_tipo' => 'required',
            'eve_nombre' => 'required',
            'eve_area' => 'required',
            'eve_fechainicio' => 'required',
            'eve_fechafin' => 'required',
            'eve_estado' => 'required',
            'usu_id' => 'required'
        ]);

        $evento = evento::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $evento
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
    public function update(Request $request, evento $evento)
    {
        //
        $request->validate([
            'eve_tipo' => 'required',
            'eve_nombre' => 'required',
            'eve_area' => 'required',
            'eve_fechainicio' => 'required',
            'eve_fechafin' => 'required',
            'eve_estado' => 'required',
            'usu_id' => 'required'
        ]);

        $evento->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $evento
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(evento $evento)
    {
        $evento->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => null
        ]);
    }
}
