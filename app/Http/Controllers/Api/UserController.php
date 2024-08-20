<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function registration(Request $request)
    {
        $validation = Validator::make($request->all() ,[
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validation->fails())
        {
            return response()->json($validation->errors(), 202);
        }

        $allData = $request->all();

        $allData['password'] = bcrypt($allData['password']);

        $user = User::create($allData);

        $resArr = [];
        $resArr['token'] = $user->createToken('api-application')->accessToken;
        $resArr['name'] = $user->name;

        return response()->json($resArr, 200);
    }

    public function login(Request $request)
    {
        if(Auth::attempt([
            'email' => $request->email,
            'password' => $request->password
        ])) {
            $user = Auth::user();

            $resArr = [];
            $resArr['token'] = $user->createToken('api-application')->accessToken;
            $resArr['name'] = $user->name;

            return response()->json($resArr, 200);
        }else {
            return response()->json(['error' => 'Unauthorized Access'], 203);
        }
    }

    public function getProfileDetails()
    {
        return response()->json([
            'success' => true,
            'data' => Auth::user(),
        ], 200);
    }

    public function logout(Request $request)
    {
        $user = $request->user();

        // Revoke the user's access token
        $user->token()->revoke();

        return response()->json([
            'success' => true,
            'message' => 'Logged out successfully.'
        ], 200);
    }
}
