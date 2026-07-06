import { IoCartOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FiSun, FiMoon, FiMenu, FiX, FiSearch } from "react-icons/fi";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { AnimatePresence, motion } from "framer-motion";
import { useCommerce } from "../context/CommerceContext";

const navLinks = [
    { label: "Shop All", path: "/" },
    { label: "New Arrivals", path: "/" },
    { label: "Collections", path: "/" },
    { label: "Sale", path: "/" },
];

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

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-5">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => navigate(link.path)}
                                    className="text-xs font-medium transition-colors duration-200 hover:opacity-80 cursor-pointer"
                                    style={{
                                        color: "var(--on-surface-variant)",
                                        fontFamily: "'Inter', sans-serif",
                                    }}
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Search + Icons */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Search Input (Desktop Only) */}
                        <form
                            onSubmit={handleSearchSubmit}
                            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full border theme-transition max-w-xs"
                            style={{
                                backgroundColor: "var(--surface-container-low)",
                                borderColor: "var(--outline-variant)",
                            }}
                        >
                            <FiSearch className="w-3.5 h-3.5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search LUXE..."
                                value={searchVal}
                                onChange={(e) => setSearchVal(e.target.value)}
                                className="bg-transparent text-xs outline-none w-32 focus:w-44 transition-all duration-200"
                                style={{
                                    color: "var(--on-surface)",
                                    fontFamily: "'Inter', sans-serif",
                                }}
                            />
                        </form>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer hover:scale-110"
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
                                        <FiMoon className="w-4 h-4" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                        animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                        exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <FiSun className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        {/* User Icon */}
                        <FaRegUserCircle
                            className="w-[18px] h-[18px] cursor-pointer transition-colors duration-200 hover:opacity-70"
                            style={{ color: "var(--on-surface)" }}
                            onClick={() => navigate("/signup")}
                        />

                        {/* Cart Icon with badge */}
                        <div className="relative cursor-pointer" onClick={() => navigate("/bag")}>
                            <IoCartOutline
                                className="w-5 h-5 transition-colors duration-200 hover:opacity-70"
                                style={{ color: "var(--on-surface)" }}
                            />
                            {cartCount > 0 && (
                                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[9px] font-bold rounded-full h-3.5 min-w-3.5 px-1 flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition-colors"
                            style={{ color: "var(--on-surface)" }}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 z-40 md:hidden"
                            style={{ backgroundColor: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            className="fixed top-12 right-0 z-50 w-64 h-[calc(100vh-3rem)] md:hidden shadow-xl"
                            style={{
                                backgroundColor: "var(--surface-container-lowest)",
                                borderLeft: "1px solid var(--outline-variant)",
                            }}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <div className="flex flex-col p-6 gap-1">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link.label}
                                        onClick={() => {
                                            navigate(link.path);
                                            setMobileMenuOpen(false);
                                        }}
                                        className="text-left py-3 px-4 rounded-lg text-sm font-medium transition-colors cursor-pointer"
                                        style={{
                                            color: "var(--on-surface)",
                                            fontFamily: "'Inter', sans-serif",
                                        }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1 }}
                                        whileHover={{
                                            backgroundColor: "var(--surface-container-high)",
                                        }}
                                    >
                                        {link.label}
                                    </motion.button>
                                ))}

                                <div className="mt-4 pt-4" style={{ borderTop: "1px solid var(--outline-variant)" }}>
                                    <button
                                        onClick={toggleTheme}
                                        className="flex items-center gap-3 py-3 px-4 rounded-lg text-sm font-medium w-full transition-colors cursor-pointer"
                                        style={{
                                            color: "var(--on-surface)",
                                            fontFamily: "'Inter', sans-serif",
                                        }}
                                    >
                                        {theme === "light" ? (
                                            <><FiMoon className="w-4 h-4" /> Dark Mode</>
                                        ) : (
                                            <><FiSun className="w-4 h-4" /> Light Mode</>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <div
                className="w-full theme-transition"
                style={{
                    borderTop: "1px solid var(--outline-variant)",
                    backgroundColor: "var(--surface-container)",
                }}
            ></div>
        </>
    );
};

export default Navbar;
