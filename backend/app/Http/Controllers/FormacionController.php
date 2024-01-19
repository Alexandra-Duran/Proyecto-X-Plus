<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\formacion;
use Illuminate\Http\Request;

class FormacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $formacions = formacion::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $formacions
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
            'for_ficha' => 'required',
            'for_tipo' => 'required',
            'for_nombre' => 'required',
            // 'for_jornada' => 'required',
            // 'for_fechainicio' => 'required',
            // 'for_fechafin' => 'required',
            'for_estado' => 'required'
        ]);

        $formacion = formacion::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $formacion
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $for_ficha)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $for_ficha)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, formacion $formacion)
    {
        //
        $request->validate([
            'for_ficha' => 'required',
            'for_tipo' => 'required',
            'for_nombre' => 'required',
            // 'for_jornada' => 'required',
            // 'for_fechainicio' => 'required',
            // 'for_fechafin' => 'required',
            'for_estado' => 'required'
        ]);

        $formacion->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $formacion
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(formacion $formacion)
    {
        //
        $formacion->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'date' => null
        ]);
    }
}
