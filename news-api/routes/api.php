<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\UserController;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route; 
use App\Http\Middleware\AdminOnly;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request){
    return $request->user();
}); 

Route::prefix('auth')->group(function() {
    Route::post('/login', [AuthController::class, 'login']); 
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});

Route::prefix('news')->group(function() {  
     Route::post('create', [NewsController::class, 'create'])->middleware('auth:sanctum');
     Route::get('/', [NewsController::class, 'index'])->middleware('auth:sanctum');
     Route::post('update/{id}',[NewsController::class, 'update'])->middleware('auth:sanctum');
     Route::delete('delete/{id}',[NewsController::class, 'delete'])->middleware('auth:sanctum');
     Route::get('{id}', [NewsController::class, 'getById'])->middleware('auth:sanctum');
     Route::post('{id}/publish',[NewsController::class, 'accept'])->middleware(['auth:sanctum', AdminOnly::class]);
}); 

Route::prefix('categories')->group(function() {
    Route::get('/', [CategoryController::class, 'index']);
    Route::middleware(AdminOnly::class)->group(function(){
    Route::post('create', [CategoryController::class, 'create'])->middleware('auth:sanctum'); 
    Route::delete('delete/{id}', [CategoryController::class, 'delete'])->middleware('auth:sanctum');
    Route::put('update/{id}', [CategoryController::class, 'update'])->middleware('auth:sanctum');
    Route::get('{id}', [CategoryController::class, 'getById'])->middleware('auth:sanctum');
    });
}); 

Route::prefix('users')->middleware(AdminOnly::class)->group(function() {
    Route::get('/', [App\Http\Controllers\UserController::class, 'index'])->middleware('auth:sanctum');
    Route::post('create',[App\Http\Controllers\UserController::class, 'create'])->middleware('auth:sanctum');
    Route::put('update/{id}', [App\Http\Controllers\UserController::class, 'update'])->middleware('auth:sanctum');
    Route::delete('delete/{id}', [App\Http\Controllers\UserController::class, 'delete'])->middleware('auth:sanctum');
 }); 

