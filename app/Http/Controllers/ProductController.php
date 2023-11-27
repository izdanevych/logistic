<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Models\Supplier;
use App\Models\Warehouse;
use Exception;
use Inertia\Inertia;
use Session;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::query()->with(["supplier", "warehouse"])->paginate(5);
        return Inertia::render('Products/Index', ["products" => $products, "notification" => Session::get('notification')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $suppliers = Supplier::all();
        $warehouses = Warehouse::all();
        return Inertia::render('Products/Create', ['suppliers' => $suppliers, 'warehouses' => $warehouses, 'csrf_token' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        try {
            Product::create($request->all());

            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Product was successfully created'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Product was not successfully created'
                ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $suppliers = Supplier::all();
        $warehouses = Warehouse::all();
        return Inertia::render('Products/Edit', ['product' => $product,'warehouses' => $warehouses, 'suppliers' => $suppliers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        try {
            $product->update($request->all());

            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Product was successfully edited'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Product was not successfully edited'
                ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        try {
            $product->delete();
            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Product was successfully deleted'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('products.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Product was not successfully deleted'
                ]);
        }
    }
}
