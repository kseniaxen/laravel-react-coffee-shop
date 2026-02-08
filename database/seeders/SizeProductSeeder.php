<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class SizeProductSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('size_products')->insert([
            [
                'name' => 'Small',
                'dimensions' => 'ml',
                'size' => 150
            ],
            [
                'name' => 'Medium',
                'dimensions' => 'ml',
                'size' => 250
            ],
            [
                'name' => 'Large',
                'dimensions' => 'ml',
                'size' => 500
            ],
            [
                'name' => '',
                'dimensions' => 'g',
                'size' => 300
            ]
        ]);
    }
}
