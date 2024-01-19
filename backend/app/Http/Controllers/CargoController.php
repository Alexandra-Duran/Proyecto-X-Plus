<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\cargo;
use Illuminate\Http\Request;

class CargoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $cargos = cargo::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $cargos
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
            'car_nombre' => 'required',
            'car_descripcion' => 'required',
            'car_estado' => 'required'
        ]);

        $cargo = cargo::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $cargo
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
    public function update(Request $request, cargo $cargo)
    {
        //
        $request->validate([
            'car_nombre' => 'required',
            'car_descripcion' => 'required',
            'car_estado' => 'required'
        ]);

        $cargo->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $cargo
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(cargo $cargo)
    {
        //
        $cargo->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => null
        ]);
    }
}
