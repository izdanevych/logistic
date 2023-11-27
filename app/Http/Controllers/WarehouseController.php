<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;
use App\Models\Supplier;
use App\Models\Warehouse;
use Exception;
use Inertia\Inertia;
use Session;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warehouses = Warehouse::query()->with("supplier")->paginate(5);
        return Inertia::render('Warehouses/Index', ['warehouses' => $warehouses, "notification" => Session::get('notification')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $suppliers = Supplier::all();
        return Inertia::render('Warehouses/Create', ['suppliers' => $suppliers, 'csrf_token' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWarehouseRequest $request)
    {
        try {
            Warehouse::create($request->all());

            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Warehouse was successfully created'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Warehouse was not successfully created'
                ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Warehouse $warehouse)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Warehouse $warehouse)
    {
        $suppliers = Supplier::all();
        return Inertia::render('Warehouses/Edit', ['warehouse' => $warehouse, 'suppliers' => $suppliers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        try {
            $warehouse->update($request->all());

            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Warehouse was successfully edited'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Warehouse was not successfully edited'
                ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Warehouse $warehouse)
    {
        try {
            $warehouse->delete();
            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Warehouse was successfully deleted'
                ]);
        } catch (Exception $ex) {
            return redirect()->route('warehouses.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Warehouse was not successfully deleted'
                ]);
        }
    }
}
