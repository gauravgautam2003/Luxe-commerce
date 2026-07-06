import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect } from "react";
import { FiGift, FiMic, FiSearch, FiSend, FiTrendingDown, FiZap } from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import useProductSearch from "../hooks/productSearch.hooks";

const quickSearches = [
    { label: "Show new arrivals", icon: FiZap, query: "fashion" },
    { label: "Gift ideas", icon: FiGift, query: "headphones" },
    { label: "Price drops", icon: FiTrendingDown, query: "shoes" },
    { label: "Compare laptops", icon: FiSearch, query: "laptop" },
];

const containerMotion: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.08,
        },
    },
};

const itemMotion: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 420, damping: 32 },
    },
};

const Searchbar = () => {
    const { query, submittedQuery, filteredProducts, submitSearch, updateQuery } = useProductSearch();
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const urlQuery = searchParams.get("q");
        if (urlQuery) {
            submitSearch(urlQuery);
        }
    }, []);

    const handleSubmit = (searchQuery?: string) => {
        const nextQuery = searchQuery ?? query;
        if (!nextQuery.trim()) {
            return;
        }

        setSearchParams({ q: nextQuery.trim() });
        submitSearch(nextQuery);
    };

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >

            <AnimatePresence mode="popLayout">
                {submittedQuery && (
                    <motion.div
                        className="mb-3 sm:mb-4 overflow-y-auto rounded-xl sm:rounded-2xl border theme-transition"
                        style={{
                            borderColor: "var(--outline-variant)",
                            backgroundColor: "var(--surface-container-lowest)",
                            boxShadow: "var(--shadow-2)",
                        }}
                        initial={{ opacity: 0, height: 0, y: 16 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <div
                            className="border-b px-3 py-2.5 sm:px-4 sm:py-3"
                            style={{ borderColor: "var(--surface-container)" }}
                        >
                            <p
                                className="truncate text-xs sm:text-sm font-semibold"
                                style={{
                                    color: "var(--on-surface)",
                                    fontFamily: "'Geist', sans-serif",
                                }}
                            >
                                Product results for "{submittedQuery}"
                            </p>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <motion.div
                                className="grid gap-1.5 p-1.5 sm:grid-cols-2 sm:gap-2 sm:p-2"
                                variants={containerMotion}
                                initial="hidden"
                                animate="show"
                            >
                                {filteredProducts.map((product) => (
                                    <motion.button
                                        key={product.id}
                                        type="button"
                                        variants={itemMotion}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => navigate(`/product/${product.id}`)}
                                        className="flex min-w-0 items-center gap-2.5 sm:gap-3 rounded-lg sm:rounded-xl p-1.5 sm:p-2 text-left transition-colors cursor-pointer"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-12 w-12 sm:h-14 sm:w-14 flex-none rounded-lg object-cover"
                                        />
                                        <span className="min-w-0">
                                            <span
                                                className="block truncate text-xs sm:text-sm font-semibold"
                                                style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}
                                            >
                                                {product.name}
                                            </span>
                                            <span
                                                className="block text-[10px] sm:text-xs"
                                                style={{ color: "var(--on-surface-variant)" }}
                                            >
                                                {product.category} · ${product.price.toFixed(2)}
                                            </span>
                                            <span
                                                className="block truncate text-[10px] sm:text-xs"
                                                style={{ color: "var(--on-surface-variant)" }}
                                            >
                                                {product.description}
                                            </span>
                                        </span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.p
                                className="px-4 py-3 sm:px-5 sm:py-4 text-[10px] sm:text-xs"
                                style={{ color: "var(--on-surface-variant)" }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                No matching products found.
                            </motion.p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                className="mb-3 sm:mb-4 grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2"
                variants={containerMotion}
                initial="hidden"
                animate="show"
            >
                {quickSearches.map((item) => {
                    const Icon = item.icon;

                    return (
                        <motion.button
                            key={item.label}
                            type="button"
                            onClick={() => handleSubmit(item.query)}
                            variants={itemMotion}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex h-8 sm:h-9 min-w-0 items-center justify-center gap-1.5 sm:gap-2 rounded-full border px-2.5 sm:px-3 text-[10px] sm:text-xs font-medium shadow-sm transition-colors sm:justify-start cursor-pointer"
                            style={{
                                borderColor: "var(--outline-variant)",
                                backgroundColor: "var(--surface-container)",
                                color: "var(--on-surface)",
                                fontFamily: "'Geist', sans-serif",
                            }}
                        >
                            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            <span className="truncate">{item.label}</span>
                        </motion.button>
                    );
                })}
            </motion.div>

            <motion.form
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit();
                }}
                className="flex min-h-12 sm:min-h-14 py-8 w-full items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border px-3 sm:px-4 transition-colors theme-transition"
                style={{
                    borderColor: "var(--outline-variant)",
                    backgroundColor: "var(--surface-container-lowest)",
                    boxShadow: "var(--shadow-1)",
                }}
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
            >
                <input
                    type="search"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    placeholder="Ask Luxe AI for product help..."
                    className="min-w-0 flex-1 bg-transparent text-xs sm:text-sm outline-none"
                    style={{
                        color: "var(--on-surface)",
                        fontFamily: "'Inter', sans-serif",
                    }}
                />

                <button
                    type="button"
                    className="flex h-8 w-8 sm:h-9 sm:w-9 flex-none items-center justify-center rounded-full transition cursor-pointer"
                    style={{ color: "var(--on-surface)" }}
                    aria-label="Voice search"
                >
                    <FiMic className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>

                <motion.button
                    type="submit"
                    className="flex h-9 w-9 sm:h-10 sm:w-10 flex-none items-center justify-center rounded-xl sm:rounded-2xl shadow-md transition-colors cursor-pointer"
                    style={{
                        backgroundColor: "var(--surface-container)",
                        color: "var(--on-surface-variant)",
                    }}
                    aria-label="Search products"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.92 }}
                >
                    <FiSend className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Searchbar;
