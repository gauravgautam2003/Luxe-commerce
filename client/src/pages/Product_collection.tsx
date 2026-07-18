import { useState } from "react";
import { products } from "../data/products";

const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0,
    }).format(price);

const Product_collection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

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
            <div className="mx-auto flex max-w-7xl flex-col gap-6">
                <section
                    className="rounded-3xl p-5 shadow-sm md:p-6"
                    style={{
                        backgroundColor: "var(--surface-container-lowest)",
                        color: "var(--on-surface)",
                        border: "1px solid var(--outline-variant)",
                        boxShadow: "var(--shadow-1)",
                    }}
                >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                                Premium Collections
                            </p>
                            <h1
                                className="mt-2 text-3xl font-semibold"
                                style={{ color: "var(--on-surface)" }}
                            >
                                Shop the best picks curated for you
                            </h1>
                            <p
                                className="mt-2 text-sm"
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
                                    className="rounded-full px-3 py-2 text-sm font-medium transition"
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
                        className="rounded-full px-3 py-2 text-sm"
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
                                <span className="absolute left-2 top-2 rounded-full bg-orange-500 px-2 py-1 text-[10px] font-semibold text-white">
                                    Best Seller
                                </span>
                            </div>

                            <div className="flex flex-1 flex-col p-2.5">
                                <div className="flex items-center justify-between text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
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

                                <h2 className="mt-2 text-sm font-semibold" style={{ color: "var(--on-surface)" }}>
                                    {item.name}
                                </h2>
                                <p className="mt-1 text-[11px] leading-4" style={{ color: "var(--on-surface-variant)" }}>
                                    {item.description}
                                </p>

                                <div className="mt-2 flex items-end justify-between">
                                    <div>
                                        <p className="text-sm font-semibold" style={{ color: "var(--on-surface)" }}>
                                            {formatPrice(item.price)}
                                        </p>
                                        <p className="text-[10px]" style={{ color: "var(--primary)" }}>
                                            Free delivery
                                        </p>
                                    </div>
                                    <span className="text-[10px]" style={{ color: "var(--on-surface-variant)" }}>
                                        In stock
                                    </span>
                                </div>

                                <div className="mt-2 grid grid-cols-2 gap-1.5">
                                    <button
                                        className="rounded-md px-2 py-1.5 text-[10px] font-medium transition"
                                        style={{
                                            backgroundColor: "var(--surface-container-low)",
                                            color: "var(--on-surface)",
                                            border: "1px solid var(--outline-variant)",
                                        }}
                                    >
                                        Add
                                    </button>
                                    <button
                                        className="rounded-md px-2 py-1.5 text-[10px] font-medium transition"
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