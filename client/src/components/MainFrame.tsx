import main from "../assets/main.jpg"


const MainFrame = () => {
    return (
        <>
            <div
                className="relative h-[calc(100vh-3.05rem)] w-full overflow-hidden"
                style={{
                    background: "linear-gradient(to left, var(--inverse-surface), var(--surface-container-lowest))",
                }}
            >
                <img src={main} alt="Laptop" className="h-full w-full opacity-30 object-cover" />
                <div className="absolute inset-0 z-10 flex items-start justify-start">
                    <div className="lg:mx-10 mx-4 sm:mx-6 flex flex-col justify-center h-[calc(100vh-3.05rem)]">
                        <div
                            className="text-[10px] sm:text-xs px-3 py-2 sm:px-4 sm:py-2.5 w-fit rounded-full font-medium tracking-wide"
                            style={{
                                backgroundColor: "var(--primary-container)",
                                color: "var(--on-primary)",
                                fontFamily: "'Geist', sans-serif",
                            }}
                        >
                            SUMMER COLLECTION 2026
                        </div>
                        <h1
                            className="mt-4 sm:mt-6 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
                            style={{
                                color: "var(--on-surface)",
                                fontFamily: "'Geist', sans-serif",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            Elevate Your LifeStyle{" "}
                            <br className="hidden sm:block" />
                            Essence
                        </h1>
                        <p
                            className="mt-2 sm:mt-3 max-w-xs sm:max-w-sm text-[11px] sm:text-xs leading-relaxed"
                            style={{
                                color: "var(--on-surface-variant)",
                                fontFamily: "'Inter', sans-serif",
                            }}
                        >
                            Experience luxury shopping like never before. Explore our exclusive collection of premium products designed to elevate your lifestyle. Exceptional quality, timeless style, and a shopping experience you can trust.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
                            <button
                                className="text-[11px] sm:text-xs rounded-sm px-4 py-2.5 sm:px-5 sm:py-3 font-medium transition-all duration-200 hover:opacity-90 cursor-pointer"
                                style={{
                                    backgroundColor: "var(--primary-container)",
                                    color: "var(--on-primary)",
                                    fontFamily: "'Geist', sans-serif",
                                    boxShadow: "var(--shadow-2)",
                                }}
                            >
                                Explore Collections
                            </button>
                            <button
                                className="text-[11px] sm:text-xs border rounded-sm px-4 py-2.5 sm:px-5 sm:py-3 font-medium transition-all duration-200 hover:opacity-80 cursor-pointer"
                                style={{
                                    borderColor: "var(--outline)",
                                    color: "var(--on-surface-variant)",
                                    backgroundColor: "var(--surface-container-lowest)",
                                    fontFamily: "'Geist', sans-serif",
                                }}
                            >
                                View New Arrivals
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainFrame