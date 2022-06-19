import React from "react";
import Main from "../components/main/main";
import Sidebar from "../components/main/sidebar";
// import Navbar from "../components/main/navbar";
import Announcement from "../components/main/announcement";
import Report from "../components/main/report";

function main() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <div className="grid grid-cols-6">
          <Sidebar />
          <div className="container col-span-5 px5">
            <Main />
            <Announcement />
            <Report />
          </div>
        </div>
      </div>
    </>
  );
}

export default main;
