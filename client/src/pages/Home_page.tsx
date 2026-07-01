import { PiMetaLogoBold } from "react-icons/pi";
import { useNavigate } from "react-router";



const Home_page = () => {
    const navigate = useNavigate();
    return (
        <div className="flex min-h-[calc(100vh-3.05rem)] relative flex-col items-center justify-center gap-4 bg-slate-50 px-3 py-4 sm:px-5 sm:py-7">
            Home page
            <div className="absolute bottom-8 right-8 flex items-center gap-2 rounded-full border border-slate-300 bg-blue-500  px-2 py-2 text-sm font-medium text-slate-800 shadow-xl shadow-blue-900 transition-colors hover:border-slate-400 hover:bg-blue-600 hover:text-slate-100 hover:scale-105" onClick={() => navigate("/ai-search")}>
                <PiMetaLogoBold className="text-white font-bold text-xl"/>
            </div>
        </div>
    )
}

export default Home_page