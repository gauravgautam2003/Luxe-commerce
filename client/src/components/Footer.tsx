import { FiGlobe, FiTwitter, FiShare2 } from "react-icons/fi";
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate();
    return (
        <>
            {/* 5. Footer */}
            <footer className="w-full py-12 flex justify-center" style={{ borderTop: "1px solid var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)" }}>
                <div className="w-[90%] max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
                        {/* Brand Column */}
                        <div className="md:col-span-2">
                            <h3 className="text-base font-bold tracking-tight mb-4 text-purple-800" style={{ fontFamily: "'Geist', sans-serif" }}>
                                LUXE
                            </h3>
                            <p className="text-xs leading-relaxed max-w-xs mb-4" style={{ color: "var(--on-surface-variant)" }}>
                                Providing a curated marketplace experience for the modern professional. Quality and design at the heart of everything we do.
                            </p>
                            <div className="flex gap-3">
                                <FiGlobe className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
                                <FiTwitter className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
                                <FiShare2 className="w-4 h-4 text-gray-500 hover:text-blue-600 cursor-pointer transition-colors" />
                            </div>
                        </div>

                        {/* Menu Columns */}
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Explore
                            </h4>
                            <ul className="space-y-2 text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                <li><a href="#" className="hover:underline">Shop All</a></li>
                                <li><a href="#" className="hover:underline">New Arrivals</a></li>
                                <li><a href="#" className="hover:underline">Trending Now</a></li>
                                <li><a href="#" className="hover:underline">Collections</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Support
                            </h4>
                            <ul className="space-y-2 text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                <li><a href="#" onClick={() => navigate("/track")} className="hover:underline">Shipping & Returns</a></li>
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                                <li><a href="#" onClick={() => navigate("/track")} className="hover:underline">Order Tracking</a></li>
                                <li><a href="#" onClick={() => navigate("/orders")} className="hover:underline">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Company
                            </h4>
                            <ul className="space-y-2 text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                <li><a href="#" onClick={() => navigate("/admin")} className="hover:underline">Admin Dashboard</a></li>
                                <li><a href="#" className="hover:underline">Sustainability</a></li>
                                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4" style={{ borderColor: "var(--outline-variant)" }}>
                        <p className="text-[11px]" style={{ color: "var(--on-surface-variant)" }}>
                            &copy; {new Date().getFullYear()} LUXE Premium Marketplace. All rights reserved.
                        </p>
                        <div className="flex gap-2.5 opacity-60">
                            <span className="text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: "var(--outline-variant)" }}>VISA</span>
                            <span className="text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: "var(--outline-variant)" }}>MC</span>
                            <span className="text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: "var(--outline-variant)" }}>AMEX</span>
                            <span className="text-[10px] font-bold border px-1.5 py-0.5 rounded" style={{ borderColor: "var(--outline-variant)" }}>PP</span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer