import { statusOptions } from "@/utils/utils";
import Modal from "@/components/Modal";
import { Settings2, Trash } from "lucide-react";
import { useTodo } from "@/utils/TodoContext";
import { useState } from "react";
import { formatDate } from "@/utils/helper";

const TodoListItem = ({ todo }) => {
  const { actions } = useTodo();
  const [editTodoTitle, setEditTodoTitle] = useState(todo.title);
  const [editTodoStatus, setEditTodoStatus] = useState(todo.status);
  const [editTodoDeadline, setEditTodoDeadline] = useState(
    formatDate(new Date(todo.deadline))
  );

  const handleEditTask = async (e, todo) => {
    e.preventDefault();

    if (!editTodoTitle.trim()) return;

    const updatedTask = {
      title: editTodoTitle,
      status: editTodoStatus,
      deadline: editTodoDeadline,
    };

    await actions.editTask(todo._id, updatedTask);

    setEditTodoTitle(updatedTask.title);
    setEditTodoStatus(updatedTask.status);
    setEditTodoDeadline(formatDate(new Date(updatedTask.deadline)));

    // Close modal after editing task
    document.getElementById(`modal-edit-${todo._id}`).close();
  };

  return (
    <>
      <section className="flex items-center gap-3">
        <p className="todo-item-status">
          {statusOptions.find((opt) => opt.value === todo.status)?.label}
        </p>
        <h1 className="truncate max-w-xl">{todo.title}</h1>
      </section>
      <div className="flex gap-2 items-center">
        <Modal
          trigger={{
            className: "todo-actions",
          }}
          modalId={`edit-${todo._id}`}
          icons={
            <div className="lg:tooltip" data-tip="edit">
              <Settings2 size={18} />
            </div>
          }
        >
          <div>
            <section>
              <h1 className="text-xl">Edit Task</h1>
              <p className="text-base-content/60 text-sm">
                Edit your task here
              </p>
            </section>

            <div className="divider m-1"></div>

            <form
              className="space-y-5"
              onSubmit={(e) => handleEditTask(e, todo)}
            >
              {/* Title */}
              <section className="form-group">
                <label htmlFor="title" className="text-sm">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={editTodoTitle}
                  onChange={(e) => setEditTodoTitle(e.target.value)}
                />
              </section>

              <div className="flex w-full gap-2">
                {/* Status */}
                <section className="form-group w-full">
                  <label htmlFor="status" className="text-sm">
                    Status
                  </label>
                  <select
                    id="status"
                    name="status"
                    value={editTodoStatus}
                    onChange={(e) => setEditTodoStatus(e.target.value)}
                    className="select focus:outline-none! w-full"
                  >
                    <option value="todo">Todo</option>
                    <option value="in-progress">In Progress</option>
                    <option value="done">Done</option>
                    <option value="on-hold">On Hold</option>
                  </select>
                </section>

                {/* Deadline */}
                <section className="form-group w-full">
                  <label htmlFor="deadline" className="text-sm">
                    Date
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={editTodoDeadline}
                    onChange={(e) => setEditTodoDeadline(e.target.value)}
                    className="outline-none!"
                  />
                </section>
              </div>

              <button type="submit" className="btn btn-neutral w-full">
                Save
              </button>
            </form>
          </div>
        </Modal>

        <div className="lg:tooltip" data-tip="edit">
          <button
            className="todo-actions"
            onClick={() => actions.deleteTask(todo._id)}
          >
            <Trash size={18} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
