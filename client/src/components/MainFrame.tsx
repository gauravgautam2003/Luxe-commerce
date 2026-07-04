import main from "../assets/main.jpg"


const MainFrame = () => {
    return (
        <>
            <div className="relative h-[calc(100vh-3.05rem)] w-full overflow-hidden bg-gradient-to-l from-gray-800 to-white/90">
                <img src={main} alt="Laptop" className="h-full w-full  opacity-30 " />
                <div className="absolute inset-0 z-10 flex items-start justify-start">
                    <div className="lg:mx-10 mx-6 flex flex-col justify-center  text-white h-[calc(100vh-3.05rem)]">
                        <div className="text-sm bg-blue-600 border px-4 py-3 w-58 rounded-2xl border-blue-300">SUMMER COLLECTION 2026</div>
                        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl text-black">Elevate Your LifeStyle Essence</h1>
                        <p className="mt-2 text-gray-500 w-90 text-xs ">
                            Experience luxury shopping like never before. Explore our exclusive collection of premium products designed to elevate your lifestyle. Exceptional quality, timeless style, and a shopping experience you can trust. 
                        </p>

                        <div className="flex gap-2 mt-10">
                            <button className="text-xs border text-gray-600 border-gray-600 rounded-sm px-4 py-3 hover:bg-gray-200 hover:text-gray-600 shadow-2xl shadow-blue-800 transition-all">Explore Collections</button>
                            <button className="text-xs text-gray-300 border rounded-sm px-4 py-3 bg-blue-600 hover:bg-blue-700 hover:text-white shadow-2xl shadow-gray-800 transition-all">View New Arrivals</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFrame