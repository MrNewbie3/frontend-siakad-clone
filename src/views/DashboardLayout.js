import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/outline";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import dataSidebar from "../data/sidebarData";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  showSidebar() {
    this.setState({ open: true });
    console.log("berhasil buka");
  }

  hideSidebar() {
    this.setState({ open: false });
    console.log("berhasil ditutup");
  }

  render() {
    return (
      <>
        <div className="h-screen overflow-hidden bg-red-700">
          <div className="max-w-7xl grid mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {this.state.open ? (
                  <Link to="#">
                    <AiOutlineClose onClick={this.hideSidebar.bind(this)} className="h-6 w-6" />
                  </Link>
                ) : (
                  <Link to="#">
                    <FaBars onClick={this.showSidebar.bind(this)} className="h-6 w-6" />
                  </Link>
                )}
              </div>
              <div className="flex-1 flex items-center justify-center xl:items-stretch xl:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                  <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Sign out
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="lg:grid  xl:grid xl:grid-cols-6  ">
            {this.state.open ? (
              <div className="App w-64 xl:block">
                <aside className="w-64 " aria-label="Sidebar">
                  <div className="overflow-hidden h-screen py-4 px-3 bg-stone-100 dark:bg-gray-800">
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
            ) : (
              <div className="App w-64  hidden xl:block">
                <aside className="w-64 " aria-label="Sidebar">
                  <div className="overflow-hidden h-screen py-4 px-3 bg-stone-100 dark:bg-gray-800">
                    <ul className="space-y-2">
                      {dataSidebar.map((item) => {
                        return (
                          <li key={item.id}>
                            <SidebarItem icon={item.icon} name={item.name} page={item.page} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </aside>
              </div>
            )}
            <div className="sm:flex sm:flex-col px-5 sm:w-screen xl:w-auto xl:col-span-5 xl:grid  bg-gray-100 h-screen overflow-scroll">{this.props.data}</div>
          </div>
        </div>
      </>
    );
  }
}

const SidebarItem = (props) => {
  const { name, icon, page } = props;
  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <Link to={page} onClick={handleClick} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      {icon}
      <span className="ml-3">{name}</span>
    </Link>
  );
};

export default Navbar;
