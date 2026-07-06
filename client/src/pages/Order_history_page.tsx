import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiMapPin, FiCreditCard, FiSettings, FiSearch, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { useCommerce } from "../context/CommerceContext";

// Images
import userAvatar from "../assets/main.jpg"; // User avatar substitute
import watchImg from "../assets/watch.jpg";
import runnerImg from "../assets/nike.jpg";
import headImg from "../assets/headphone.jpg";

const sideMenuItems = [
    { label: "My Orders", icon: FiShoppingBag, active: true },
    { label: "Saved Addresses", icon: FiMapPin, active: false },
    { label: "Payment Methods", icon: FiCreditCard, active: false },
    { label: "Account Settings", icon: FiSettings, active: false },
];

const Order_history_page = () => {
    const navigate = useNavigate();
    const { orders, addToCart } = useCommerce();
    const activeOrder = orders[0];
    const activeItem = activeOrder?.items[0];

    return (
        <div className="w-full min-h-screen py-8 flex justify-center theme-transition" style={{ backgroundColor: "var(--background)" }}>
            <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                
                {/* Left Sidebar: Profile Details */}
                <div className="lg:col-span-1 p-6 rounded-2xl border flex flex-col items-center" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-blue-500 relative">
                        <img src={userAvatar} alt="Julian Vanguard" className="w-full h-full object-cover" />
                        <span className="absolute bottom-0 right-0 bg-blue-600 border border-white text-[8px] text-white px-1 py-0.5 rounded-full cursor-pointer hover:bg-blue-700">edit</span>
                    </div>
                    <h3 className="text-sm font-bold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                        Julian Vanguard
                    </h3>
                    <p className="text-[10px] mt-0.5 mb-6" style={{ color: "var(--on-surface-variant)" }}>
                        Member since October 2022
                    </p>

                    {/* Side navigation */}
                    <div className="w-full space-y-1">
                        {sideMenuItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.label}
                                    className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
                                    style={{
                                        backgroundColor: item.active ? "var(--primary)" : "transparent",
                                        color: item.active ? "var(--on-primary)" : "var(--on-surface-variant)",
                                    }}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content: Orders list */}
                <div className="lg:col-span-3 space-y-8">
                    <button
                        onClick={() => navigate("/")}
                        className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer hover:opacity-85 transition-opacity"
                        style={{ color: "var(--primary-container)" }}
                    >
                        <FiArrowLeft className="w-3.5 h-3.5" />
                        Back to Shop
                    </button>
                    {/* Header with Search */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Order History
                            </h1>
                            <p className="text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                Manage your recent purchases and track shipments.
                            </p>
                        </div>
                        {/* Inline search bar */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs w-full sm:w-64" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                            <FiSearch className="text-gray-400" />
                            <input type="text" placeholder="Search orders..." className="bg-transparent outline-none flex-1 text-xs" />
                        </div>
                    </div>

                    {/* Active Order Box */}
                    <div className="p-5 sm:p-6 rounded-2xl border" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b mb-6 gap-3" style={{ borderColor: "var(--outline-variant)" }}>
                            <div className="flex items-center gap-3">
                                <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                                    {activeOrder?.status ?? "In Transit"}
                                </span>
                                <span className="text-xs font-semibold" style={{ color: "var(--on-surface)" }}>Order #{activeOrder?.id ?? "LX-99281"}</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-500">Est. Delivery: {activeOrder?.eta ?? "Nov 24"}</span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Product Detail */}
                            <div className="flex gap-4">
                                <img src={activeItem?.product.image ?? watchImg} alt={activeItem?.product.name ?? "Watch"} className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover border" />
                                <div>
                                    <h3 className="text-sm font-bold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                        {activeItem?.product.name ?? "Chronos Minimalist Edition"}
                                    </h3>
                                    <p className="text-[11px] mt-0.5" style={{ color: "var(--on-surface-variant)" }}>
                                        {activeItem?.option ?? "Matte Silver / 40mm Titanium"}
                                    </p>
                                    <div className="flex gap-4 mt-3">
                                        <button onClick={() => navigate(`/product/${activeItem?.product.id ?? "p-40"}`)} className="text-[10px] font-semibold text-blue-600 hover:underline cursor-pointer">
                                            View Product
                                        </button>
                                        <button className="text-[10px] font-semibold text-blue-600 hover:underline cursor-pointer">
                                            Get Support
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Tracker Timeline */}
                            <div className="flex flex-col justify-center space-y-4">
                                {/* Step 1 */}
                                <div className="flex gap-3 items-start cursor-pointer" onClick={() => navigate("/track")}>
                                    <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div className="text-xs">
                                        <p className="font-semibold" style={{ color: "var(--on-surface)" }}>Order Confirmed</p>
                                        <p className="text-[10px]" style={{ color: "var(--outline)" }}>{activeOrder?.date ?? "Nov 18, 10:24 AM"}</p>
                                    </div>
                                </div>
                                {/* Step 2 */}
                                <div className="flex gap-3 items-start cursor-pointer" onClick={() => navigate("/track")}>
                                    <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold flex-shrink-0 mt-0.5">✓</div>
                                    <div className="text-xs">
                                        <p className="font-semibold" style={{ color: "var(--on-surface)" }}>In Transit - Sorting Hub</p>
                                        <p className="text-[10px]" style={{ color: "var(--outline)" }}>Nov 20, 02:45 PM</p>
                                    </div>
                                </div>
                                {/* Step 3 */}
                                <div className="flex gap-3 items-start cursor-pointer" onClick={() => navigate("/track")}>
                                    <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0 mt-0.5"></div>
                                    <div className="text-xs">
                                        <p className="font-semibold" style={{ color: "var(--on-surface-variant)" }}>Out for Delivery</p>
                                        <p className="text-[10px]" style={{ color: "var(--outline)" }}>Expected Nov 24</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Past Purchases */}
                    <div>
                        <h2 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Past Purchases
                        </h2>

                        <div className="space-y-4">
                            {/* Past 1 */}
                            <div className="p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                                <div className="flex gap-4 items-center">
                                    <img src={runnerImg} alt="Shoes" className="w-12 h-12 rounded object-cover border" />
                                    <div>
                                        <h3 className="text-xs font-bold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                            Velocity Elite Runners
                                        </h3>
                                        <p className="text-[10px] text-gray-500">Delivered Oct 12, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
                                    <div className="text-right">
                                        <p className="text-xs font-bold" style={{ color: "var(--on-surface)" }}>$185.00</p>
                                        <p className="text-[9px] text-gray-400">Order #LX-88172</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ id: "p-25", name: "Velocity Elite Runners", category: "Footwear", price: 185, rating: 4.6, inStock: true, image: runnerImg, description: "Performance runners for daily training." })}
                                        className="text-xs font-semibold px-4 py-2 border rounded cursor-pointer hover:bg-gray-50 transition-colors"
                                        style={{ borderColor: "var(--outline)", color: "var(--on-surface)" }}
                                    >
                                        Buy Again
                                    </button>
                                </div>
                            </div>

                            {/* Past 2 */}
                            <div className="p-4 rounded-xl border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                                <div className="flex gap-4 items-center">
                                    <img src={headImg} alt="Headphones" className="w-12 h-12 rounded object-cover border" />
                                    <div>
                                        <h3 className="text-xs font-bold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                            Studio Pro Wireless ANC
                                        </h3>
                                        <p className="text-[10px] text-gray-500">Delivered Sep 05, 2023</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-start">
                                    <div className="text-right">
                                        <p className="text-xs font-bold" style={{ color: "var(--on-surface)" }}>$349.99</p>
                                        <p className="text-[9px] text-gray-400">Order #LX-87261</p>
                                    </div>
                                    <button
                                        onClick={() => addToCart({ id: "p-11", name: "Studio Pro Wireless ANC", category: "Electronics", price: 349.99, rating: 4.8, inStock: true, image: headImg, description: "Premium wireless headphones with active noise cancellation." })}
                                        className="text-xs font-semibold px-4 py-2 border rounded cursor-pointer hover:bg-gray-50 transition-colors"
                                        style={{ borderColor: "var(--outline)", color: "var(--on-surface)" }}
                                    >
                                        Buy Again
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="flex items-center gap-2 text-xs font-semibold text-blue-600 hover:underline cursor-pointer">
                        View All Orders
                        <FiArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Order_history_page;
