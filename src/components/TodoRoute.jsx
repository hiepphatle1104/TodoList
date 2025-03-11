import { Outlet } from "react-router";
import Navbar from "./Navbar";
import TodoProvider from "@/utils/TodoProvider";
import Footer from "./Footer";

const TodoRoute = () => {
  return (
    <TodoProvider>
      <div className="container mx-auto min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 w-full">
          <Outlet />
        </main>

        <Footer />
      </div>
    </TodoProvider>
  );
};

export default TodoRoute;
