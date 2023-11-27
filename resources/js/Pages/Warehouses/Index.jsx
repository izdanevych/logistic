import React, { useEffect } from 'react';
import Layout from '../../Layouts/Layout';
import {Link, router} from '@inertiajs/react';
import { Store } from "react-notifications-component";
import { defaultNotification } from "@/Helpers/notificationHelper.js";

const Index = ({ warehouses, notification }) => {

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

    const handleDelete = (warehouseId) => {
        router.delete(route('warehouses.destroy', warehouseId), {
            onSuccess: () => {
                // Code to run on success, e.g., redirect
            },
        });
    };

    const handleEdit = (warehouseId) => {
        router.get(route('warehouses.edit', warehouseId), {
            onSuccess: () => {
                // Code to run on success, e.g., redirect
            },
        });
    };

    const handleCreate = () => {
        router.visit(route('warehouses.create'));
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Warehouses</h1>
                <div className="mb-4 flex justify-end">
                    <button onClick={handleCreate} className="px-4 py-2 bg-green-500 text-white rounded-md">
                        Create warehouse
                    </button>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left w-1/4">ID</th>
                        <th className="py-2 px-4 border-b text-left w-1/4">Supplier</th>
                        <th className="py-2 px-4 border-b text-left w-1/4">Address</th>
                        <th className="py-2 px-4 border-b w-1/4">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {warehouses.data.map((warehouse) => (
                        <tr key={warehouse.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b w-1/4">{warehouse.id}</td>
                            <td className="py-2 px-4 border-b w-1/4">{warehouse.supplier.name}</td>
                            <td className="py-2 px-4 border-b w-1/4">{warehouse.address}</td>
                            <td className="py-2 px-4 border-b w-1/4 text-center">
                                <button onClick={() => handleEdit(warehouse.id)} className="text-blue-500 hover:underline mr-2">Edit</button>
                                <button onClick={() => handleDelete(warehouse.id)} className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    {warehouses.links.map((link, index) => (
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
