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
                'main_page' => true,
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
                'main_page' => true,
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
                'main_page' => true,
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
                'main_page' => true,
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
                'main_page' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Croissant',
                'description' => 'Flaky pastry with butter filling.',
                'base_price' => 300.00,
                'size_id' => 4,
                'category_id' => 2,
                'image' => '',
                'available' => true,
                'main_page' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Chocolate Chip Cookie',
                'description' => 'Homemade cookie with chocolate chunks.',
                'base_price' => 250.00,
                'size_id' => 4,
                'category_id' => 2,
                'image' => '',
                'available' => true,
                'main_page' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'Cinnamon Roll',
                'description' => 'Fresh bun with cinnamon and sugar glaze.',
                'base_price' => 350.00,
                'size_id' => 4,
                'category_id' => 2,
                'image' => '',
                'available' => true,
                'main_page' => true,
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
