import { Navigate, Outlet } from "react-router";
import { useAuth } from "@/utils/AuthContext";

const AuthRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <section className="bg-white p-4 border-base-300 rounded-lg shadow-sm w-96">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthRoute;
