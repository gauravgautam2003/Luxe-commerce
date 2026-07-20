import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiLock, FiCreditCard, FiArrowLeft } from "react-icons/fi";
import { FaPaypal, FaLeaf } from "react-icons/fa";
import { useCommerce } from "../context/CommerceContext";

const Shopping_bag_page = () => {
    const navigate = useNavigate();
    const [promoCode, setPromoCode] = useState("LUXE10");
    const [paymentMethod, setPaymentMethod] = useState("credit");
    const { cartItems, subtotal, tax, total, updateQuantity, removeFromCart, checkout } = useCommerce();

    const updateQty = (productId: string, option: string | undefined, current: number, type: "inc" | "dec") => {
        const next = type === "inc" ? current + 1 : Math.max(1, current - 1);
        updateQuantity(productId, next, option);
    };

    const handleCheckout = () => {
        const order = checkout();
        if (order) {
            navigate("/orders");
        }
    };

    return (
        <div className="w-full min-h-screen py-4 flex justify-center theme-transition" style={{ backgroundColor: "var(--background)" }}>
            <div className="w-[90%] max-w-7xl">
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center border-2 rounded-md py-2 px-2 border-gray-400 gap-1.5 text-xs font-semibold mb-3 cursor-pointer hover:opacity-85 transition-opacity"
                    
                >
                    <FiArrowLeft className="w-3.5 h-3.5" />
                    Back
                </button>
                <h1 className="text-xl sm:text-2xl font-light tracking-tight mb-1" style={{ color: "var(--primary)"}}>
                    Shopping Bag
                </h1>
                <p className="text-xs mb-8" style={{ color: "var(--on-surface-variant)" }}>
                    Review your selection and proceed to secure payment.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left: Product List & Form */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Table of items */}
                        <div className="overflow-x-auto pb-4">
                            <table className="w-full text-left text-xs min-w-[500px]">
                                <thead>
                                    <tr className="border-b uppercase font-semibold text-[10px] tracking-wider" style={{ borderColor: "var(--outline-variant)", color: "var(--outline)" }}>
                                        <th className="pb-3 w-3/5">Product Description</th>
                                        <th className="pb-3 text-center">Quantity</th>
                                        <th className="pb-3 text-right">Price</th>
                                        <th className="pb-3 text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length === 0 ? (
                                        <tr>
                                            <td className="py-8 text-center" colSpan={4} style={{ color: "var(--on-surface-variant)" }}>
                                                Your shopping bag is empty.
                                            </td>
                                        </tr>
                                    ) : (
                                        cartItems.map((item) => (
                                            <tr key={`${item.product.id}-${item.option ?? ""}`} className="border-b" style={{ borderColor: "var(--outline-variant)" }}>
                                                <td className="py-4 flex gap-4 items-center">
                                                    <img src={item.product.image} alt={item.product.name} className="w-16 h-16 rounded object-cover border" />
                                                    <div>
                                                        <h3 className="font-semibold text-xs" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                                            {item.product.name}
                                                        </h3>
                                                        <p className="text-[10px] mt-0.5" style={{ color: "var(--on-surface-variant)" }}>
                                                            {item.option || item.product.category}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="py-4">
                                                    <div className="flex items-center justify-center gap-2.5 mx-auto w-fit border rounded px-2.5 py-1" style={{ borderColor: "var(--outline-variant)" }}>
                                                        <button onClick={() => updateQty(item.product.id, item.option, item.quantity, "dec")} className="cursor-pointer hover:opacity-75">
                                                            <FiMinus className="w-3 h-3" />
                                                        </button>
                                                        <span className="font-semibold text-xs">{item.quantity}</span>
                                                        <button onClick={() => updateQty(item.product.id, item.option, item.quantity, "inc")} className="cursor-pointer hover:opacity-75">
                                                            <FiPlus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4 text-right font-semibold">
                                                    ${(item.quantity * item.product.price).toFixed(2)}
                                                </td>
                                                <td className="py-4 text-right">
                                                    <button
                                                        onClick={() => removeFromCart(item.product.id, item.option)}
                                                        className="text-[10px] font-semibold text-red-600 hover:underline cursor-pointer"
                                                    >
                                                        Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>

                        {/* Form Section 1: Shipping Address */}
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider flex items-center gap-3" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">1</span>
                                Shipping Address
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase font-bold" style={{ color: "var(--on-surface-variant)" }}>First Name</label>
                                    <input type="text" defaultValue="John" className="px-3 py-2 text-xs border rounded outline-none" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase font-bold" style={{ color: "var(--on-surface-variant)" }}>Last Name</label>
                                    <input type="text" defaultValue="Doe" className="px-3 py-2 text-xs border rounded outline-none" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-[10px] uppercase font-bold" style={{ color: "var(--on-surface-variant)" }}>Address</label>
                                <input type="text" defaultValue="123 Luxury Lane" className="px-3 py-2 text-xs border rounded outline-none" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }} />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase font-bold" style={{ color: "var(--on-surface-variant)" }}>City</label>
                                    <input type="text" defaultValue="New York" className="px-3 py-2 text-xs border rounded outline-none" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-[10px] uppercase font-bold" style={{ color: "var(--on-surface-variant)" }}>Postal Code</label>
                                    <input type="text" defaultValue="10001" className="px-3 py-2 text-xs border rounded outline-none" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }} />
                                </div>
                            </div>
                        </div>

                        {/* Form Section 2: Payment Method */}
                        <div className="space-y-4">
                            <h2 className="text-xs font-bold uppercase tracking-wider flex items-center gap-3" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                                <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px]">2</span>
                                Payment Method
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setPaymentMethod("credit")}
                                    className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-colors cursor-pointer"
                                    style={{
                                        backgroundColor: paymentMethod === "credit" ? "var(--surface-container-low)" : "var(--surface-container-lowest)",
                                        borderColor: paymentMethod === "credit" ? "var(--primary)" : "var(--outline-variant)",
                                        color: "var(--on-surface)",
                                    }}
                                >
                                    <FiCreditCard className="w-4 h-4" />
                                    <span className="text-xs font-semibold">Credit Card</span>
                                </button>
                                <button
                                    onClick={() => setPaymentMethod("paypal")}
                                    className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-colors cursor-pointer"
                                    style={{
                                        backgroundColor: paymentMethod === "paypal" ? "var(--surface-container-low)" : "var(--surface-container-lowest)",
                                        borderColor: paymentMethod === "paypal" ? "var(--primary)" : "var(--outline-variant)",
                                        color: "var(--on-surface)",
                                    }}
                                >
                                    <FaPaypal className="w-4 h-4" />
                                    <span className="text-xs font-semibold">PayPal</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Order Summary box */}
                    <div className="p-6 rounded-2xl border sticky top-16" style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", boxShadow: "var(--shadow-2)" }}>
                        <h3 className="text-xs font-bold uppercase tracking-wider mb-4 text-center" style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}>
                            Order Summary
                        </h3>

                        <div className="space-y-3 text-xs mb-6 pb-6 border-b" style={{ borderColor: "var(--outline-variant)" }}>
                            <div className="flex justify-between">
                                <span style={{ color: "var(--on-surface-variant)" }}>Subtotal</span>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span style={{ color: "var(--on-surface-variant)" }}>Estimated Tax</span>
                                <span className="font-semibold" style={{ color: "var(--on-surface)" }}>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span style={{ color: "var(--on-surface-variant)" }}>Shipping</span>
                                <span className="text-emerald-600 font-semibold">Free</span>
                            </div>
                        </div>

                        {/* Promo Code */}
                        <div className="mb-6">
                            <label className="text-[10px] uppercase font-bold block mb-1.5" style={{ color: "var(--on-surface-variant)" }}>Promo Code</label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className="flex-1 px-3 py-2 text-xs border rounded outline-none uppercase font-semibold"
                                    style={{ borderColor: "var(--outline-variant)", backgroundColor: "var(--surface-container-lowest)", color: "var(--on-surface)" }}
                                />
                                <button className="text-xs font-semibold px-4 py-2 bg-slate-900 hover:opacity-90 dark:bg-white text-white dark:text-black rounded cursor-pointer transition-opacity">
                                    Apply
                                </button>
                            </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-baseline mb-6">
                            <span className="text-sm font-bold" style={{ color: "var(--on-surface)" }}>Total</span>
                            <span className="text-xl font-extrabold text-blue-600">${total.toFixed(2)}</span>
                        </div>

                        <button
                            onClick={handleCheckout}
                            disabled={cartItems.length === 0}
                            className="w-full text-xs font-semibold py-3.5 rounded-xl cursor-pointer hover:opacity-90 transition-opacity mb-4 disabled:cursor-not-allowed disabled:opacity-50"
                            style={{ backgroundColor: "var(--primary)", color: "var(--on-primary)" }}
                        >
                            Proceed to Checkout
                        </button>

                        <div className="flex items-center justify-center gap-2 text-[10px] text-gray-500 mb-6">
                            <FiLock className="w-3.5 h-3.5" />
                            <span>Secure SSL Checkout</span>
                        </div>

                        {/* Carbon Neutral box */}
                        <div className="p-4 rounded-xl flex items-start gap-3 border" style={{ borderColor: "#bbf7d0", backgroundColor: "#f0fdf4" }}>
                            <FaLeaf className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <p className="text-[10px] leading-relaxed text-emerald-800">
                                Your order supports carbon-neutral shipping initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shopping_bag_page;
