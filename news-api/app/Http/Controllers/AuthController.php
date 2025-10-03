<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
   
    public function Login(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]); 

        $credentials = $request->only('email', 'password');
        if(!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        } 

        $user = Auth::user();

        if(request()->expectsJson()) {
           $token = $user->createToken('auth_token')->plainTextToken;

           return response()->json( [
            'message' => 'Login succesful',
            'user' => $user,
            'access_token' => $token,
           ], 200);
        } else {
            request()->session()->regenerate();
            return response()->json([
                'message' => 'Login success',
                'user' => $user,
            ], 200);
        }
    } 



    public function Logout(Request $request) {
        if($request->expectsJson()) {
            $request->user()->currentAccessToken()->delete(); 
            return response()->json([
                'message' => 'Logged out successfully',
            ], 200); 
        } else {
            Auth::Logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();  
            return response()->json([
                'message' => 'Logged out successfully',
            ], 200);     
         }
    }
} 