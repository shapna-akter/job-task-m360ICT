import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import NotFound from "../page/NotFound";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../page/Home";
import Sales from "../page/Sales";
import Users from "../page/Users";
import AddUser from "../page/AddUser";
import PrivateRoutes from "./PrivateRoute";
import UpdateUser from "../page/UpdateUser";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard/users",
        element: (
          <PrivateRoutes>
            <Users />
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/add-user",
        element: <AddUser />,
      },
      {
        path: "/dashboard/update-user/:id",
        element: <UpdateUser />,
      },
      {
        path: "/dashboard/sales",
        element: <Sales />,
      },
    ],
  },
]);
export default routes;
