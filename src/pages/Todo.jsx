import { useState } from "react";
import { useTodo } from "@/utils/TodoContext";
import TodoListItem from "@/components/TodoListItem";
import TodoActions from "@/components/TodoActions";

const Todo = () => {
  const { todos } = useTodo();
  const [filter, setFilter] = useState("all");

  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <div className="max-w-3xl mx-auto p-4 flex flex-col items-center gap-3">
      <h1 className="text-2xl select-none">List View</h1>

      <TodoActions setFilter={setFilter} filter={filter} />

      <div className="space-y-3 w-full">
        {filteredTodos.length === 0 ? (
          <p className="text-base-content/60 text-center py-8">
            No tasks found
          </p>
        ) : (
          filteredTodos.map((todo) => (
            <div key={todo._id} className="todo-item">
              <TodoListItem todo={todo} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
