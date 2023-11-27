import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Layout from '../../Layouts/Layout';
import { router } from '@inertiajs/react';

const Edit = ({ supplier }) => {
    const { data, setData } = useForm({
        name: supplier.name,
        address: supplier.address,
    });

    const [errors, setErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(route('suppliers.update', supplier.id), data, {
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
                <h1 className="text-2xl font-bold mb-4">Edit Supplier</h1>
                {/* Edit form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className={`mt-1 p-2 border rounded-md ${errors.name ? 'border-red-500' : ''}`}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <input
                            id="address"
                            type="text"
                            className={`mt-1 p-2 border rounded-md ${errors.address ? 'border-red-500' : ''}`}
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                    </div>
                    <div>
                        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
                            Edit supplier
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Edit;
