<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreSupplierRequest;
use App\Http\Requests\UpdateSupplierRequest;
use App\Models\Supplier;
use Exception;
use Inertia\Inertia;
use Session;

class SupplierController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $suppliers = Supplier::all();
        return Inertia::render('Suppliers/Index', ['suppliers' => $suppliers, "notification" => Session::get('notification')]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Suppliers/Create', ['csrf_token' => csrf_token()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSupplierRequest $request)
    {
        try {
            Supplier::create($request->all());

            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Supplier was successfully created'
                ]);
        } catch (Exception $ex){
            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Supplier was not successfully created'
                ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Supplier $supplier)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Supplier $supplier)
    {
        return Inertia::render('Suppliers/Edit', ['supplier' => $supplier]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSupplierRequest $request, Supplier $supplier)
    {
        try {
            $supplier->update($request->all());

            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Supplier was successfully edited'
                ]);
        } catch (Exception $ex){
            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Supplier was not successfully edited'
                ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Supplier $supplier)
    {
        try {
            $supplier->delete();
            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Success',
                    'type' => 'success',
                    'message' => 'Supplier was successfully deleted'
                ]);
        } catch (Exception $ex){
            return redirect()->route('suppliers.index')
                ->with('notification', [
                    'title' => 'Error',
                    'type' => 'danger',
                    'message' => 'Supplier was not successfully deleted'
                ]);
        }
    }
}
