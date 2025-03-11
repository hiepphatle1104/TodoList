import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "@/utils/AuthContext";
import { useNavigate } from "react-router";

const API_URL = "http://localhost:5588/api/auth";

const AuthProvider = ({ children }) => {
  // ?: Check loading state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        setIsLoading(true);
        const validated = await fetch(`${API_URL}/validate`, {
          method: "GET",
          credentials: "include",
        });
        const data = await validated.json();

        if (!data.success) return;

        setIsAuthenticated(data.success);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuth();
  }, []);

  const signUp = async (credentials) => {
    try {
      const res = await fetch(`${API_URL}/sign-up`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success("Sign up successful. Please sign in.");
      navigate("/sign-in");
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async (credentials) => {
    try {
      const res = await fetch(`${API_URL}/sign-in`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      setIsAuthenticated(data.success);
      toast.success("Sign in successful");
    } catch (error) {
      console.log(error);
    }
  };

  const signOut = async () => {
    try {
      const res = await fetch(`${API_URL}/sign-out`, {
        method: "GET",
        credentials: "include",
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      setIsAuthenticated(false);
      toast.success("Sign out successful");
    } catch (error) {
      console.log(error);
    }
  };

  const actions = { signUp, signIn, signOut };

  return (
    <AuthContext.Provider value={{ isAuthenticated, actions, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
