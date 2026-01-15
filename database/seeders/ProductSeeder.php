<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'name' => 'Espresso',
                'description' => 'Strong and bold espresso shot.',
                'base_price' => 250.00,
                'size_id' => 1,
                'category_id' => 1,
                'image' => '',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Latte',
                'description' => 'Creamy milk with rich espresso.',
                'base_price' => 500.00,
                'size_id' => 2,
                'category_id' => 1,
                'image' => '',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Cappuccino',
                'description' => 'Espresso with steamed milk foam.',
                'base_price' => 750.00,
                'size_id' => 3,
                'category_id' => 1,
                'image' => '',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Cappuccino',
                'description' => 'Espresso with steamed milk foam.',
                'base_price' => 750.00,
                'size_id' => 3,
                'category_id' => 1,
                'image' => '',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Cappuccino',
                'description' => 'Espresso with steamed milk foam.',
                'base_price' => 750.00,
                'size_id' => 3,
                'category_id' => 1,
                'image' => '',
                'available' => true,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);

    }
}
