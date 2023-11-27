import React from 'react';
import { Link } from "@inertiajs/react";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const Layout = ({ children }) => {
    return (
        <div>
            <ReactNotifications />
            <nav className="bg-gray-800 p-4">
                <div className="mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <Link href={route('products.index')} className="text-white font-bold text-lg hover:text-gray-300">
                            Main
                        </Link>
                        <Link href={route('products.index')} className="text-white hover:text-gray-300">
                            Products
                        </Link>
                        <Link href={route('suppliers.index')} className="text-white hover:text-gray-300">
                            Suppliers
                        </Link>
                        <Link href={route('warehouses.index')} className="text-white hover:text-gray-300">
                            Warehouses
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href={route('profile.edit')} className="text-white hover:text-gray-300">
                            Profile
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="mt-8 pr-4 pl-4">
                {children}
            </div>
        </div>
    );
};

export default Layout;


