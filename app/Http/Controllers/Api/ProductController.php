<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with(['category', 'size'])->orderBy('id', 'desc');

        if ($request->has('category') && $request->category) {
            $category = Category::where('name', 'ilike', $request->category)->first();

            if ($category) {
                $query->where('category_id', $category->id);
            } else {
                return ProductResource::collection([]);
            }
        }

        return ProductResource::collection($query->paginate(10));
    }

    public function mainPageProducts()
    {
        $products = Product::with(['category', 'size'])
            ->where('main_page', true)
            ->orderBy('id', 'desc')
            ->get();
        return ProductResource::collection($products);
    }

    public function store(StoreProductRequest $request) {}

    public function show(Product $product) {}

    public function update(UpdateProductRequest $request, Product $product) {}

    public function destroy(Product $product) {}
}
