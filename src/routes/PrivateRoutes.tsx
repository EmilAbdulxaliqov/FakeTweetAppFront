import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import {jwtDecode, JwtPayload} from "jwt-decode";

function PrivateRoutes() {
    const [loading, setLoading] = useState(true);

    const [isTrue, setIsTrue] = useState(false);
    const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    console.log("decodedToken:", decodedToken);
    if (decodedToken) {
        localStorage.setItem("user", JSON.stringify(decodedToken));
    }
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            setDecodedToken(decoded);
            console.log("decoded:", decoded);
        }
    }, [token])
    useEffect(() => {
        if (decodedToken) {
            setIsTrue(true);
            setLoading(false);
        } else {
            setIsTrue(false);
            setLoading(true);
        }
    }, [decodedToken]);
    if (!token) {
        return <Navigate to="/login" />;

    }
    if (loading) {
        return  <div>Loading</div>
    }

    if (decodedToken) {
        return <Outlet />;
    }

    return <Navigate to="/login" />;
}

export default PrivateRoutes;