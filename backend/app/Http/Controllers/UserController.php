<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\user;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $users = User::all();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $users
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
            'password' => 'required',
            'usu_estado' => 'required',
            'per_id' => 'required',
            'email' => 'required',
            'car_id' => 'required'
        ]);

        $user = User::create($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $user
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
    public function update(Request $request, User $user)
    {
        //
        $request->validate([
            'email' => 'required',
            'password' => 'required',
            'usu_estado' => 'required',
            'per_id' => 'required',
            'car_id' => 'required'
        ]);


        $user->update($request->all());

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $user
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
        $user->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => null
        ]);
    }
}
