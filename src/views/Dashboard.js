import React from "react";
import Main from "../components/main";
import Announcement from "../components/announcement";
import Report from "../components/report";
import DashboardLayout from "./layouts/DashboardLayout";

function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <Main />
        <Announcement />
        <Report />
      </DashboardLayout>
    </>
  );
}

export default Dashboard;
