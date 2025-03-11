import { useState } from "react";
import { useTodo } from "@/utils/TodoContext";
import TodoActions from "@/components/TodoActions";

const Board = () => {
  const { todos } = useTodo();
  const [filter, setFilter] = useState("all");

  // const filteredTodos =
  //   filter === "all" ? todos : todos.filter((todo) => todo.status === filter);
  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col items-center gap-3">
      <h1 className="text-2xl select-none">Board View</h1>

      <TodoActions setFilter={setFilter} filter={filter} />
    </div>
  );
};

export default Board;
