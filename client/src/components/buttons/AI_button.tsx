import { motion } from "framer-motion";
import { PiMetaLogoBold } from "react-icons/pi";
import { useNavigate } from "react-router";

const AI_button = () => {

    const navigate = useNavigate();
    return (
        <>
            {/* Floating AI Button */}
            <motion.div
                className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center rounded-full px-2.5 py-2.5 sm:px-3 sm:py-3 text-sm font-medium shadow-xl cursor-pointer z-40"
                style={{
                    backgroundColor: "var(--primary-container)",
                    color: "var(--on-primary)",
                    boxShadow: "0 8px 24px rgba(37, 99, 235, 0.35)",
                }}
                onClick={() => navigate("/search")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
                <PiMetaLogoBold className="text-white cursor-pointer font-bold text-lg sm:text-xl" />
            </motion.div>
        </>
    )
}

export default AI_button