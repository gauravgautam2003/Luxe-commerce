import { motion } from "framer-motion";
import { products } from "../data/products";

const updates = [
    {
        label: "Restock alert",
        product: products.find((product) => product.id === "p-25"),
        title: "Aero-Pulse Runners in Crimson",
        description: "The performance trainers you viewed last week are back in size 10.",
    },
    {
        label: "Style match",
        product: products.find((product) => product.id === "p-11"),
        title: "SoundCore Obsidian Pro",
        description: "AI predicts this matches your preference for minimalist tech aesthetics.",
    },
];

const NewDataComponents = () => {
    return (
        <motion.aside
            className="flex h-full w-full flex-col gap-6 px-5 py-6 theme-transition"
            style={{ backgroundColor: "var(--surface-container-low)" }}
            initial="hidden"
            animate="show"
            variants={{
                hidden: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
                },
            }}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 12 },
                    show: { opacity: 1, y: 0 },
                }}
            >
                <h2
                    className="text-base font-bold"
                    style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}
                >
                    New for You
                </h2>
                <p
                    className="mt-3 max-w-xs text-xs leading-5"
                    style={{ color: "var(--on-surface-variant)" }}
                >
                    AI-curated updates based on your recent style evolution.
                </p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {updates.map((item) => {
                    if (!item.product) {
                        return null;
                    }

                    return (
                        <motion.article
                            key={item.label}
                            className="group"
                            variants={{
                                hidden: { opacity: 0, y: 18 },
                                show: { opacity: 1, y: 0 },
                            }}
                            transition={{ type: "spring", stiffness: 360, damping: 32 }}
                        >
                            <motion.img
                                src={item.product.image}
                                alt={item.title}
                                className="aspect-[16/9] w-full rounded-lg object-cover transition group-hover:scale-[1.01]"
                                style={{ boxShadow: "var(--shadow-1)" }}
                                whileHover={{ scale: 1.015 }}
                            />
                            <p
                                className="mt-3 text-[10px] font-bold uppercase tracking-wide"
                                style={{ color: "var(--on-surface-variant)", fontFamily: "'Geist', sans-serif" }}
                            >
                                {item.label}
                            </p>
                            <h3
                                className="mt-1.5 text-xs font-medium"
                                style={{ color: "var(--on-surface)", fontFamily: "'Geist', sans-serif" }}
                            >
                                {item.title}
                            </h3>
                            <p
                                className="mt-1 text-[11px] leading-5"
                                style={{ color: "var(--on-surface-variant)" }}
                            >
                                {item.description}
                            </p>
                        </motion.article>
                    );
                })}
            </div>
        </motion.aside>
    );
};

export default NewDataComponents;
