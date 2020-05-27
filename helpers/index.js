import { useAuth } from "../context/auth";

export function getUserName() {
    return localStorage.getItem("user_name");
}

export function logOut() {
    const { setAuthTokens } = useAuth();
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    setAuthTokens();
}