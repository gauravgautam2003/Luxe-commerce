import { IoIosNotificationsOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const [notificationCount, setNotificationCount] = useState(0);
    const navigate = useNavigate();

    const notification = () => {
        setNotificationCount((prev) => prev + 1);
    };

    return (

        <>
            {/* This is the navbar component. It contains the logo, notification icon, cart icon, and user icon. The notification icon has a badge that shows the number of notifications. The badge is only shown when there are notifications. */}

            <div className="w-full h-12 bg-white flex items-center justify-center">
                <div className="w-[90%] max-w-7xl flex justify-between items-center text-white">
                    <div className="text-blue-600 font-extrabold text-lg">
                        LUXE
                    </div>

                    <div className="flex gap-4 text-xl">

                        <FaRegUserCircle className="w-5 h-5 text-gray-500 cursor-pointer" onClick={() => navigate("/signup")} />
                        <div className="relative">
                            <IoIosNotificationsOutline onClick={notification} className="w-5.5 h-5.5 font-black text-gray-900 cursor-pointer" />
                            {notificationCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    {notificationCount}
                                </span>
                            )}
                        </div>
                        <IoCartOutline className="w-5 h-5 font-semibold text-gray-900 cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* This is just a placeholder for the rest of the page content. You can replace it with your actual content. */}
            <div className="w-full border-t border-gray-300 bg-gray-200 flex items-center justify-center">
            </div>
        </>
    );
};

export default Navbar

