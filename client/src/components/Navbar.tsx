import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSun, FiMoon} from "react-icons/fi";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useCommerce } from "../context/CommerceContext";


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchVal, setSearchVal] = useState("");
    const navigate = useNavigate();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { cartCount } = useCommerce();

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchVal.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchVal)}`);
        }
    };

    return (
        <>
            <nav
                className="w-full h-12 flex items-center justify-center theme-transition sticky top-0 z-50"
                style={{
                    backgroundColor: "var(--surface-container-lowest)",
                    borderBottom: "1px solid var(--outline-variant)",
                }}
            >
                <div className="w-[92%] max-w-7xl flex justify-between items-center">
                    {/* Left: Logo & Nav Links */}
                    <div className="flex items-center gap-6">
                        <div
                            className="font-extrabold text-base sm:text-lg cursor-pointer tracking-tight"
                            style={{ color: "var(--primary-container)", fontFamily: "'Geist', sans-serif" }}
                            onClick={() => navigate("/")}
                        >
                            LUXE
                        </div>
                    </div>

                    {/* Right: Search + Icons */}
                    <div className="flex items-center gap-2 sm:gap-3">

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 font-semibold cursor-pointer hover:scale-110"
                            style={{
                                color: "var(--on-surface-variant)",
                                backgroundColor: "transparent",
                            }}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "light" ? (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <FiMoon className="w-5 h-5" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <FiSun className="w-5 h-5 text-white" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* User Icon */}
                        <FaRegUserCircle
                            className="w-5 h-5 cursor-pointer transition-colors duration-200 hover:opacity-70"
                            style={{ color: "var(--on-surface)" }}
                            onClick={() => navigate("/signup")}
                        />

                        {/* Cart Icon with badge */}
                        <div className="relative cursor-pointer" onClick={() => navigate("/bag")}>
                            <IoCartOutline
                                className="w-5 h-5 transition-colors duration-200 hover:opacity-90"
                                style={{ color: "var(--on-surface)" }}
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] font-bold rounded-full h-3.5 min-w-3.5 px-1 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="w-full theme-transition"
                style={{
                    borderTop: "1px solid var(--outline-variant)",
                    backgroundColor: "var(--surface-container)",
                }}
            >
            </div>
        </>
    );
};

export default Navbar;
