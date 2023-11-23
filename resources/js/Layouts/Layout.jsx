// resources/js/Layouts/Layout.jsx

import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto p-4">
            {children}
        </div>
    );
};

export default Layout;
