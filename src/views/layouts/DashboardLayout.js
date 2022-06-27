import React from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

function DashboardLayout({ children }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="grid grid-cols-6">
        <Sidebar />
        <div className="container col-span-5 px-5 bg-gray-100 h-screen overflow-scroll">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
