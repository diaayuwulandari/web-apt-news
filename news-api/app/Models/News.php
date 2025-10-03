<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $guarded = [];
    public $with = ['author'];
    public function getImageAttribute($value){
        return $value ? url('storage/'. $value) : null;
    }
    
    public function author(){
        return $this->belongsTo(User::class, 'author');
    }
}
