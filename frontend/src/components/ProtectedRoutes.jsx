import { Navigate, Outlet } from "react-router-dom";

const useAuth=() => {
    if (localStorage.getItem('getUser') === null) {
      return false;
    } else {
      return true;
    }
  }
  

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;