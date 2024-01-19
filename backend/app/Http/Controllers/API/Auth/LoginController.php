<?php 

namespace App\Http\Controllers\API\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController {

    public function login(Request $request)
    {
        
        $user = User::where('email', $request->email)->first();
 
        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Usuario/Contrasena Incorrectos.'],
            ]);
        }
     
        $token = $user->createToken($request->email)->plainTextToken;

        //----
        return response()->json([
            'status' => 'success',
            'message' => 'Inicio de sesion exitoso!',
            'data' => $user,
            'token' => $token
        ]);
    }


    public function obtenerMiInformacion(Request $request) //Body JSON|Array, Parametros|QuerParams Headers
    {
        $user = User::with('persona')->where('per_id', $request->numero_documento)->first();

        return response()->json([
            'status' => 'success',
            'message' => 'Exito!',
            'data' => $user,
        ]);
    }

}