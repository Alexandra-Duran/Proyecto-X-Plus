<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ficha_aprendiz;
use Illuminate\Http\Request;

class FichaAprendizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $ficha_aprendizs = ficha_aprendiz::all();
        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $ficha_aprendizs
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
            'fic_ficha' => 'required',
            'fic_jornada' => 'required',
            'fic_fechainicio' => 'required',
            'fic_fechafin' => 'required',
            'users_id' => 'required',
            'ficha_for' => 'required'
        ]);

        $ficha_aprendiz = ficha_aprendiz::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $ficha_aprendiz
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $fic_ficha)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $fic_ficha)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ficha_aprendiz $ficha_aprendiz)
    {
        //
        $request->validate([
            'fic_ficha' => 'required',
            'fic_jornada' => 'required',
            'fic_fechainicio' => 'required',
            'fic_fechafin' => 'required',
            'users_id' => 'required',
            'ficha_for' => 'required'
        ]);

        $ficha_aprendiz->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $ficha_aprendiz
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ficha_aprendiz $ficha_aprendiz)
    {
        //
        $ficha_aprendiz->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'date' => null
        ]);
    }
}
