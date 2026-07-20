import { useState } from "react";
import { products } from "../data/products";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(price);

const Product_collection = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const navigate = useNavigate();

    const categories = ["All", ...Array.from(new Set(products.map((item) => item.category)))];
    const visibleProducts =
        activeCategory === "All"
            ? products
            : products.filter((item) => item.category === activeCategory);

    return (
        <div
            className="min-h-screen px-4 py-6 md:px-6 lg:px-8"
            style={{
                backgroundColor: "var(--background)",
                color: "var(--on-background)",
            }}
        >
            <div className="mx-auto flex max-w-7xl flex-col gap-6 mt-8">
                <div
                    className="absolute left-3 top-14 sm:left-4 flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-xl border px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm shadow-sm transition-colors z-30 theme-transition"
                    style={{
                        borderColor: "var(--outline-variant)",
                        backgroundColor: "var(--surface-container-lowest)",
                        color: "var(--on-surface-variant)",
                    }}
                    onClick={() => navigate("/")}
                >
                    <FaArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <p>Back</p>
                </div>
                <section
                    className="rounded-3xl p-5 shadow-sm md:p-6"
                    style={{
                        backgroundColor: "var(--surface-container-lowest)",
                        color: "var(--on-surface)",
                        border: "1px solid var(--outline-variant)",
                        boxShadow: "var(--shadow-1)",
                    }}
                >

                    <div className="flex flex-col  gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">
                                Premium Collections
                            </p>
                            <h1
                                className="mt-2 text-3xl font-semibold"
                                style={{ color: "var(--on-surface)" }}
                            >
                                Shop the best picks curated for you
                            </h1>
                            <p
                                className="mt-2 text-gray-600 text-sm"
                                style={{ color: "var(--on-surface-variant)" }}
                            >
                                Fast delivery, clear ratings, and a smoother buying experience in one place.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl px-4 py-3 text-sm"
                            style={{
                                backgroundColor: "var(--secondary-container)",
                                color: "var(--on-secondary-container)",
                            }}
                        >
                            <p className="font-semibold">Free delivery over ₹500</p>
                            <p>Limited-time offer on selected items.</p>
                        </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className="rounded-lg px-3 py-2 text-sm font-bold text-gray-300 transition"
                                    style={
                                        isActive
                                            ? {
                                                backgroundColor: "var(--primary)",
                                                color: "var(--on-primary)",
                                            }
                                            : {
                                                backgroundColor: "var(--surface-container-low)",
                                                color: "var(--on-surface)",
                                                border: "1px solid var(--outline-variant)",
                                            }
                                    }
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </section>

                <div className="flex items-center justify-between">
                    <p className="text-sm" style={{ color: "var(--on-surface-variant)" }}>
                        {visibleProducts.length} items found
                    </p>
                    <div
                        className="rounded-lg font-semibold px-3 py-2 text-sm"
                        style={{
                            backgroundColor: "var(--surface-container-lowest)",
                            color: "var(--on-surface)",
                            border: "1px solid var(--outline-variant)",
                        }}
                    >
                        Sort: Featured
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {visibleProducts.map((item) => (
                        <article
                            key={item.id}
                            className="group flex flex-col overflow-hidden rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            style={{
                                backgroundColor: "var(--surface-container-lowest)",
                                color: "var(--on-surface)",
                                border: "1px solid var(--outline-variant)",
                                boxShadow: "var(--shadow-1)",
                            }}
                        >
                            <div className="relative">
                                <img src={item.image} alt={item.name} className="h-40 w-full object-cover" />
                                <span className="absolute left-2 top-2 rounded-lg bg-orange-500 px-2 py-1 text-[11px] font-semibold text-white">
                                    Best Seller
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col p-2.5">
                                <div className="flex items-center justify-between text-[11px]" style={{ color: "var(--on-surface-variant)" }}>
                                    <span
                                        className="rounded-full px-2 py-0.5"
                                        style={{
                                            backgroundColor: "var(--secondary-container)",
                                            color: "var(--on-secondary-container)",
                                        }}
                                    >
                                        {item.category}
                                    </span>
                                    <span style={{ color: "var(--tertiary)" }}>⭐ {item.rating.toFixed(1)}</span>
                                </div>

                                <h2 className="mt-2 text-lg font-medium text-gray-600" style={{ color: "var(--on-surface)" }}>
                                    {item.name}
                                </h2>
                                <p className="mt-1 text-[12px] leading-4" style={{ color: "var(--on-surface-variant)" }}>
                                    {item.description}
                                </p>

                                <div className="mt-2 flex items-end justify-between">
                                    <div>
                                        <p className="text-md font-semibold" style={{ color: "var(--on-surface)" }}>
                                            {formatPrice(item.price)}
                                        </p>
                                        <p className="text-[11px]" style={{ color: "var(--primary)" }}>
                                            Free delivery
                                        </p>
                                    </div>
                                    <span className="text-[11px]" style={{ color: "var(--on-surface-variant)" }}>
                                        In stock
                                    </span>
                                </div>

                                <div className="mt-2 grid grid-cols-2 gap-1.5">
                                    <button
                                        className="rounded-md px-2 py-1.5 text-[12px] font-medium transition"
                                        style={{
                                            backgroundColor: "var(--surface-container-low)",
                                            color: "var(--on-surface)",
                                            border: "1px solid var(--outline-variant)",
                                        }}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="rounded-md px-2 py-1.5 text-[12px] font-medium transition"
                                        style={{
                                            backgroundColor: "var(--primary)",
                                            color: "var(--on-primary)",
                                        }}
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product_collection