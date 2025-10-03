<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{
    public function index() {
        $news = News::all();
        return response()->json([
            'message' => 'List of news',
            'data' => $news
        ], 200);
    } 
    public function create(Request $request) {
        $request->validate([
            'title' => 'required|string',
            'content' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'category_id' => 'required|exists:categories,id'
        ]); 

        if($request->hasFile('image')) {
            $imagePath = $request->fiLe('image')->store('news', 'public');
        } 

        $news = News::create([
            'title' => $request->title,
            'content' => $request->content,
            'image' => $imagePath,
            'category_id' => $request->category_id,
            'author' => Auth::id(),
        ]); 


        return response()->json([
            'massage' => 'News created successfully',
            'data' => $news
        ], 201);
    } 

    public function update(Request $request, $id){
        $news = News::find($id);
        if(!$news){
            return response()->json([
                'message' => 'News not found'
            ], 404);
        }
        $request->validate([
            'title' => 'sometimes|string',
            'content' => 'sometimes|string',
            'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg',
            'category_id' => 'sometimes|exitsts:categories,id',
        ]); 

        $data = $request->only(['title', 'content', 'category_id']);
        if($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('news', 'public');
            $data['image'] = $imagePath;
        } 

        $news->update($data);
        return response()->json([
            'message' => 'News updated succesfully',
            'data' => $news
        ], 200);
       
    } 

    public function delete(Request $request, $id) {
        $news = News::find($id);
        if(!$news) {
            return response()->json([
                'message' => 'News not found'
            ], 404);
        } 

        $news->delete();
        return response()->json([
            'message' => 'News deleted sunccesfully'
        ], 200);

    }

    public function accept($id) {
        $news = News::find($id);
        if (!$news) {
            return response()->json([
                'message' => 'News not found'
            ], 404);
        }

    $news->update(['status' => 'published' ]); 

    return response()->json([
        'message' => 'News accepted and published',
        'data' => $news
    ],200);

    }

}