import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";
import toast from "react-hot-toast";

const API_URL = "http://localhost:5588/api/tasks";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_URL}`, {
        method: "GET",
        credentials: "include",
      });

      const data = await response.json();

      if (!data.success) return;

      setTodos(data.tasks);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTask = async (taskData) => {
    try {
      const res = await fetch(`${API_URL}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success(data.message);

      fetchTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      setTodos((prev) => prev.filter((todo) => todo._id !== taskId));

      const res = await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success(data.message);

      fetchTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const editTask = async (taskId, updatedTask) => {
    try {
      const res = await fetch(`${API_URL}/${taskId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
      const data = await res.json();

      if (!data.success) return toast.error(data.message);

      toast.success(data.message);

      fetchTodos();
    } catch (error) {
      console.log(error.message);
    }
  };

  const actions = { addTask, deleteTask, editTask };

  return (
    <TodoContext.Provider value={{ todos, actions, isLoading }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
