import userHooks from "../hooks/user.hooks";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




const Signup_page = () => {
    const { username, email, password, state, setUsername, setEmail, setPassword, setState } = userHooks();

    const navigate = useNavigate();
    const handleFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-60px)] bg-slate-50 px-4 py-8">

            <div className="flex items-center gap-1 absolute top-16 left-4 cursor-pointer border rounded-sm border-gray-300 shadow-2xl shadow-blue-500" onClick={() => navigate("/")}>
                <FaArrowLeft className="w-4 h-4 text-gray-500 cursor-pointer" onClick={() => setState("signup")} />
                <p className="text-sm">back</p>
            </div>

            <form className="border border-gray-300 shadow-lg transition-all w-lg rounded-sm" onSubmit={handleFormSumbit}>


                <div>
                    {state === "login" && (
                        <>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="username" className="text-gray-600 font-semibold text-sm">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="border rounded-sm placeholder-gray-400 placeholder:text-sm hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </>
                    )}


                    <div className="flex flex-col gap-1">
                        <label htmlFor="email" className="text-gray-600 font-semibold text-sm">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-sm placeholder-gray-400 placeholder:text-sm hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password" className="text-gray-600 font-semibold text-sm">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-sm placeholder-gray-400 placeholder:text-sm hover:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                </div>


                {state === "signup" ? (
                    <p className="text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            type="button"
                            onClick={() => setState("login")}
                            className="text-blue-500 hover:underline"
                        >
                            Login
                        </button>
                    </p>
                ) : (
                    <p className="text-sm text-gray-600">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => setState("signup")}
                            className="text-blue-500 hover:underline"
                        >
                            Signup
                        </button>
                    </p>
                )}
            </form>
        </div>
    )
}

export default Signup_page