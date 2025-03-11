import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="flex-grow flex justify-center items-center nh-">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-medium text-base-content mb-6">
          Focus on what matters
        </h1>
        <p className="text-lg text-base-content/70 mb-8">
          A simple todo list app to help you stay organized and productive.
        </p>
        <div className="flex space-x-4">
          <Link to="/todo" className="btn btn-neutral">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
