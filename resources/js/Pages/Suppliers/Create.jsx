// resources/js/Pages/Suppliers/Create.jsx

import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '../../Layouts/Layout';

const Create = ({ csrf_token }) => {
    console.log(csrf_token);
    const { data, setData, post, errors } = useForm({
        // Your form data and initial values
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/suppliers', {
            onSuccess: () => {
                // Redirect to the index page or perform any other action
            },
        });
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Create supplier</h1>
                {/* Create form */}
                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="token" value={csrf_token} />
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
                            Create Supplier
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
