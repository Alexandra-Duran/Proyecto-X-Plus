<?php 

namespace App\Http\Controllers\API\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController {

    public function register(Request $request)
    {
        $newUser = $request->all();
        $newUser['password'] = Hash::make($request->password);
        $user = User::create($newUser);
        //----
        return response()->json([
            'status' => 'success',
            'message' => 'Registro Exitoso!',
            'data' => $user
        ]);
    }

}