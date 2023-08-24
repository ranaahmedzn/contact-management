import React from 'react';
import { NavLink, Outlet, useLocation} from "react-router-dom";
import DashboardDrawer from '../components/DashboardDrawer';
import { FaAngleRight } from "react-icons/fa";

const Dashboard = () => {

    //TODO: have to made some changes
    const {pathname} = useLocation()
    const pageName = pathname?.split('/')[1].charAt(0).toUpperCase() + pathname?.split('/')[1].slice(1);

    return (
        <div className="w-full h-screen overflow-x-auto">
            <nav className='relative w-full h-[75px] px-4 md:px-0 flex items-center justify-between md:justify-center border-b border-gray-300 text-white bg-gradient-to-r from-cyan-500 to-blue-500'>
                {/* dashboard drawer for smaller devices */}
                <DashboardDrawer />

                <h3 className='text-3xl font-semibold text-center'>
                    {pageName} Page
                </h3>
            </nav>

            <div className="flex">
                {/* dashboard sidebar for large devices */}
                <aside className="hidden md:block sticky top-0 w-72 h-[calc(100vh-75px)] pt-5 px-4 bg-gray-200">
                    <div className="pl-2 pt-5 pr-4">
                        <ul className="space-y-2 dashboard-menu">
                            <li>
                                <NavLink to='/contact' className="contact hover:bg-gray-500 font-medium hover:bg-opacity-20 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer transition-all duration-300">
                                    <FaAngleRight />
                                    <span>Contact</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/charts-maps' className="hover:bg-gray-500 font-medium hover:bg-opacity-20 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer transition-all duration-300">
                                    <FaAngleRight />
                                    <span>Chart and Maps</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* dashboard content */}
                <div className="m-7 max-w-5xl mx-auto flex-grow">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;