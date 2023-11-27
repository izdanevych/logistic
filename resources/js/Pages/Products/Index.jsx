import React, {useEffect} from 'react';
import Layout from '../../Layouts/Layout';
import {Link, router} from '@inertiajs/react'
import { Store } from "react-notifications-component";
import { defaultNotification } from "@/Helpers/notificationHelper.js"

const Index = ({ products, notification }) => {
    console.log(products);
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
        router.delete(route('products.destroy', supplierId), {
            onSuccess: () => {

            },
        });
    };

    const handleEdit = (supplierId) => {
        router.visit(route('products.edit', supplierId), {
            onSuccess: () => {

            },
        });
    };

    const handleCreate = () => {
        router.visit(route('products.create'));
    };

    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Products</h1>
                <div className="mb-4 flex justify-end">
                    <button onClick={handleCreate} className="px-4 py-2 bg-green-500 text-white rounded-md">
                        Create product
                    </button>
                </div>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left w-1/8">ID</th>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Price</th>
                        <th className="py-2 px-4 border-b text-left">Supplier</th>
                        <th className="py-2 px-4 border-b text-left">Warehouse</th>
                        <th className="py-2 px-4 border-b">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.data.map((product) => (
                        <tr key={product.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b w-1/8">{product.id}</td>
                            <td className="py-2 px-4 border-b">{product.name}</td>
                            <td className="py-2 px-4 border-b">${product.price}</td>
                            <td className="py-2 px-4 border-b">{product.supplier.name}</td>
                            <td className="py-2 px-4 border-b">{product.warehouse.address}</td>
                            <td className="py-2 px-4 border-b text-center">
                                <button onClick={() => handleEdit(product.id)} className="text-blue-500 hover:underline mr-2">Edit</button>
                                <button onClick={() => handleDelete(product.id)} className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="mt-4">
                    {products.links.map((link, index) => (
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
