import { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa";

const DashboardDrawer = () => {
    const [openDrawer, setOpenDrawer] = useState<boolean>(false);

    return (
        <div className='flex gap-3 md:hidden'>
            <HiMenuAlt1 size={28} onClick={() => setOpenDrawer(!openDrawer)} />

            {/* drawer for smaller devices */}
            <aside className={`absolute ${openDrawer ? "top-[75px] left-0" : "top-[75px] -left-full"} w-full h-[calc(100vh-75px)] bg-blue-200 text-white transition-all duration-500`}>
                <div className='flex flex-col h-[calc(100%-120px)] justify-between pl-4 pt-6'>
                    <ul>
                        <li>
                            <NavLink to='/dashboard/contact' className="hover:bg-gray-500 font-medium hover:bg-opacity-20 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer transition-all duration-300">
                                <FaAngleRight />
                                <span>Contact</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard/charts-maps' className="hover:bg-gray-500 font-medium hover:bg-opacity-20 flex items-center text-gray-700 py-1.5 px-4 rounded space-x-2 cursor-pointer transition-all duration-300">
                                <FaAngleRight />
                                <span>Chart and Maps</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    );
};

export default DashboardDrawer;