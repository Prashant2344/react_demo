<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Admin\TestController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [UserController::class,'registration']);
Route::post('/login', [UserController::class,'login']);
Route::get('/login', [UserController::class,'login']);


Route::middleware('auth:api')->get('/posts', [TestController::class, 'getJsonPostList']);
Route::middleware('auth:api')->get('/profile', [UserController::class, 'getProfileDetails']);
Route::middleware('auth:api')->get('/logout', [UserController::class, 'logout']);