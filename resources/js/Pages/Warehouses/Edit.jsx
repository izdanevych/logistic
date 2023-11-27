import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';
import { router } from '@inertiajs/react';

const Edit = ({ warehouse, suppliers }) => {
    const { data, setData } = useForm({
        supplier_id: warehouse.supplier_id,
        address: warehouse.address,
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('warehouses.update', warehouse.id), data, {
            onSuccess: () => {

            },
            onError: (errors) => {
                setErrors(errors);
            }
        });
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Edit warehouse</h1>
                {/* Create form */}
                <form onSubmit={handleSubmit}>
                    <div className="w-1/5">
                        <div className="mb-4">
                            <label htmlFor="supplier" className="block text-sm font-medium text-gray-700">
                                Choose a supplier:
                            </label>
                            <select id="supplier"
                                    name="supplier"
                                    value={data.supplier_id}
                                    className={`mt-1 p-2 border rounded-md w-full ${errors.supplier_id ? 'border-red-500' : ''}`}
                                    onChange={(e) => setData('supplier_id', e.target.value)}>
                                {suppliers.map((supplier) => (
                                    <option key={supplier.id} value={supplier.id}>
                                        {supplier.name}
                                    </option>
                                ))}
                            </select>
                            {errors && <p className="text-red-500 text-xs mt-1">{errors.supplier_id}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                id="address"
                                type="text"
                                className={`mt-1 p-2 border rounded-md w-full ${errors.address ? 'border-red-500' : ''}`}
                                value={data.address ?? ""}
                                onChange={(e) => setData('address', e.target.value)}
                            />
                            {errors && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>
                        <div>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                                Edit warehouse
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Edit;
