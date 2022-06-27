import React, { Component } from "react";
import { Link } from "react-router-dom";
import dataSidebar from "../data/sidebarData";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div className="App w-64 ">
        <aside className="w-64 " aria-label="Sidebar">
          <div className="overflow-y-scroll h-screen py-4 px-3 bg-stone-100 dark:bg-gray-800">
            <ul className="space-y-2">
              {dataSidebar.map((item) => {
                return (
                  <li key={item.id}>
                    <SidebarItem icon={item.icon} name={item.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}

const SidebarItem = (props) => {
  const { name, icon } = props;

  return (
    <Link
      to="#"
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span className="ml-3">{name}</span>
    </Link>
  );
};

export default Sidebar;
