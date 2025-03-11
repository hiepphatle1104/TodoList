import { Link } from "react-router";
import { useAuth } from "@/utils/AuthContext";
import { useState } from "react";

const SignIn = () => {
  const { actions } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.signIn({ email, password });
  };

  return (
    <>
      <div className="space-y-1">
        <h1 className="text-xl font-medium">Sign In Page (Coming Soon)</h1>
        <p className="text-sm text-base-content/60">
          Fill in yours credentials to sign in
        </p>
      </div>

      <div className="divider m-1"></div>

      <form className="form" onSubmit={handleSubmit}>
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
          Sign In
        </button>

        {/* Other links*/}
        <div className="text-sm text-base-content/70">
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-primary">
              Sign Up
            </Link>
          </p>

          <p>
            <Link to="/sign-in">Forgot your password?</Link>
          </p>
        </div>
      </form>
    </>
  );
};

export default SignIn;
