import { PiMetaLogoBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiArrowLeft, FiHeart, FiGlobe, FiTwitter, FiShare2, FiMail } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

// Category images (mix of generated and existing)
import catElectronics from "../assets/category_electronics.png";
import catFashion from "../assets/category_fashion.png";
import catHome from "../assets/category_home.png";
import catBeauty from "../assets/category_beauty.png";

// Product images
import prodBike from "../assets/product_bike.png";
import prodCeramic from "../assets/product_ceramic.png";
import prodHeadphones from "../assets/headphone.jpg";
import prodWatch from "../assets/watch.jpg";
import prodBackpack from "../assets/fashion.jpg"; // Leather bag substitute
import { products } from "../data/products";
import { useCommerce } from "../context/CommerceContext";

// Collage images
import colSpeaker from "../assets/bluetothLead.jpg";
import colLamp from "../assets/hes6.jpg";
import colSunglasses from "../assets/watch.jpg";
import colScarf from "../assets/shirts.jpg";
import Footer from "../components/Footer";
import AI_button from "../components/buttons/AI_button";

const categories = [
    { name: "Electronics", desc: "Precision Engineered Tech", img: catElectronics },
    { name: "Fashion", desc: "Curated Contemporary Wear", img: catFashion },
    { name: "Home Appliances", desc: "Design-Led Functionality", img: catHome },
    { name: "Beauty & Wellness", desc: "Artisanal Self-Care", img: catBeauty },
];

const trendingProducts = [
    { id: "p-11", name: "Sonic-V ANC Headphones", price: 449.0, img: prodHeadphones },
    { id: "p-40", name: "Horizon Slim Watch", price: 289.0, img: prodWatch },
    { id: "p-ceramic", name: "Terra Ceramic Set", price: 75.0, img: prodCeramic },
    { id: "p-backpack", name: "Executive Leather Pack", price: 550.0, img: prodBackpack },
];

