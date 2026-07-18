import { useNavigate } from "react-router-dom";
import Arrivals_button from "./buttons/Arrivals_button";
import Explore_button from "./buttons/Explore_button";
import ImageSlide from "./ImageSlide";



const MainFrame = () => {
    const navigate = useNavigate();

    return (
        <>
            <div
                className="relative h-[calc(100vh-3.05rem)] w-full overflow-hidden"
            >
                <div className="h-full w-full opacity-30 object-cover">
                    <ImageSlide />
                </div>
                <div className="absolute inset-0 z-10 flex items-start justify-start">
                    <div className="lg:mx-10 mx-4 sm:mx-6 flex flex-col justify-center h-[calc(100vh-3.05rem)]">
                        <div
                            className="text-[10px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2.5 w-fit rounded-full font-medium tracking-wide border border-blue-400 bg-blue-500"
                        >
                            SUMMER COLLECTION 2026
                        </div>
                        <h1
                            className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
                        >
                            Elevate Your LifeStyle Essence
                        </h1>
                        <p
                            className="mt-2 sm:mt-3 max-w-xs text-gray-400 sm:max-w-sm text-[11px] sm:text-xs leading-relaxed"
                        >
                            Experience luxury shopping like never before. Explore our exclusive collection of premium products designed to elevate your lifestyle. Exceptional quality, timeless style, and a shopping experience you can trust.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
                            <button onClick={() => navigate("/collection")}
                                className="rounded-md px-2 py-1.5 text-[14px] transition bg-white text-gray-600 font-semibold"
                                style={{
                                    border: "1px solid var(--outline-variant)",
                                }}
                            >
                                Explore Collections
                            </button>
                            <button
                                className="rounded-md px-2 py-1.5 text-[10px] font-medium transition"
                                style={{
                                    backgroundColor: "var(--primary)",
                                    color: "var(--on-primary)",
                                }}
                            >
                                New Arrivals
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFrame