import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { jwtDecode } from "jwt-decode";
import Loading from "../pages/Loading";

function PrivateRoutes() {
  const [loading, setLoading] = useState(true);
  const [isTrue, setIsTrue] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        setLoading(false);

        setIsTrue(true);
        localStorage.setItem("user", JSON.stringify(decoded));
      }
    } else {
      setLoading(false);
      setIsTrue(false);
    }
  }, [token]);

  if (loading) {
    return <Loading />;
  }

  if (isTrue) {
    return <Outlet />;
  }

  return <Navigate to="/auth/login" />;
}

export default PrivateRoutes;
