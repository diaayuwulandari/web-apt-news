<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Catch_;

class CategoryController extends Controller
{ 

   

   public function update(Request $request, $id) { 
    $category = Category::find($id);
     $request->validate([
        'name' => 'required|string|unique:categories,name,'.$category->id, 
    ]);

    $category->update([
        'name' =>$request->name, 
    
    ]);

    return response()->json([
        'message' => 'Category updated succesfully',
        'data' => $category
    ], 200);
    
   }

    public function index(){
        $category = Category::aLL(); 
        return response()->json([
            'message' => 'List of cafegories',
            'data' => $category
        ], 200);
    } 

    public function create(Request $request){
        $request->validate([
            'name' => 'required|string|unique:categories,name',
        ]);
         
        $category = Category::create([
            'name' => $request->name,
        ]); 

        return response()->json([
            'massage' => 'Category created succassfuly',
            'data' => $category
        ], 201);
       
    }
}
