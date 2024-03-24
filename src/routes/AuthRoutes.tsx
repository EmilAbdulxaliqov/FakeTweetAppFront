import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function AuthRoutes() {
  const [loading, setLoading] = useState(true);

  const [isTrue, setIsTrue] = useState(false);
  
  useEffect(() => {
  
  //   axios
  //     .post("/user/api/token", { token })
  //     .then((res) => {
  //       console.log(res.data);
  //       if (res.data == true) {
  //         setIsTrue(true);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       setIsTrue(false);
  //       setLoading(false);
   //   });
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  if (isTrue) {
    return <Navigate to="/profile/accound" />;
  }
  return <Outlet />;
}

export default AuthRoutes;
