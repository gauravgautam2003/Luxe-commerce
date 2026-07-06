import { useNavigate } from "react-router-dom";
import { FiHome, FiShoppingBag, FiLayers, FiUsers, FiBarChart2, FiSettings, FiSearch, FiBell, FiHelpCircle, FiPlus, FiMoreVertical, FiArrowLeft } from "react-icons/fi";

// User avatars for table
import superAdminImg from "../assets/main.jpg"; // Admin avatar substitute
import user1 from "../assets/dresh.jpg";
import user2 from "../assets/fashion2.jpg";
import user3 from "../assets/nike2.jpg";

const sidebarMenu = [
    { label: "Dashboard", icon: FiHome, active: true },
    { label: "Orders", icon: FiShoppingBag, active: false },
    { label: "Products", icon: FiLayers, active: false },
    { label: "Customers", icon: FiUsers, active: false },
    { label: "Analytics", icon: FiBarChart2, active: false },
    { label: "Settings", icon: FiSettings, active: false },
];

const Admin_panel_page = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row theme-transition" style={{ backgroundColor: "var(--background)" }}>
            
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 flex-none border-b md:border-b-0 md:border-r p-6 flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                <div>
                    {/* Header */}
                    <div className="mb-8 cursor-pointer" onClick={() => navigate("/")}>
                        <h2 className="text-sm font-bold text-blue-600" style={{ fontFamily: "'Geist', sans-serif" }}>
                            Admin Panel
                        </h2>
                        <p className="text-[10px] text-gray-400">Premium Management</p>
                    </div>

                    {/* Menu links */}
                    <nav className="space-y-1 mb-8">
                        {sidebarMenu.map((item) => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.label}
                                    onClick={() => {
                                        if (item.label === "Orders") navigate("/orders");
                                        else if (item.label === "Dashboard") navigate("/admin");
                                        else if (item.label === "Products" || item.label === "Settings") navigate("/");
                                    }}
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
                    </nav>
                </div>

                {/* Bottom Profile Details */}
                <div className="space-y-4 pt-4 border-t" style={{ borderColor: "var(--outline-variant)" }}>
                    <button
                        className="w-full flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
                        style={{ backgroundColor: "var(--primary)", color: "var(--on-primary)" }}
                    >
                        <FiPlus className="w-3.5 h-3.5" />
                        Add Product
                    </button>

                    <div className="flex gap-3 items-center">
                        <img src={superAdminImg} alt="Alex Rivera" className="w-9 h-9 rounded-full object-cover" />
                        <div>
                            <h4 className="text-xs font-semibold" style={{ color: "var(--on-surface)" }}>Alex Rivera</h4>
                            <p className="text-[9px] uppercase font-bold text-gray-400">Super Admin</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6 space-y-6 overflow-y-auto">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-1.5 text-xs font-semibold cursor-pointer hover:opacity-85 transition-opacity"
                    style={{ color: "var(--primary-container)" }}
                >
                    <FiArrowLeft className="w-3.5 h-3.5" />
                    Back to Shop
                </button>
                {/* Topbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <h1 className="text-lg font-bold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                        Overview
                    </h1>
                    
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        {/* Search data */}
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs w-full sm:w-64" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                            <FiSearch className="text-gray-400" />
                            <input type="text" placeholder="Search data, orders, clients..." className="bg-transparent outline-none flex-1 text-xs" />
                        </div>
                        <button className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                            <FiBell className="w-3.5 h-3.5" />
                        </button>
                        <button className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                            <FiHelpCircle className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* 4 Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Stat 1 */}
                    <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Revenue</span>
                                <span className="block text-lg font-extrabold mt-1" style={{ color: "var(--on-surface)" }}>$128,430</span>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded">+12.5%</span>
                        </div>
                        {/* Mini graph line SVG */}
                        <svg className="w-full h-8 mt-3 opacity-60">
                            <path d="M 0,20 Q 20,8 40,16 T 80,10 T 120,2 T 160,18" fill="none" stroke="#10b981" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Stat 2 */}
                    <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Total Sales</span>
                                <span className="block text-lg font-extrabold mt-1" style={{ color: "var(--on-surface)" }}>1,240</span>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded">+8.2%</span>
                        </div>
                        <svg className="w-full h-8 mt-3 opacity-60">
                            <path d="M 0,20 Q 30,12 60,16 T 120,6 T 160,10" fill="none" stroke="#10b981" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Stat 3 */}
                    <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Active Users</span>
                                <span className="block text-lg font-extrabold mt-1" style={{ color: "var(--on-surface)" }}>43,502</span>
                            </div>
                            <span className="bg-rose-100 text-rose-800 text-[9px] font-bold px-2 py-0.5 rounded">-2.4%</span>
                        </div>
                        <svg className="w-full h-8 mt-3 opacity-60">
                            <path d="M 0,5 Q 30,22 60,14 T 120,25 T 160,20" fill="none" stroke="#f43f5e" strokeWidth="2" />
                        </svg>
                    </div>

                    {/* Stat 4 */}
                    <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-[10px] font-bold text-gray-400 uppercase">Pending Orders</span>
                                <span className="block text-lg font-extrabold mt-1" style={{ color: "var(--on-surface)" }}>18</span>
                            </div>
                            <span className="bg-gray-100 text-gray-800 text-[9px] font-bold px-2 py-0.5 rounded">Steady</span>
                        </div>
                        <svg className="w-full h-8 mt-3 opacity-60">
                            <path d="M 0,15 L 40,15 L 80,15 L 120,15 L 160,15" fill="none" stroke="#94a3b8" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* Main Charts area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sales Line Chart */}
                    <div className="lg:col-span-2 p-5 rounded-2xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Sales Overview
                            </h3>
                            <select className="text-[10px] font-semibold border rounded px-2 py-1 outline-none" style={{ borderColor: "var(--outline-variant)" }}>
                                <option>Last 6 Months</option>
                            </select>
                        </div>
                        {/* Curved SVG Line Chart */}
                        <div className="relative h-48 w-full flex items-end">
                            <svg className="w-full h-full pb-4">
                                <path d="M 30,120 Q 80,90 130,110 T 230,120 T 330,80 T 430,70" fill="none" stroke="#2563eb" strokeWidth="3" />
                                <circle cx="430" cy="70" r="4" fill="#2563eb" />
                            </svg>
                            {/* X-axis labels */}
                            <div className="absolute bottom-0 inset-x-0 flex justify-between px-6 text-[10px] text-gray-400">
                                <span>Jan</span>
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span>Jun</span>
                            </div>
                        </div>
                    </div>

                    {/* Donut Conversion Chart */}
                    <div className="p-5 rounded-2xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-center" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Top Categories
                        </h3>
                        
                        {/* SVG Donut Circle */}
                        <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="72" cy="72" r="54" fill="none" stroke="#f1f5f9" strokeWidth="12" />
                                <circle cx="72" cy="72" r="54" fill="none" stroke="#2563eb" strokeWidth="12" strokeDasharray="339" strokeDashoffset="95" />
                            </svg>
                            <div className="absolute text-center">
                                <span className="block text-xl font-extrabold" style={{ color: "var(--on-surface)" }}>72%</span>
                                <span className="block text-[8px] uppercase tracking-wider text-gray-400">Conversion</span>
                            </div>
                        </div>

                        {/* Labels list */}
                        <div className="space-y-1.5 text-[10px] mt-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                                    <span style={{ color: "var(--on-surface-variant)" }}>Luxury Watches</span>
                                </div>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>45%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span>
                                    <span style={{ color: "var(--on-surface-variant)" }}>Handbags</span>
                                </div>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>30%</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                                    <span style={{ color: "var(--on-surface-variant)" }}>Accessories</span>
                                </div>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>25%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Orders table */}
                <div className="p-5 rounded-2xl border" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Recent Orders
                        </h3>
                        <button className="text-[10px] font-semibold text-blue-600 hover:underline cursor-pointer">
                            View All History
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs min-w-[600px]">
                            <thead>
                                <tr className="border-b uppercase font-bold text-[9px] tracking-wider text-gray-400" style={{ borderColor: "var(--outline-variant)" }}>
                                    <th className="pb-3">Order ID</th>
                                    <th className="pb-3">Customer</th>
                                    <th className="pb-3">Product</th>
                                    <th className="pb-3">Amount</th>
                                    <th className="pb-3">Status</th>
                                    <th className="pb-3 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1 */}
                                <tr className="border-b" style={{ borderColor: "var(--outline-variant)" }}>
                                    <td className="py-3.5 font-semibold text-blue-600">#ORD-8821</td>
                                    <td className="py-3.5 flex gap-2.5 items-center">
                                        <img src={user1} alt="Sophia" className="w-6 h-6 rounded-full object-cover" />
                                        <span className="font-medium" style={{ color: "var(--on-surface)" }}>Sophia Chen</span>
                                    </td>
                                    <td className="py-3.5" style={{ color: "var(--on-surface-variant)" }}>Rolex Datejust 41</td>
                                    <td className="py-3.5 font-semibold" style={{ color: "var(--on-surface)" }}>$14,200.00</td>
                                    <td className="py-3.5">
                                        <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">Paid</span>
                                    </td>
                                    <td className="py-3.5 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                                            <FiMoreVertical />
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 2 */}
                                <tr className="border-b" style={{ borderColor: "var(--outline-variant)" }}>
                                    <td className="py-3.5 font-semibold text-blue-600">#ORD-8822</td>
                                    <td className="py-3.5 flex gap-2.5 items-center">
                                        <img src={user2} alt="Marcus" className="w-6 h-6 rounded-full object-cover" />
                                        <span className="font-medium" style={{ color: "var(--on-surface)" }}>Marcus Thorne</span>
                                    </td>
                                    <td className="py-3.5" style={{ color: "var(--on-surface-variant)" }}>Hermès Birkin 30</td>
                                    <td className="py-3.5 font-semibold" style={{ color: "var(--on-surface)" }}>$22,500.00</td>
                                    <td className="py-3.5">
                                        <span className="bg-blue-100 text-blue-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">Shipped</span>
                                    </td>
                                    <td className="py-3.5 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                                            <FiMoreVertical />
                                        </button>
                                    </td>
                                </tr>

                                {/* Row 3 */}
                                <tr className="border-b" style={{ borderColor: "var(--outline-variant)" }}>
                                    <td className="py-3.5 font-semibold text-blue-600">#ORD-8823</td>
                                    <td className="py-3.5 flex gap-2.5 items-center">
                                        <img src={user3} alt="Elena" className="w-6 h-6 rounded-full object-cover" />
                                        <span className="font-medium" style={{ color: "var(--on-surface)" }}>Elena Rossi</span>
                                    </td>
                                    <td className="py-3.5" style={{ color: "var(--on-surface-variant)" }}>Louis Vuitton Trunk</td>
                                    <td className="py-3.5 font-semibold" style={{ color: "var(--on-surface)" }}>$8,900.00</td>
                                    <td className="py-3.5">
                                        <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-2 py-0.5 rounded uppercase">Pending</span>
                                    </td>
                                    <td className="py-3.5 text-right">
                                        <button className="text-gray-400 hover:text-gray-600 cursor-pointer">
                                            <FiMoreVertical />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Admin_panel_page;