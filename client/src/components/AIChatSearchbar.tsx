import { FiMic, FiSend, FiTrash2 } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import type { Product } from "../data/products";



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

type ChatMessage = {
    id: string;
    role: "user" | "assistant";
    text: string;
    products?: Product[];
};

const CHAT_STORAGE_KEY = "luxe-ai-search-chat";

const welcomeMessage: ChatMessage = {
    id: "welcome",
    role: "assistant",
    text: "Hi' There Welcome to AI search"
};

const findProducts = (searchQuery: string) => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
        return [];
    }

    return products
        .filter((product) => {
            const searchableText = [
                product.name,
                product.category,
                product.description,
                product.price.toString(),
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(normalizedQuery);
        })
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 4);
};

const createAssistantReply = (searchQuery: string, matchedProducts: Product[]) => {
    if (matchedProducts.length === 0) {
        return `I could not find an exact product match for "${searchQuery}". Try a category like laptop, shoes, fashion, headphones, or smartwatch.`;
    }

    const topProduct = matchedProducts[0];
    const moreCount = matchedProducts.length - 1;

    return moreCount > 0
        ? `I found ${matchedProducts.length} good matches. Best pick: ${topProduct.name} at $${topProduct.price.toFixed(2)} with a ${topProduct.rating} rating.`
        : `I found one strong match: ${topProduct.name} at $${topProduct.price.toFixed(2)} with a ${topProduct.rating} rating.`;
};

const createMessageId = () => `${Date.now()}-${Math.random().toString(36).slice(2)}`;

