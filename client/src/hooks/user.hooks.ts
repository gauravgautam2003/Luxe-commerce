import { useState } from "react"

const userHooks = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [state, setState] = useState<"signup" | "login">("signup");

    return {
        username,
        email,
        password,
        confirmPassword,
        state,
        setUsername,
        setEmail,
        setPassword,
        setConfirmPassword,
        setState
    };
}

export default userHooks;