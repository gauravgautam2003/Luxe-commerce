import { RiRobot2Line } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoClose, IoSparklesOutline } from "react-icons/io5";
import Searchbar from "../components/Searchbar";
import NewDataComponents from "../components/NewDataComponents";
import useDisclosure from "../hooks/disclosure.hooks";


const AI_search_page = () => {
    const newDataDrawer = useDisclosure();

    return (
        <>
            <main>
                <div className="grid h-[calc(100vh-3rem)] grid-cols-1 overflow-hidden lg:grid-cols-[30%_70%]">
                    <div className="hidden overflow-y-auto border border-gray-300 lg:flex">
                        <NewDataComponents />
                    </div>
                    <div className="flex min-h-0 flex-col">
                        <div className="flex h-14 flex-none border border-gray-300">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex mx-4 items-center gap-2 justify-center">
                                    <div className="w-8 h-8 bg-green-400 flex rounded-full items-center justify-center">
                                        <RiRobot2Line className="text-white font-bold text-xl text-center" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-600">Search Product AI</p>
                                        <p className="text-[10px] text-gray-600"> Online & Ready to help</p>
                                    </div>
                                </div>
                                <div className="mx-4 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={newDataDrawer.open}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-slate-700 shadow-sm transition hover:bg-white lg:hidden"
                                        aria-label="Show new product updates"
                                    >
                                        <IoSparklesOutline className="h-5 w-5" />
                                    </button>
                                    <FaClockRotateLeft className="text-gray-500 font-semibold text-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="min-h-0 flex-1 overflow-y-auto bg-slate-50">
                            <div className="mx-auto max-w-5xl px-5 py-10">
                                <div className="max-w-4xl rounded-2xl bg-slate-200 px-5 py-4 text-sm leading-8 text-slate-950">
                                    Hello! I'm your Apex Shopping Assistant. Search products by name,
                                    category, price, or description and I will surface the best matches.
                                </div>
                            </div>
                        </div>
                        <div className="flex-none border-t border-slate-300 bg-slate-50 px-5 py-7">
                            <div className="mx-auto w-full max-w-5xl">
                                <Searchbar />
                            </div>
                        </div>
                    </div>
                </div>

                {newDataDrawer.isOpen && (
                    <div className="fixed inset-0 z-50 lg:hidden">
                        <button
                            type="button"
                            className="absolute inset-0 bg-slate-950/40"
                            onClick={newDataDrawer.close}
                            aria-label="Close new product updates"
                        />
                        <div className="absolute right-0 top-0 h-full w-[88vw] max-w-sm overflow-y-auto border-l border-slate-300 bg-slate-50 shadow-2xl">
                            <div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-slate-300 bg-slate-50 px-4">
                                <p className="text-sm font-semibold text-slate-950">New for You</p>
                                <button
                                    type="button"
                                    onClick={newDataDrawer.close}
                                    className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-200"
                                    aria-label="Close"
                                >
                                    <IoClose className="h-5 w-5" />
                                </button>
                            </div>
                            <NewDataComponents />
                        </div>
                    </div>
                )}
            </main>
        </>
    )
}

export default AI_search_page
