import { PiMetaLogoBold } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import MainFrame from "../components/MainFrame";
import { useNavigate } from "react-router-dom";




const Home_page = () => {

    const navigate = useNavigate();

    return (
        <AnimatePresence>
            <div className="relative flex h-[calc(100vh-3.05rem)] w-full flex-col items-center justify-center overflow-hidden">
                <div className="h-[calc(100vh-3.05rem)] w-full">
                    <MainFrame />
                </div>
                <div className="absolute  bottom-8 right-8 flex items-center rounded-full border border-slate-300 bg-blue-500  px-2 py-2 text-sm font-medium text-slate-800 shadow-xl shadow-blue-900 transition-colors hover:border-slate-400 hover:bg-blue-600 hover:text-slate-100 hover:scale-105"
                    onClick={() => navigate("/search")}
                >
                    <PiMetaLogoBold className="text-white cursor-pointer font-bold text-xl" />
                </div>
            </div>
        </AnimatePresence>
    )
}

export default Home_page