const AIChatSearchbar = () => {

    const [query, setQuery] = useState("");
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        const savedMessages = localStorage.getItem(CHAT_STORAGE_KEY);

        if (!savedMessages) {
            return [welcomeMessage];
        }

        try {
            const parsedMessages = JSON.parse(savedMessages) as ChatMessage[];
            return parsedMessages.length > 0 ? parsedMessages : [welcomeMessage];
        } catch {
            return [welcomeMessage];
        }
    });


    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const hasUserMessages = useMemo(() => messages.some((message) => message.role === "user"), [messages]);

    const submitChat = (searchQuery: string) => {
        const nextQuery = searchQuery.trim();

        if (!nextQuery) {
            return;
        }

        const matchedProducts = findProducts(nextQuery);
        const nextMessages: ChatMessage[] = [
            ...messages,
            {
                id: createMessageId(),
                role: "user",
                text: nextQuery,
            },
            {
                id: createMessageId(),
                role: "assistant",
                text: createAssistantReply(nextQuery, matchedProducts),
                products: matchedProducts,
            },
        ];

        setSearchParams({ q: nextQuery });
        setMessages(nextMessages);
        setQuery("");
    };

    useEffect(() => {
        localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
    }, [messages]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        // scroll to bottom when messages update (smooth for UX)
        const scrollToBottom = () => el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });

        // run on next tick to ensure layout is updated
        const id = window.setTimeout(scrollToBottom, 30);
        return () => window.clearTimeout(id);
    }, [messages]);

    useEffect(() => {
        const urlQuery = searchParams.get("q");

        if (urlQuery && !hasUserMessages) {
            submitChat(urlQuery);
        }
    }, []);

    const clearChat = () => {
        setMessages([welcomeMessage]);
        setSearchParams({});
    };

    return (
        <AnimatePresence>
            <div className="grid lg:grid-cols-[30%_70%]  grid-cols-1  relative h-[calc(100vh-3.05rem)] w-full">
                <div className="border-r h-full  border-gray-400 lg:flex hidden flex-col items-center ">
                    <div className="w-full h-full relative">

                        <div className="w-full h-12 flex gap-2 text-gray-600 my-2 items-start justify-end">
                            <h2 className="text-center my-1">History</h2>
                            <button
                                type="button"
                                onClick={clearChat}
                                className="flex h-8 w-8 mx-2 flex-none items-center justify-center rounded-lg border transition-colors cursor-pointer"
                                style={{
                                    borderColor: "var(--outline-variant)",
                                    backgroundColor: "var(--surface-container-lowest)",
                                    color: "var(--on-surface-variant)",
                                }}
                                aria-label="Clear chat"
                                title="Clear chat"
                            >
                                <FiTrash2 className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="border-b border-gray-400 w-full" />
                        <span>{query}</span>

                        <div className="absolute bottom-8 flex items-center justify-center w-full">
                            <motion.form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    submitChat(query);
                                }}
                                className="flex min-h-12 sm:min-h-14 w-[350px] mx-4 items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border px-3 py-2 sm:px-4 transition-colors theme-transition"
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
                                    onChange={(event) => setQuery(event.target.value)}
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
                        </div>
                    </div>
                </div>


                <div className="h-[calc(100vh-3.05)] overflow-y-scroll flex flex-col">

                    <div className="hidden lg:block">
                        <AnimatePresence initial={false}>
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    className={`mb-4 mx-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                >
                                    <div className={`${message.role === "user" ? "text-right" : "text-left"}`}>
                                        <div
                                            className="rounded-lg  px-4 text-gray-300 font-semibold py-1 text-xs leading-relaxed sm:text-xs"
                                            style={{
                                                
                                                color: message.role === "user" ? "var(--on-surface)" : "var(--on-surface)",
                                                fontFamily: "'Inter', sans-serif",
                                            }}
                                        >
                                            {message.text}
                                        </div>

                                        {message.products && message.products.length > 0 && (
                                            <motion.div
                                                className="mt-2 grid gap-2"
                                                variants={containerMotion}
                                                initial="hidden"
                                                animate="show"
                                            >
                                                {message.products.map((product) => (
                                                    <motion.button
                                                        key={product.id}
                                                        type="button"
                                                        variants={itemMotion}
                                                        whileHover={{ y: -2 }}
                                                        whileTap={{ scale: 0.98 }}
                                                        onClick={() => navigate(`/product/${product.id}`)}
                                                        className="flex min-w-0 items-center gap-2.5 rounded-xl border p-2 text-left transition-colors cursor-pointer"
                                                        style={{
                                                            borderColor: "var(--outline-variant)",
                                                            backgroundColor: "var(--surface-container-lowest)",
                                                        }}
                                                    >
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-20 w-20 flex-none rounded-lg object-cover sm:h-20 sm:w-20"
                                                        />
                                                        <span className="min-w-0">
                                                            <span
                                                                className="block truncate text-xs font-semibold sm:text-sm"
                                                                style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}
                                                            >
                                                                {product.name}
                                                            </span>
                                                            <span
                                                                className="block text-[10px] sm:text-xs"
                                                                style={{ color: "var(--on-surface-variant)" }}
                                                            >
                                                                {product.category} | ${product.price.toFixed(2)} | Rating {product.rating}
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
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="w-full lg:hidden h-full relative">

                        <div className="w-full h-12 flex gap-2 text-gray-600 my-2 items-start justify-end">
                            <h2 className="text-center my-1">History</h2>
                            <button
                                type="button"
                                onClick={clearChat}
                                className="flex h-8 w-8 mx-2 flex-none items-center justify-center rounded-lg border transition-colors cursor-pointer"
                                style={{
                                    borderColor: "var(--outline-variant)",
                                    backgroundColor: "var(--surface-container-lowest)",
                                    color: "var(--on-surface-variant)",
                                }}
                                aria-label="Clear chat"
                                title="Clear chat"
                            >
                                <FiTrash2 className="h-4 w-4" />
                            </button>
                        </div>

                        <div className="border-b border-gray-400 w-full" />
                        <span>{query}</span>

                        <div className="h-[70vh] overflow-y-scroll mb-4 flex flex-col">
                            <div className="lg:hidden block">
                                <AnimatePresence initial={false}>
                                    {messages.map((message) => (
                                        <motion.div
                                            key={message.id}
                                            className={`mb-4 mx-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                            initial={{ opacity: 0, y: 12 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.22, ease: "easeOut" }}
                                        >
                                            <div className={`${message.role === "user" ? "text-right" : "text-left"}`}>
                                                <div
                                                    className="rounded-xl px-3.5 py-2.5 text-xs leading-relaxed sm:text-xs"
                                                    style={{
                                                        backgroundColor: message.role === "user" ? "var(--primary)" : "var(--surface-container-low)",
                                                        color: message.role === "user" ? "var(--on-primary)" : "var(--on-surface)",
                                                        fontFamily: "'Inter', sans-serif",
                                                    }}
                                                >
                                                    {message.text}
                                                </div>

                                                {message.products && message.products.length > 0 && (
                                                    <motion.div
                                                        className="mt-2 grid gap-2"
                                                        variants={containerMotion}
                                                        initial="hidden"
                                                        animate="show"
                                                    >
                                                        {message.products.map((product) => (
                                                            <motion.button
                                                                key={product.id}
                                                                type="button"
                                                                variants={itemMotion}
                                                                whileHover={{ y: -2 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                onClick={() => navigate(`/product/${product.id}`)}
                                                                className="flex min-w-0 items-center gap-2.5 rounded-xl border p-2 text-left transition-colors cursor-pointer"
                                                                style={{
                                                                    borderColor: "var(--outline-variant)",
                                                                    backgroundColor: "var(--surface-container-lowest)",
                                                                }}
                                                            >
                                                                <img
                                                                    src={product.image}
                                                                    alt={product.name}
                                                                    className="h-12 w-12 flex-none rounded-lg object-cover sm:h-14 sm:w-14"
                                                                />
                                                                <span className="min-w-0">
                                                                    <span
                                                                        className="block truncate text-xs font-semibold sm:text-sm"
                                                                        style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}
                                                                    >
                                                                        {product.name}
                                                                    </span>
                                                                    <span
                                                                        className="block text-[10px] sm:text-xs"
                                                                        style={{ color: "var(--on-surface-variant)" }}
                                                                    >
                                                                        {product.category} | ${product.price.toFixed(2)} | Rating {product.rating}
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
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </div>



                        <div className="absolute bottom-6 flex items-center justify-center w-full">
                            <motion.form
                                onSubmit={(event) => {
                                    event.preventDefault();
                                    submitChat(query);
                                }}
                                className="flex min-h-12 sm:min-h-14 w-[600px] mx-4 items-center gap-1.5 sm:gap-2 rounded-xl sm:rounded-2xl border px-3 py-2 sm:px-4 transition-colors theme-transition"
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
                                    onChange={(event) => setQuery(event.target.value)}
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
                        </div>
                    </div>
                </div>

            </div>
        </AnimatePresence>
    )
}

export default AIChatSearchbar