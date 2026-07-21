import { useNavigate } from "react-router-dom";
import { FiClock, FiPhone, FiMessageSquare, FiAlertCircle, FiArrowLeft } from "react-icons/fi";
import { FaCheckCircle, FaTruck } from "react-icons/fa";

// Images
import driverImg from "../assets/main.png"; // Driver avatar substitute
import shoeImg from "../assets/nike.png";
import watchImg from "../assets/watch.png";

const Delivery_tracking_page = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full min-h-screen py-8 flex justify-center theme-transition" style={{ backgroundColor: "var(--background)" }}>
            <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                {/* Left: Map Container */}
                <div className="rounded-2xl overflow-hidden relative border min-h-[350px] lg:min-h-[500px]" style={{ borderColor: "var(--outline-variant)", backgroundColor: "#1e293b" }}>

                    {/* Simulated Map lines / Grid */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none">
                        <div className="w-full h-full" style={{
                            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px), linear-gradient(0deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%), linear-gradient(90deg, transparent 24%, #ffffff 25%, #ffffff 26%, transparent 27%, transparent 74%, #ffffff 75%, #ffffff 76%, transparent 77%)",
                            backgroundSize: "40px 40px, 120px 120px, 120px 120px"
                        }}></div>

                        {/* Staggered street blocks */}
                        <div className="absolute top-20 left-12 w-24 h-16 border-2 border-white"></div>
                        <div className="absolute top-44 left-32 w-32 h-20 border-2 border-white"></div>
                        <div className="absolute bottom-20 left-10 w-28 h-28 border-2 border-white"></div>
                        <div className="absolute top-10 right-16 w-36 h-28 border-2 border-white"></div>
                        <div className="absolute bottom-32 right-12 w-24 h-24 border-2 border-white"></div>
                    </div>

                    {/* Driver marker and path */}
                    <div className="absolute inset-0">
                        <svg className="w-full h-full opacity-60">
                            <path d="M 120,80 L 240,240 L 410,380" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 6" />
                        </svg>

                        {/* Home destination marker */}
                        <div className="absolute bottom-[110px] right-[240px] sm:bottom-[115px] sm:right-[350px] w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white border-2 border-white animate-pulse">
                            ⌂
                        </div>

                        {/* Delivery truck marker */}
                        <div className="absolute top-[220px] left-[220px] w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white border-2 border-white shadow-lg">
                            🚚
                        </div>
                    </div>

                    {/* Floating Estimated time banner */}
                    <div className="absolute top-6 left-6 p-4 rounded-xl shadow-lg flex items-center gap-3 border" style={{ backgroundColor: "var(--surface-container-lowest)", borderColor: "var(--outline-variant)" }}>
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <FiClock className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="block text-[10px] uppercase font-bold text-gray-400">Estimated Delivery</span>
                            <span className="block text-sm font-extrabold text-blue-600">12 mins away</span>
                        </div>
                    </div>
                </div>

                {/* Right: Details Panel */}
                <div className="p-6 rounded-2xl border flex flex-col justify-between" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                    <div className="space-y-6">

                        {/* Header Status */}
                        <div className="flex justify-between items-start">
                            <div>
                                <button
                                    onClick={() => navigate("/orders")}
                                    className="flex items-center gap-1.5 border-2 border-gray-400 rounded-md py-2 px-3 text-xs font-semibold mb-4 cursor-pointer hover:opacity-85 transition-opacity"
                                    style={{ color: "var(--primary-container)" }}
                                >
                                    <FiArrowLeft className="w-3.5 h-3.5" />
                                    Back
                                </button>
                                <span className="bg-blue-600 text-white text-[9px] uppercase font-bold px-2 py-0.5 rounded">
                                    Out for Delivery
                                </span>
                                <h2 className="text-base font-bold mt-2" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                    Order #LX-82910
                                </h2>
                                <p className="text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
                                    Placed Dec 14, 2024 at 2:45 PM
                                </p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-4 py-4 border-y" style={{ borderColor: "var(--outline-variant)" }}>
                            {/* Step 1 */}
                            <div className="flex gap-3 items-start">
                                <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                                <div className="text-xs">
                                    <p className="font-semibold" style={{ color: "var(--on-surface)" }}>Ordered</p>
                                    <p className="text-[10px]" style={{ color: "var(--outline)" }}>2:45 PM</p>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="flex gap-3 items-start">
                                <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                                <div className="text-xs">
                                    <p className="font-semibold" style={{ color: "var(--on-surface)" }}>Packed</p>
                                    <p className="text-[10px]" style={{ color: "var(--outline)" }}>3:12 PM</p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="flex gap-3 items-start">
                                <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold mt-0.5">
                                    <FaTruck className="w-2.5 h-2.5" />
                                </div>
                                <div className="text-xs">
                                    <p className="font-semibold" style={{ color: "var(--on-surface)" }}>Out for Delivery</p>
                                    <p className="text-[10px]" style={{ color: "var(--outline)" }}>In transit since 3:45 PM</p>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="flex gap-3 items-start">
                                <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 mt-0.5"></div>
                                <div className="text-xs">
                                    <p className="font-semibold" style={{ color: "var(--on-surface-variant)" }}>Arriving</p>
                                    <p className="text-[10px]" style={{ color: "var(--outline)" }}>ETA 4:10 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Courier Info */}
                        <div>
                            <h3 className="text-[10px] uppercase font-bold tracking-wider mb-3" style={{ color: "var(--outline)", fontFamily: "'Geist', sans-serif" }}>
                                Your Delivery Specialist
                            </h3>
                            <div className="p-4 rounded-xl border flex justify-between items-center" style={{ borderColor: "var(--outline-variant)" }}>
                                <div className="flex gap-3 items-center">
                                    <img src={driverImg} alt="Marcus" className="w-10 h-10 rounded-full object-cover" />
                                    <div>
                                        <h4 className="text-xs font-semibold" style={{ color: "var(--on-surface)" }}>Marcus T.</h4>
                                        <p className="text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
                                            Electric Van &bull; White &bull; ★ 4.9
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                        <FiPhone className="w-4 h-4" />
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                                        <FiMessageSquare className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Order Items */}
                        <div>
                            <h3 className="text-[10px] uppercase font-bold tracking-wider mb-3" style={{ color: "var(--outline)", fontFamily: "'Geist', sans-serif" }}>
                                Order Items
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <img src={shoeImg} alt="shoe" className="w-10 h-10 rounded object-cover border" />
                                        <div>
                                            <h4 className="text-xs font-semibold" style={{ color: "var(--on-surface)" }}>Velo-Stride Performance Pro</h4>
                                            <p className="text-[9px]" style={{ color: "var(--on-surface-variant)" }}>Size 42 &bull; Crimson Red</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color: "var(--on-surface)" }}>$189.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-3 items-center">
                                        <img src={watchImg} alt="watch" className="w-10 h-10 rounded object-cover border" />
                                        <div>
                                            <h4 className="text-xs font-semibold" style={{ color: "var(--on-surface)" }}>Luxe S-Watch Series 9</h4>
                                            <p className="text-[9px]" style={{ color: "var(--on-surface-variant)" }}>Silver Aluminum &bull; 45mm</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold" style={{ color: "var(--on-surface)" }}>$429.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Banner */}
                    <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: "var(--outline-variant)" }}>
                        <div className="flex items-center gap-2 text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
                            <FiAlertCircle className="w-3.5 h-3.5" />
                            <span>Something wrong? Our concierge is here to help 24/7.</span>
                        </div>
                        <button className="text-[10px] font-semibold px-4 py-2 border rounded cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap" style={{ borderColor: "var(--outline)", color: "var(--on-surface)" }}>
                            Need Help?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery_tracking_page;
