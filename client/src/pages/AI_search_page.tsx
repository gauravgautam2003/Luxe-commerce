import { AnimatePresence, motion } from "framer-motion";
import AIChatSearchbar from "../components/AIChatSearchbar";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";



const AI_search_page = () => {
    const navigate = useNavigate();
    return (
        <>
            <AnimatePresence>
                <main
                    className="flex min-h-[calc(100vh-3rem)] flex-col lg:flex-row"
                    style={{ backgroundColor: "var(--surface)" }}
                >
                    {/* Back Button */}
                    <div
                        className="absolute left-3 top-14 sm:left-4 flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-md border px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm shadow-sm transition-colors z-30 theme-transition"
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



                    {/* Main Search Area */}
                    <div className="flex flex-1 flex-col">
                        <motion.div className=""
                            style={{
                                backgroundColor: "var(--surface-container-low)",
                            }}
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
                        >
                            <div>
                                <AIChatSearchbar />
                            </div>
                        </motion.div>
                    </div>
                </main>
            </AnimatePresence>
        </>
    )
}

export default AI_search_page
