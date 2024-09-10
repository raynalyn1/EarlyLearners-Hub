import React from 'react';
import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;
