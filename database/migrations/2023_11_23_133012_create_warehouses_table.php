<?php

// In a new migration file (e.g., create_warehouses_table.php)
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
class CreateWarehousesTable extends Migration
{
    public function up()
    {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('supplier_id')->constrained('suppliers');
            $table->string('address');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('warehouses');
    }
}
