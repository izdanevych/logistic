import React, {useEffect} from 'react';
import Layout from '../../Layouts/Layout';
import {Link, router} from '@inertiajs/react';
import { Store } from "react-notifications-component";
import { defaultNotification } from "@/Helpers/notificationHelper.js";

const Index = ({ suppliers, notification }) => {
    console.log(suppliers);
    useEffect(() => {
        if (notification) {
            Store.addNotification({
                ...defaultNotification,
                title: notification.title,
                message: notification.message,
                type: notification.type
            });
        }
    });

    const handleDelete = (supplierId) => {
        router.delete(route('suppliers.destroy', supplierId), {
            onSuccess: () => {
                // Code to run on success, e.g., redirect
            },
        });
    };

    const handleEdit = (supplierId) => {
        router.get(route('suppliers.edit', supplierId), {
            onSuccess: () => {
                // Code to run on success, e.g., redirect
            },
        });
    };

    const handleCreate = () => {
        router.visit(route('suppliers.create'));
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
                <div className="mb-4 flex justify-end">
                    <button onClick={handleCreate} className="px-4 py-2 bg-green-500 text-white rounded-md">
                        Create supplier
                    </button>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left w-1/4">ID</th>
                        <th className="py-2 px-4 border-b text-left w-1/4">Name</th>
                        <th className="py-2 px-4 border-b text-left w-1/4">Address</th>
                        {/* Add more headers for other fields */}
                        <th className="py-2 px-4 border-b w-1/4">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {suppliers.data.map((supplier) => (
                        <tr key={supplier.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b w-1/4">{supplier.id}</td>
                            <td className="py-2 px-4 border-b w-1/4">{supplier.name}</td>
                            <td className="py-2 px-4 border-b w-1/4">{supplier.address}</td>
                            {/* Add more cells for other fields */}
                            <td className="py-2 px-4 border-b w-1/4 text-center">
                                {/* Add actions like edit, delete, etc. */}
                                <button onClick={() => handleEdit(supplier.id)} className="text-blue-500 hover:underline mr-2">Edit</button>
                                <button onClick={() => handleDelete(supplier.id)} className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    {suppliers.links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.url}
                            className={`inline-block px-4 py-2 mx-2 bg-blue-500 text-white rounded-md ${link.active ? 'bg-blue-700' : ''}`}
                        >
                            { link.label.replaceAll('&laquo;', '').replaceAll('&raquo;', '') }
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Index;
