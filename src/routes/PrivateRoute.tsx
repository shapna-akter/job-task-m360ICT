import { Navigate, useLocation } from "react-router-dom";
import { getFromLocalStorage } from "../utils/local-storage";


const PrivateRoutes = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  const token = getFromLocalStorage("token");

  if (!token) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
