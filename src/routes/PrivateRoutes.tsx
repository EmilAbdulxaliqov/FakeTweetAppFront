import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function PrivateRoutes() {
    const [loading, setLoading] = useState(true);

    const [isTrue, setIsTrue] = useState(false);


    useEffect(() => {

        // axiosInstance.post("/user/api/token", { token })
        //     .then(res => {
        //         if (res.data == true) {
        //             setTimeout(() => {
        //                 setIsTrue(true);
        //                 setLoading(false)
        //             }, 500)


        //         }
        //     })
        //     .catch(err => {
        //         setIsTrue(false);
        //         setLoading(false)

        //     })
    }, [])

    if (loading) {
        return  <div>Loading</div>
    }

    if (isTrue) {
        return <Outlet />;
    }

    return <Navigate to="/login" />;
}

export default PrivateRoutes;