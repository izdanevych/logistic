<?php

namespace Database\Factories;

use App\Models\Supplier;
use App\Models\Warehouse;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'price' => fake()->randomFloat(2, 1, 1000),
            'supplier_id' => Supplier::query()->inRandomOrder()->first()->id,
            'warehouse_id' => Warehouse::query()->inRandomOrder()->first()->id,
        ];
    }
}
