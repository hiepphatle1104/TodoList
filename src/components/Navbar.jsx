import { Link } from "react-router";
import { useAuth } from "@/utils/AuthContext";

const Navbar = () => {
  const { isAuthenticated, actions } = useAuth();

  return (
    <nav className="px-6 py-3 border-1 border-gray-200 rounded-b-lg">
      <div className="flex justify-between items-center">
        <Link to={"/"} className="text-xl font-medium text-base-content">
          TodoApp
        </Link>
        <div className="space-x-2">
          {!isAuthenticated ? (
            <>
              <Link to="/sign-in" className="btn btn-soft">
                Sign In
              </Link>
              <Link to="/sign-up" className="btn btn-neutral">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              <Link to={"/board"} className="btn btn-primary btn-soft">
                Board
              </Link>
              <Link to={"/todo"} className="btn btn-secondary btn-soft">
                Todo
              </Link>
              <button onClick={actions.signOut} className="btn btn-soft">
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
