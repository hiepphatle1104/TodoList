import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/utils/AuthContext";
import Loading from "./Loading";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <Loading />;

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
