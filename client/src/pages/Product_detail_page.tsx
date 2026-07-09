import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiHeart, FiShield, FiTruck, FiRefreshCw, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { products } from "../data/products";
import { useCommerce } from "../context/CommerceContext";

// Load laptop images
import prodLaptop from "../assets/laptop.png";
import prodLaptop2 from "../assets/laptop2.png";
import prodLaptop3 from "../assets/laptop3.png";
import prodLaptop4 from "../assets/laptop4.png";

const specs = [
    { label: "Processor", value: "LUXE X2 Neural (16-Core)" },
    { label: "Graphics", value: "Integrated 32-Core GPU" },
    { label: "Display", value: "16.2\" Liquid Pro Retina XDR" },
    { label: "Battery Life", value: "Up to 22 Hours" },
    { label: "Storage", value: "1TB NVMe Gen5 SSD" },
    { label: "Weight", value: "3.4 lbs (1.55 kg)" },
];

const Product_detail_page = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { addToCart } = useCommerce();
    const product = products.find((item) => item.id === id) ?? products.find((item) => item.id === "p-18") ?? products[0];
    const relatedProducts = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 4);
    const fallbackRelated = relatedProducts.length ? relatedProducts : products.filter((item) => item.id !== product.id).slice(0, 4);
    const [activeImg, setActiveImg] = useState(product.image);
    const [selectedColor, setSelectedColor] = useState("silver");
    const [selectedRam, setSelectedRam] = useState("32");

    const images = [product.image, prodLaptop, prodLaptop2, prodLaptop3, prodLaptop4];
    const selectedOption = `${selectedColor} / ${selectedRam}GB`;
    const originalPrice = product.price > 100 ? product.price + 400 : product.price + 20;

    useEffect(() => {
        setActiveImg(product.image);
    }, [product.image]);

    return (
        <div className="w-full min-h-screen py-8 flex justify-center theme-transition" style={{ backgroundColor: "var(--background)" }}>
            <div className="w-[90%] max-w-7xl">
                {/* Back button */}
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 mb-6 text-xs font-medium cursor-pointer hover:opacity-85 transition-opacity"
                    style={{ color: "var(--on-surface-variant)" }}
                >
                    <FiArrowLeft className="w-3.5 h-3.5" />
                    Back to Catalog
                </button>

                {/* Breadcrumbs */}
                <div className="text-[11px] mb-6 flex items-center gap-1.5" style={{ color: "var(--outline)" }}>
                    <span className="cursor-pointer hover:underline" onClick={() => navigate("/")}>Home</span>
                    <span>&gt;</span>
                    <span className="cursor-pointer hover:underline">Laptops</span>
                    <span>&gt;</span>
                    <span className="font-semibold" style={{ color: "var(--on-surface)" }}>{product.name}</span>
                </div>

                {/* Main Product Info block */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
                    {/* Left: Gallery */}
                    <div className="flex gap-4">
                        {/* Thumbnail selector */}
                        <div className="flex flex-col gap-2">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveImg(img)}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 cursor-pointer transition-colors"
                                    style={{
                                        borderColor: activeImg === img ? "var(--primary)" : "var(--outline-variant)",
                                    }}
                                >
                                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        {/* Active Image display */}
                        <div className="flex-1 h-[300px] sm:h-[420px] rounded-xl overflow-hidden bg-slate-50 relative border" style={{ borderColor: "var(--outline-variant)" }}>
                            <img src={activeImg} alt={product.name} className="w-full h-full object-cover" />
                            <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition-transform cursor-pointer">
                                <FiHeart className="w-4 h-4 text-gray-500 hover:text-red-500 transition-colors" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            {product.name}
                        </h1>

                        <div className="flex items-center gap-3 text-xs mb-6">
                            <span className="font-semibold text-amber-500">★ {product.rating}</span>
                            <span style={{ color: "var(--outline)" }}>(124 Reviews)</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            <span className="text-emerald-600 font-semibold">{product.inStock ? "In Stock" : "Out of Stock"}</span>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-baseline gap-4 mb-8">
                            <span className="text-2xl sm:text-3xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
                            <span className="text-sm line-through" style={{ color: "var(--outline)" }}>${originalPrice.toFixed(2)}</span>
                        </div>

                        <p className="text-xs leading-relaxed mb-8" style={{ color: "var(--on-surface-variant)" }}>
                            {product.description}
                        </p>

                        {/* Color Selection */}
                        <div className="mb-6">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Finish
                            </h3>
                            <div className="flex gap-3">
                                {[
                                    { id: "silver", bg: "#e2e8f0" },
                                    { id: "slate", bg: "#475569" },
                                    { id: "graphite", bg: "#1e293b" },
                                ].map((color) => (
                                    <button
                                        key={color.id}
                                        onClick={() => setSelectedColor(color.id)}
                                        className="w-8 h-8 rounded-full border-2 cursor-pointer transition-transform hover:scale-105 flex items-center justify-center"
                                        style={{
                                            backgroundColor: color.bg,
                                            borderColor: selectedColor === color.id ? "var(--primary)" : "transparent",
                                            outline: selectedColor === color.id ? "1px solid var(--primary-container)" : "none",
                                        }}
                                        aria-label={color.id}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* RAM Selection */}
                        <div className="mb-8">
                            <h3 className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                Memory
                            </h3>
                            <div className="flex gap-3">
                                {[
                                    { id: "32", label: "32GB Unified Memory" },
                                    { id: "64", label: "64GB Unified Memory" },
                                ].map((ram) => (
                                    <button
                                        key={ram.id}
                                        onClick={() => setSelectedRam(ram.id)}
                                        className="text-xs font-semibold px-4 py-2.5 rounded-lg border cursor-pointer transition-colors"
                                        style={{
                                            backgroundColor: selectedRam === ram.id ? "var(--surface-container-highest)" : "var(--surface-container-lowest)",
                                            borderColor: selectedRam === ram.id ? "var(--primary)" : "var(--outline-variant)",
                                            color: selectedRam === ram.id ? "var(--primary-container)" : "var(--on-surface)",
                                        }}
                                    >
                                        {ram.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Add to Cart Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 mb-8">
                            <button
                                onClick={() => {
                                    addToCart(product, selectedOption);
                                    navigate("/bag");
                                }}
                                className="flex-1 text-xs font-semibold py-3.5 rounded-xl cursor-pointer hover:opacity-95 transition-opacity"
                                style={{ backgroundColor: "var(--primary)", color: "var(--on-primary)" }}
                            >
                                Add to Cart
                            </button>
                            <button
                                className="px-5 py-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-semibold cursor-pointer hover:bg-gray-50 transition-colors"
                                style={{ borderColor: "var(--outline)", color: "var(--on-surface)" }}
                            >
                                <FiHeart className="w-4 h-4" />
                                Wishlist
                            </button>
                        </div>

                        {/* Shipping details */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t" style={{ borderColor: "var(--outline-variant)" }}>
                            <div className="text-center">
                                <FiTruck className="w-5 h-5 mx-auto mb-1.5 text-blue-600" />
                                <span className="block text-[10px] font-semibold" style={{ color: "var(--on-surface)" }}>Free Express Shipping</span>
                            </div>
                            <div className="text-center">
                                <FiShield className="w-5 h-5 mx-auto mb-1.5 text-blue-600" />
                                <span className="block text-[10px] font-semibold" style={{ color: "var(--on-surface)" }}>3-Year Warranty</span>
                            </div>
                            <div className="text-center">
                                <FiRefreshCw className="w-5 h-5 mx-auto mb-1.5 text-blue-600" />
                                <span className="block text-[10px] font-semibold" style={{ color: "var(--on-surface)" }}>30-Day Returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specs Section */}
                <section className="mb-16">
                    <div className="border-b pb-4 mb-6" style={{ borderColor: "var(--outline-variant)" }}>
                        <h2 className="text-base font-bold uppercase tracking-wider" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Specifications
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {specs.map((spec) => (
                            <div
                                key={spec.label}
                                className="flex justify-between py-2 border-b text-xs"
                                style={{ borderColor: "var(--outline-variant)" }}
                            >
                                <span style={{ color: "var(--on-surface-variant)" }}>{spec.label}</span>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>{spec.value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Similar Products */}
                <section>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-base font-bold uppercase tracking-wider" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Similar Products
                        </h2>
                        <div className="flex gap-2">
                            <button className="w-7 h-7 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                                <FiArrowLeft className="w-3 h-3" />
                            </button>
                            <button className="w-7 h-7 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                                <FiArrowRight className="w-3 h-3" />
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {fallbackRelated.map((prod, index) => (
                            <div
                                key={prod.name}
                                onClick={() => navigate(`/product/${prod.id}`)}
                                className="rounded-xl p-3 flex flex-col justify-between hover:shadow-md transition-shadow relative"
                                style={{ backgroundColor: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)" }}
                            >
                                <div className="h-40 overflow-hidden rounded-lg relative bg-slate-50">
                                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                                    {index === 0 && (
                                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] uppercase font-bold px-1.5 py-0.5 rounded">
                                            New
                                        </span>
                                    )}
                                </div>
                                <div className="mt-3">
                                    <h4 className="text-xs font-semibold truncate" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                        {prod.name}
                                    </h4>
                                    <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mt-1">
                                        ${prod.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Product_detail_page;
