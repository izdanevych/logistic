<?php

namespace Database\Seeders;

use App\Models\Supplier;
use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        Supplier::factory(10)->create();
    }
}
