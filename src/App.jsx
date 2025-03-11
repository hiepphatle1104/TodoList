import React from "react";
import { Route, Routes } from "react-router";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/utils/AuthProvider";
import ProtectedRoute from "@/components/ProtectedRoute";
import AuthRoute from "@/components/AuthRoute";
import Todo from "@/pages/Todo";
import TodoRoute from "@/components/TodoRoute";
import Board from "@/pages/Board";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<AuthRoute />}>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<TodoRoute />}>
            <Route path="todo" element={<Todo />} />
            <Route path="board" element={<Board />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-center" />
    </AuthProvider>
  );
};

export default App;
