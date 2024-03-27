import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { jwtDecode, JwtPayload } from "jwt-decode";
import Loading from "../pages/Loading";

function PrivateRoutes() {
  const [loading, setLoading] = useState(true);
  const [isTrue, setIsTrue] = useState(false);
  const [decodedToken, setDecodedToken] = useState<JwtPayload | null>(null);

  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   if (decodedToken) {
  //     localStorage.setItem("user", JSON.stringify(decodedToken));
  //   }
  //   if (token) {
  //     const decoded = jwtDecode(token);
  //     setDecodedToken(decoded);
  //     console.log("decoded:", decoded);
  //   }
  // }, [token]);
  // useEffect(() => {
  //   if (decodedToken !== null) {
  //     setIsTrue(true);
  //     setLoading(false);
  //   } else {
  //     setIsTrue(false);
  //     setLoading(true);
  //   }
  // }, [decodedToken]);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      if (decoded) {
        setLoading(false);
        setDecodedToken(decoded);
        setIsTrue(true);
        localStorage.setItem("user", JSON.stringify(decoded));
      }
    } else {
      setDecodedToken(null);
      setLoading(false);
      setIsTrue(false);
    }
  }, [token]);

  if (loading) {
    return <Loading/>;
  }

  if (isTrue) {
    return <Outlet />;
  }

  return <Navigate to="/auth/login" />;
}

export default PrivateRoutes;
