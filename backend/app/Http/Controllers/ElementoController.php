<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\elemento;
use Illuminate\Http\Request;

class ElementoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $elementos = elemento::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $elementos
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
            'ele_serial'=> 'required',
            'ele_tipo'=> 'required',
            'ele_marca'=> 'required',
            'ele_modelo'=> 'required', 
            'ele_color'=> 'required',
            'ele_foto'=> 'required',
            'ele_observacion'=> 'required',
            'ele_estado'=> 'required',
            'per_id'=> 'required',
            'tip_id'=> 'required'
        ]);

        $elemento = elemento::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $elemento
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $ele_serial)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $ele_serial)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, elemento $elemento)
    {
        //
        $request->validate([
            'ele_serial'=> 'required',
            'ele_tipo'=> 'required',
            'ele_marca'=> 'required',
            'ele_modelo'=> 'required', 
            'ele_color'=> 'required',
            'ele_foto'=> 'required',
            'ele_observacion'=> 'required',
            'ele_estado'=> 'required',
            'per_id'=> 'required',
            'tip_id'=> 'required'
        ]);

        $elemento->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $elemento
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(elemento $elemento)
    {
        //
        $elemento->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => null
        ]);
    }
}
