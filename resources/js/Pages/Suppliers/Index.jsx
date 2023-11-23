// resources/js/Pages/Suppliers/Index.jsx

import React from 'react';
import Layout from '../../Layouts/Layout';

const Index = ({ suppliers }) => {
    return (
        <Layout>
            <div>
                <h1 className="text-2xl font-bold mb-4">Suppliers</h1>
                {/* Display suppliers data */}
                <ul>
                    {suppliers.map((supplier) => (
                        <li key={supplier.id}>{supplier.name} - {supplier.address}</li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
};

export default Index;
