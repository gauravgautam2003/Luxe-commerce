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
        <div
            className="flex min-h-screen items-center justify-center px-4 py-8 theme-transition"
            style={{ backgroundColor: "var(--surface-container-low)" }}
        >

            <div className="w-full max-w-md">
                <div
                    className="absolute left-3 top-3 sm:left-4 sm:top-4 flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-md border px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-sm transition-colors theme-transition"
                    style={{
                        borderColor: "var(--outline-variant)",
                        backgroundColor: "var(--surface-container-lowest)",
                        color: "var(--on-surface-variant)",
                    }}
                    onClick={() => navigate("/")}
                >
                    <FaArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <p className="text-xs sm:text-sm">Back</p>
                </div>

                <form
                    className="mx-2 rounded-lg border p-6 sm:p-8 shadow-lg transition-all theme-transition"
                    style={{
                        borderColor: "var(--outline-variant)",
                        backgroundColor: "var(--surface-container-lowest)",
                        boxShadow: "var(--shadow-2)",
                    }}
                    onSubmit={handleFormSumbit}
                >


                    {state === "signup" ? (
                        <div className="text-center">
                            <h2
                                className="text-lg sm:text-xl font-semibold"
                                style={{
                                    color: "var(--on-surface)",
                                    fontFamily: "'Geist', sans-serif",
                                }}
                            >
                                Create account
                            </h2>
                            <p className="mt-1 text-[11px] sm:text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                Start shopping with a new account.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2
                                className="text-lg sm:text-xl font-semibold"
                                style={{
                                    color: "var(--on-surface)",
                                    fontFamily: "'Geist', sans-serif",
                                }}
                            >
                                Welcome back
                            </h2>
                            <p className="mt-1 text-[11px] sm:text-xs" style={{ color: "var(--on-surface-variant)" }}>
                                Login to continue your shopping.
                            </p>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={handleGoogleAuth}
                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-md border px-4 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer theme-transition"
                        style={{
                            borderColor: "var(--outline-variant)",
                            backgroundColor: "var(--surface-container-lowest)",
                            color: "var(--on-surface)",
                        }}
                    >
                        <FcGoogle className="h-4 w-4 sm:h-5 sm:w-5" />
                        Continue with Google
                    </button>

                    <div className="my-4 flex items-center gap-3">
                        <div className="h-px flex-1" style={{ backgroundColor: "var(--outline-variant)" }}></div>
                        <span
                            className="text-[10px] sm:text-xs font-medium uppercase"
                            style={{ color: "var(--outline)" }}
                        >
                            or
                        </span>
                        <div className="h-px flex-1" style={{ backgroundColor: "var(--outline-variant)" }}></div>
                    </div>


                    <div className="space-y-3 sm:space-y-4">
                        {state === "signup" && (
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="username"
                                    className="text-[11px] sm:text-xs font-medium"
                                    style={{ color: "var(--on-surface-variant)", fontFamily: "'Geist', sans-serif" }}
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    required
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors theme-transition"
                                    style={{
                                        borderColor: "var(--outline-variant)",
                                        backgroundColor: "var(--surface-container-lowest)",
                                        color: "var(--on-surface)",
                                    }}
                                    placeholder="Enter your username"
                                />
                            </div>
                        )}


                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="email"
                                className="text-[11px] sm:text-xs font-medium"
                                style={{ color: "var(--on-surface-variant)", fontFamily: "'Geist', sans-serif" }}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                className="rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors theme-transition"
                                style={{
                                    borderColor: "var(--outline-variant)",
                                    backgroundColor: "var(--surface-container-lowest)",
                                    color: "var(--on-surface)",
                                }}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label
                                htmlFor="password"
                                className="text-[11px] sm:text-xs font-medium"
                                style={{ color: "var(--on-surface-variant)", fontFamily: "'Geist', sans-serif" }}
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                className="rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors theme-transition"
                                style={{
                                    borderColor: "var(--outline-variant)",
                                    backgroundColor: "var(--surface-container-lowest)",
                                    color: "var(--on-surface)",
                                }}
                                placeholder="Enter your password"
                            />
                        </div>
                        {state === "signup" && (
                            <div className="flex flex-col gap-1">
                                <label
                                    htmlFor="confirmPassword"
                                    className="text-[11px] sm:text-xs font-medium"
                                    style={{ color: "var(--on-surface-variant)", fontFamily: "'Geist', sans-serif" }}
                                >
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    required
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="rounded-md border px-3 py-2 text-xs sm:text-sm outline-none transition-colors theme-transition"
                                    style={{
                                        borderColor: "var(--outline-variant)",
                                        backgroundColor: "var(--surface-container-lowest)",
                                        color: "var(--on-surface)",
                                    }}
                                    placeholder="Confirm your password"
                                />
                            </div>
                        )}
                    </div>


                    {state === "signup" ? (
                        <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs" style={{ color: "var(--on-surface-variant)" }}>
                            Already have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setState("login")}
                                className="font-medium hover:underline cursor-pointer"
                                style={{ color: "var(--primary-container)" }}
                            >
                                Login
                            </button>
                        </p>
                    ) : (
                        <p className="mt-3 sm:mt-4 text-center text-[10px] sm:text-xs" style={{ color: "var(--on-surface-variant)" }}>
                            Don't have an account?{" "}
                            <button
                                type="button"
                                onClick={() => setState("signup")}
                                className="font-medium hover:underline cursor-pointer"
                                style={{ color: "var(--primary-container)" }}
                            >
                                Signup
                            </button>
                        </p>
                    )}

                    {error && (
                        <p className="text-[10px] sm:text-xs text-center font-light mt-2" style={{ color: "var(--error)" }}>{error}</p>
                    )}

                    <button
                        type="submit"
                        className="mt-3 sm:mt-4 w-full rounded-md px-4 py-2 text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                        style={{
                            backgroundColor: "var(--primary-container)",
                            color: "var(--on-primary)",
                            fontFamily: "'Geist', sans-serif",
                        }}
                    >
                        {state === "signup" ? "Create account" : "Login"}
                    </button>
                </form>
            </div>

        </div>
    )
}

export default signupPage
