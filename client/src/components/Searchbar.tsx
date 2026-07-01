import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiGift, FiMic, FiSearch, FiSend, FiTrendingDown, FiZap } from "react-icons/fi";
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

    return (
        <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            <motion.div
                className="mb-4 grid grid-cols-2 gap-2 sm:mb-5 sm:flex sm:flex-wrap sm:gap-3"
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
                            onClick={() => submitSearch(item.query)}
                            variants={itemMotion}
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.96 }}
                            className="flex h-10 min-w-0 items-center justify-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3 text-xs font-medium text-slate-800 shadow-sm transition-colors hover:border-slate-400 hover:bg-white sm:justify-start sm:px-4 sm:text-sm"
                        >
                            <Icon className="h-4 w-4" />
                            <span className="truncate">{item.label}</span>
                        </motion.button>
                    );
                })}
            </motion.div>

            <AnimatePresence mode="popLayout">
                {submittedQuery && (
                    <motion.div
                        className="mb-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg"
                        initial={{ opacity: 0, height: 0, y: 16 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                    >
                        <div className="border-b border-slate-100 px-4 py-3 sm:px-5">
                            <p className="truncate text-sm font-semibold text-slate-900">
                                Product results for "{submittedQuery}"
                            </p>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <motion.div
                                className="grid gap-2 p-2 sm:grid-cols-2 sm:gap-3 sm:p-3"
                                variants={containerMotion}
                                initial="hidden"
                                animate="show"
                            >
                                {filteredProducts.map((product) => (
                                    <motion.button
                                        key={product.id}
                                        type="button"
                                        variants={itemMotion}
                                        whileHover={{ y: -2, backgroundColor: "#f8fafc" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex min-w-0 items-center gap-3 rounded-xl p-2 text-left transition-colors"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-14 w-14 flex-none rounded-lg object-cover sm:h-16 sm:w-16"
                                        />
                                        <span className="min-w-0">
                                            <span className="block truncate text-sm font-semibold text-slate-950">
                                                {product.name}
                                            </span>
                                            <span className="block text-xs text-slate-500">
                                                {product.category} . ${product.price.toFixed(2)}
                                            </span>
                                            <span className="block truncate text-xs text-slate-600">
                                                {product.description}
                                            </span>
                                        </span>
                                    </motion.button>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.p
                                className="px-5 py-4 text-xs text-slate-500 sm:text-sm"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                No matching products found.
                            </motion.p>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.form
                onSubmit={(event) => {
                    event.preventDefault();
                    submitSearch();
                }}
                className="flex min-h-16 w-full items-center gap-2 rounded-2xl border border-slate-300 bg-white px-3 shadow-sm transition-colors focus-within:border-blue-500 sm:min-h-20 sm:gap-3 sm:px-5"
                whileFocus={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 360, damping: 28 }}
            >
                <input
                    type="search"
                    value={query}
                    onChange={(event) => updateQuery(event.target.value)}
                    placeholder="Ask Luxe AI for product help..."
                    className="min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500"
                />

                <button
                    type="button"
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-slate-800 transition hover:bg-slate-100"
                    aria-label="Voice search"
                >
                    <FiMic className="h-5 w-5" />
                </button>

                <motion.button
                    type="submit"
                    className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-slate-100 text-slate-500 shadow-md transition-colors hover:bg-blue-600 hover:text-white sm:h-12 sm:w-12"
                    aria-label="Search products"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.92 }}
                >
                    <FiSend className="h-5 w-5" />
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Searchbar;
