import { FiGift, FiMic, FiSearch, FiSend, FiTrendingDown, FiZap } from "react-icons/fi";
import useProductSearch from "../hooks/productSearch.hooks";

const quickSearches = [
    { label: "Show new arrivals", icon: FiZap, query: "fashion" },
    { label: "Gift ideas", icon: FiGift, query: "headphones" },
    { label: "Price drops", icon: FiTrendingDown, query: "shoes" },
    { label: "Compare laptops", icon: FiSearch, query: "laptop" },
];

const Searchbar = () => {
    const { query, submittedQuery, filteredProducts, submitSearch, updateQuery } = useProductSearch();

    return (
        <div className="w-full">
            <div className="mb-5 flex flex-wrap gap-3">
                {quickSearches.map((item) => {
                    const Icon = item.icon;

                    return (
                        <button
                            key={item.label}
                            type="button"
                            onClick={() => submitSearch(item.query)}
                            className="flex h-10 items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-4 text-xs font-medium text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-white sm:text-sm"
                        >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>

            {submittedQuery && (
                <div className="mb-4 rounded-2xl border border-slate-200 bg-white shadow-lg">
                    <div className="border-b border-slate-100 px-5 py-3">
                        <p className="text-sm font-semibold text-slate-900">
                            Product results for "{submittedQuery}"
                        </p>
                    </div>

                    {filteredProducts.length > 0 ? (
                        <div className="grid gap-3 p-3 sm:grid-cols-2">
                            {filteredProducts.map((product) => (
                                <button
                                    key={product.id}
                                    type="button"
                                    className="flex min-w-0 items-center gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-16 w-16 flex-none rounded-lg object-cover"
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
                                </button>
                            ))}
                        </div>
                    ) : (
                        <p className="px-5 py-4 text-xs text-slate-500 sm:text-sm">
                            No matching products found.
                        </p>
                    )}
                </div>
            )}

            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    submitSearch();
                }}
                className="flex min-h-20 w-full items-center gap-3 rounded-2xl border border-slate-300 bg-white px-5 shadow-sm"
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

                <button
                    type="submit"
                    className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-slate-100 text-slate-500 shadow-md transition hover:bg-blue-600 hover:text-white"
                    aria-label="Search products"
                >
                    <FiSend className="h-5 w-5" />
                </button>
            </form>
        </div>
    );
};

export default Searchbar;
