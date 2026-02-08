<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->base_price,
            'category' => [
                'name' => $this->category->name ?? null,
            ],
            'size' => [
                'name' => $this->size->name ?? null,
                'size_product' => $this->size->size ?? null,
                'dimensions' => $this->size->dimensions
            ],
            'image' => $this->image,
            'available' => $this->available,
            'main_page'=> $this->main_page
        ];
    }
}
