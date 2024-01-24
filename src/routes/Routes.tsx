import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import NotFound from "../page/NotFound";
import DashboardLayout from "../layout/DashboardLayout";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/sign-up",
          element: <SignUp/>,
        },
        {
          path: "/login",
          element: <Login/>,
        },
        {
          path: "*",
          element: <NotFound/>,
        },
        
      ],
    },
  
    {
      path: "/dashboard",
      element: (
        <DashboardLayout />
      ),
      children: [
       {
        
       }
      ],
    },
  ]);
  export default routes;