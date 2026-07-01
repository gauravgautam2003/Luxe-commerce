import { AnimatePresence, motion } from "framer-motion";
import Searchbar from "../components/Searchbar";



const AI_search_page = () => {

    return (
        <>
            <main>
                <div className="flex min-h-[calc(100vh - 3rem)]  flex-col">

                    <div className="flex flex-col">

                        <motion.div
                            className="flex-none h-[calc(100vh-3.05rem)]  border-slate-300 bg-slate-50 px-3 py-4 sm:px-5 sm:py-7"
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
                        >

                            <div className="flex h-full flex-col items-center justify-center relative gap-4 sm:gap-6">
                                <div className=" mx-auto absolute bottom-8 w-full max-w-5xl">
                                    <Searchbar />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default AI_search_page