const Home_page = () => {
    const navigate = useNavigate();
    const { addToCart } = useCommerce();

    const addProductToBag = (id: string) => {
        const product = products.find((item) => item.id === id);
        if (!product) {
            navigate(`/product/${id}`);
            return;
        }

        addToCart(product);
        navigate("/bag");
    };

    return (
        <AnimatePresence>
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden theme-transition" style={{ backgroundColor: "var(--background)" }}>
                {/* Hero Section */}
                <div className="w-full">
                    <MainFrame />
                </div>

                {/* 1. Curation by Category */}
                <section className="w-full py-12 sm:py-16 flex justify-center">
                    <div className="w-[90%] max-w-7xl">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight" >
                                    Curation by Category
                                </h2>
                                <p className="text-xs mt-1" style={{ color: "var(--on-surface-variant)" }}>
                                    Browse through our meticulously selected departments.
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                                    <FiArrowLeft className="w-3.5 h-3.5" />
                                </button>
                                <button className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "var(--outline-variant)", color: "var(--on-surface)" }}>
                                    <FiArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {categories.map((cat) => (
                                <motion.div
                                    key={cat.name}
                                    className="group cursor-pointer rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                                    style={{ backgroundColor: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)" }}
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="h-44 sm:h-48 overflow-hidden relative">
                                        <img src={cat.img} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-sm font-semibold" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                            {cat.name}
                                        </h3>
                                        <p className="text-[11px] mt-0.5" style={{ color: "var(--on-surface-variant)" }}>
                                            {cat.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 2. Trending Now */}
                <section className="w-full py-12 sm:py-16 flex justify-center" style={{ backgroundColor: "var(--surface-container-low)" }}>
                    <div className="w-[90%] max-w-7xl">
                        <div className="mb-8">
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight" >
                                Trending Now
                              </h2>
                            <p className="text-xs mt-1" style={{ color: "var(--on-surface-variant)" }}>
                                The pieces everyone is talking about this week.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Featured item - Bike */}
                            <motion.div
                                className="lg:col-span-2 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
                                style={{ backgroundColor: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)" }}
                                whileHover={{ y: -2 }}
                            >
                                <div className="h-64 sm:h-80 relative overflow-hidden bg-slate-100">
                                    <img src={prodBike} alt="Aero-X Electric Commuter" className="w-full h-full object-cover" />
                                    <span className="absolute top-4 left-4 bg-black text-white text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded">
                                        Bestseller
                                    </span>
                                </div>
                                <div className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                                    <div className="max-w-md">
                                        <h3 className="text-base sm:text-lg font-bold">
                                            Aero-X Electric Commuter
                                        </h3>
                                        <p className="text-xs mt-1.5 leading-relaxed" style={{ color: "var(--on-surface-variant)" }}>
                                            The ultimate fusion of aerospace engineering and urban mobility. Ultra-light titanium frame with 100km range.
                                        </p>
                                        <span className="block text-base font-semibold mt-3 text-blue-600">
                                            $3,499.00
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => addProductToBag("p-bike")}
                                        className="text-xs font-semibold px-5 py-2.5 rounded-full cursor-pointer hover:opacity-90 transition-opacity"
                                        style={{ backgroundColor: "var(--primary)", color: "var(--on-primary)" }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </motion.div>

                            {/* Small product cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {trendingProducts.map((prod) => (
                                    <div
                                        key={prod.name}
                                        onClick={() => navigate(`/product/${prod.id}`)}
                                        className="rounded-xl p-3 flex flex-col justify-between cursor-pointer hover:shadow-md transition-shadow"
                                        style={{ backgroundColor: "var(--surface-container-lowest)", border: "1px solid var(--outline-variant)" }}
                                    >
                                        <div className="h-32 sm:h-36 overflow-hidden rounded-lg relative bg-slate-50">
                                            <img src={prod.img} alt={prod.name} className="w-full h-full object-cover" />
                                            <button
                                                className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow hover:scale-105 transition-transform"
                                                onClick={(e) => { e.stopPropagation(); }}
                                            >
                                                <FiHeart className="w-3.5 h-3.5 text-gray-500 hover:text-red-500 transition-colors" />
                                            </button>
                                        </div>
                                        <div className="mt-3">
                                            <h4 className="text-xs font-semibold truncate" >
                                                {prod.name}
                                            </h4>
                                            <p className="text-xs font-bold text-gray-600 dark:text-gray-400 mt-1">
                                                ${prod.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Fresh Edit / Curated Collage */}
                <section className="w-full py-16 sm:py-20 flex justify-center">
                    <div className="w-[90%] max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Staggered Grid Collage */}
                        
                        <div className="grid grid-cols-2 gap-3 relative">
                            <div className="space-y-3">
                                <motion.div className="rounded-xl overflow-hidden h-40 bg-slate-50" whileHover={{ scale: 1.02 }}>
                                    <img src={colSpeaker} alt="Speaker" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div className="rounded-xl overflow-hidden h-52 bg-slate-50" whileHover={{ scale: 1.02 }}>
                                    <img src={colSunglasses} alt="Sunglasses" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                            <div className="space-y-3 pt-6">
                                <motion.div className="rounded-xl overflow-hidden h-52 bg-slate-50" whileHover={{ scale: 1.02 }}>
                                    <img src={colLamp} alt="Lamp" className="w-full h-full object-cover" />
                                </motion.div>
                                <motion.div className="rounded-xl overflow-hidden h-40 bg-slate-50" whileHover={{ scale: 1.02 }}>
                                    <img src={colScarf} alt="Scarf" className="w-full h-full object-cover" />
                                </motion.div>
                            </div>
                        </div>

                        {/* Details copy */}
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 block mb-2">
                                THE FRESH EDIT
                            </span>
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight leading-snug mb-5">
                                Curated Arrivals for the Modern Professional
                            </h2>
                            <p className="text-xs leading-relaxed mb-6" style={{ color: "var(--on-surface-variant)" }}>
                                Our weekly drop features exclusively sourced items that blend revolutionary technology with timeless aesthetic principles. Each piece is vetted for quality, sustainability, and design integrity.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start gap-3">
                                    <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-xs font-semibold" >
                                            Artisanal Sourcing
                                        </h4>
                                        <p className="text-[11px]" style={{ color: "var(--on-surface-variant)" }}>
                                            Global reach, boutique selection from top-tier makers.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <FaCheckCircle className="w-4 h-4 text-blue-600 mt-0.5" />
                                    <div>
                                        <h4 className="text-xs font-semibold" >
                                            Sustainable Luxury
                                        </h4>
                                        <p className="text-[11px]" style={{ color: "var(--on-surface-variant)" }}>
                                            Ethically produced goods that don't compromise on style.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className="text-xs font-semibold px-6 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black cursor-pointer hover:opacity-90 transition-opacity">
                                Discover The Full Edit
                            </button>
                        </div>
                    </div>
                </section>

                {/* 4. Footer */}
                <Footer />

                <AI_button />
            </div>
        </AnimatePresence>
    );
};

export default Home_page;
