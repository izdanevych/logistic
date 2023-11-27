import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';
import { router } from '@inertiajs/react'
import CurrencyInput from 'react-currency-input-field';


const Create = ({ suppliers, warehouses, csrf_token }) => {
    const {data, setData} = useForm({
        // Your form data and initial values
    });

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        router.post(route("products.store"), data,{
            onError: (errors) => {
                setErrors(errors);
            }
        });
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Create product</h1>
                <div className="w-1/5">
                    <form onSubmit={handleSubmit}>
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className={`mt-1 p-2 border rounded-md ${errors.name ? 'border-red-500' : ''}`}
                                value={data.name ?? ""}
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            {errors && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="Price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <CurrencyInput
                                id="price"
                                name="number"
                                prefix="$"
                                className={`mt-1 p-2 border rounded-md ${errors.price ? 'border-red-500' : ''}`}
                                decimalsLimit={2}
                                value={data.price ?? ""}
                                allowNegativeValue={false}
                                onValueChange={(value) => setData('price', value)}
                            />
                            {errors && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                                Choose a supplier:
                            </label>
                            <select id="supplier"
                                    name="supplier"
                                    className={`mt-1 p-2 border rounded-md w-full ${errors.supplier_id ? 'border-red-500' : ''}`}
                                    onChange={(e) => setData('supplier_id', e.target.value)}>
                                <option value="">Select a supplier</option>
                                {suppliers.map((supplier) => (
                                    <option key={supplier.id} value={supplier.id}>
                                        {supplier.name}
                                    </option>
                                ))}
                            </select>
                            {errors && <p className="text-red-500 text-xs mt-1">{errors.supplier_id}</p>}
                        </div>
                        <div className="mb-4">
                        <label htmlFor="warehouse" className="block text-sm font-medium text-gray-700">
                            Choose a warehouse:
                        </label>
                        <select id="warehouse"
                                name="warehouse"
                                className={`mt-1 p-2 border rounded-md w-full ${errors.warehouse_id ? 'border-red-500' : ''}`}
                                onChange={(e) => setData('warehouse_id', e.target.value)}>
                            <option value="">Select a warehouse</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>
                                    {warehouse.id}
                                </option>
                            ))}
                        </select>
                        {errors && <p className="text-red-500 text-xs mt-1">{errors.warehouse_id}</p>}
                    </div>
                        <div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                Create product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Create;
