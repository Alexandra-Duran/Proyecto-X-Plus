<?php

use App\Http\Controllers\API\Auth\LoginController;
use App\Http\Controllers\API\Auth\RegisterController;
use App\Http\Controllers\PersonaController;
use App\Http\Controllers\CargoController;
use App\Http\Controllers\ElementoController;
use App\Http\Controllers\EventosController;
use App\Http\Controllers\FichaAprendizController;
use App\Http\Controllers\FormacionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TipoElementoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::resource('personas', PersonaController::class);
Route::resource('cargos', CargoController::class);
Route::resource('eventos', EventosController::class);
Route::resource('formacions', FormacionController::class);
Route::resource('users', UserController::class);
Route::resource('tipo-elementos', TipoElementoController::class);
Route::resource('ficha-aprendizs', FichaAprendizController::class);
Route::resource('elementos', ElementoController::class);

Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);

Route::post('/consultar', [LoginController::class, 'obtenerMiInformacion']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

