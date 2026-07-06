import { useState } from "react";
import userHooks from "../hooks/user.hooks";
import { FaArrowLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";




const signupPage = () => {
    const { username, email, password, confirmPassword, state, setUsername, setEmail, setPassword, setConfirmPassword, setState } = userHooks();

    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(password.length < 8) {
            setError("Password must be atleast 8 characters");
            return;
        }

        if(password != confirmPassword) {
            setError("Password and confirmPassword must same");
            return;
        }
        if(!/[()@#$%^&*,.'']/.test(password) && !/[A-Z]/.test(password)) {
            setError("Password must with special and capital characters");
            return;
        }

        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        alert("form submitted successfuly!");
    }

    const handleGoogleAuth = () => {
        console.log("Continue with Google");
    }

    return (
        <div className="flex min-h-[calc(100vh-60px)] items-center justify-center bg-slate-50 px-4">

            <div className="my-2 w-full max-w-md">
                <div className="absolute left-4 top-4 flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2 text-gray-600 shadow-sm transition-colors hover:border-blue-400 hover:text-blue-600" onClick={() => navigate("/")}>
                    <FaArrowLeft className="h-3.5 w-3.5" />
                    <p className="text-sm">Back</p>
                </div>

                <form className="m-2 rounded-lg border border-gray-200 bg-white p-8 shadow-xl shadow-slate-200/70 transition-all sm:py-4" onSubmit={handleFormSumbit}>


                    {state === "signup" ? (
                        <div className="text-center">
                            <h2 className="text-xl font-medium text-gray-800">Create account</h2>
                            <p className="mt-1 text-xs text-gray-600">Start shopping with a new account.</p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-xl font-medium text-gray-800">Welcome back</h2>
                            <p className="mt-1 text-xs text-gray-500">Login to continue your shopping.</p>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={handleGoogleAuth}
                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <FcGoogle className="h-5 w-5" />
                        Continue with Google
                    </button>

                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200"></div>
                        <span className="text-xs font-medium uppercase text-gray-400">or</span>
                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>


                    <div className="space-y-4">
                        {state === "signup" && (
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="username" className="text-sm text-gray-700">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    placeholder="Enter your username"
                                />
                            </div>
                        )}


                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                placeholder="Enter your password"
                            />
                        </div>
                        {state === "signup" && (
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">Confirm password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    required
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-colors hover:border-blue-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                                    placeholder="Confirm your password"
                                />
                            </div>
                        )}
                    </div>


                    {state === "signup" ? (
                        <p className="mt-4 text-center text-xs text-gray-600">
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setState("login")}
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    ) : (
                        <p className="mt-4 text-center text-xs text-gray-600">
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setState("signup")}
                                className="font-medium text-blue-600 hover:underline"
                            >
                                Signup
                            </button>
                        </p>
                    )}

                    {error && (
                        <p className="text-xs text-center font-light text-red-500">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {state === "signup" ? "Create account" : "Login"}
                    </button>
                </form>
            </div>

        </div>
    )
}

export default signupPage
