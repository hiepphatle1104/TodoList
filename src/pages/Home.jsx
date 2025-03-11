import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/utils/AuthContext";
import Loading from "@/components/Loading";

const Home = () => {
  const { isLoading } = useAuth();

  if (isLoading) return <Loading />;

  return (
    <div className="container mx-auto min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
