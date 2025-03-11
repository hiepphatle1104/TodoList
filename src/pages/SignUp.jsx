import { useState } from "react";
import { useAuth } from "@/utils/AuthContext";
import { Link } from "react-router";

const SignUp = () => {
  const { actions } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.signUp({ username, email, password });
  };
  return (
    <>
      <div className="space-y-1">
        <h1 className="text-xl font-medium">Sign Up Page (Coming Soon)</h1>
        <p className="text-sm text-base-content/60">
          Fill in yours credentials to sign up
        </p>
      </div>

      <div className="divider m-1"></div>

      <form className="form" onSubmit={handleSubmit}>
        {/* Username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        {/* Sign In Button */}
        <button type="submit" className="btn btn-soft w-full">
          Sign Up
        </button>

        {/* Other links*/}
        <div className="text-sm text-base-content/70">
          <p>
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignUp;
