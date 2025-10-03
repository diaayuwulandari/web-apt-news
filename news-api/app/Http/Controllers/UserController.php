<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller

{
    public function index()
     {
        $user = User::aLL();
        return response()->json([
            'message' => 'List of users',
            'data' => $user
        ]); 
    
    }
    public function create(Request $request) 
    
    {
        $request->validate([
            'name' => 'required|string ',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6',
            'role' => 'required|in:admin,reporter',
        ]);
        
         
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => $request->role,
        ]); 

        return response()->json([
            'message' => 'User created successfully',
            'data' => $user
        ], 201);
    } 


    public function update(Request $request, $id) {
        $request->validate([
            'name' => 'sometimes|string|',
            'emai' => 'sometimes|string|email|unique::users,email,'.$id,
            'password' => 'nullable|string|min:6',
            'role' => 'sometimes|in:admin,reporter',
        ]);

        $user = User::find($id);
        if(!$user) {
            return response()->json([
                "message" => "User not found"
            ], 404);
        }
        
        $user->update($request->only(['name', 'email', 'role']));

        return response()->json([
            "message" => "User updated successfuly",
            "data" => $user
        ], 200);
    } 

    public function delete($id) {
        $user = User::find($id);
        if(!$user) {
            return response()->json([
                "message" => "User not foud"
            ], 404);
        } 
 
        $user->delete();
        return response()->json([
            "message" => "User deleted successfuly"
        ], 200);
    }
} 
