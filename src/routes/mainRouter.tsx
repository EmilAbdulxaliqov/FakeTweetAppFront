import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import { createBrowserRouter } from "react-router-dom";

function mainRouter() {
  let element = createBrowserRouter([
    {
      path: "/",
      children: [
        { index: true, element: <HomePage /> },
        { path: "user", element: <h1>User dfksjflkdjskf</h1> },
      ],

      // children: [
      //   {
      //     path: "messages",
      //     element: <DashboardMessages />,
      //   },
      //   { path: "tasks", element: <DashboardTasks /> },
      // ],
    },
    {
      path: "/auth",
      children: [
        { index: true, element: <LoginPage /> },
        { path: "login", element: <LoginPage /> },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);
  return element;
}

export default mainRouter;
