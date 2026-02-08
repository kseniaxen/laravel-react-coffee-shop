<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'base_price',
        'category_id',
        'size_id',
        'image',
        'available',
        'main_page'
    ];

    public function size()
    {
        return $this->belongsTo(SizeProduct::class, 'size_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
