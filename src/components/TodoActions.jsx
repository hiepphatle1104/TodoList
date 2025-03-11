import { currentDate, formatDate } from "@/utils/helper";
import Modal from "@/components/Modal";
import { statusOptions } from "@/utils/utils";
import { useEffect, useRef, useState } from "react";
import { useTodo } from "@/utils/TodoContext";

const newTaskModal = {
  name: "New task",
  className: "btn focus:outline-none! btn-neutral",
};

const TodoActions = ({ setFilter, filter }) => {
  const { actions } = useTodo();
  const dropdownRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoStatus, setNewTodoStatus] = useState("todo");
  const [newTodoDeadline, setNewTodoDeadline] = useState(
    formatDate(new Date())
  );

  const handleNewTask = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    const newTask = {
      title: newTodoTitle,
      status: newTodoStatus,
      deadline: newTodoDeadline || formatDate(new Date()),
    };

    await actions.addTask(newTask);
    setNewTodoTitle("");
    setNewTodoStatus("todo");
    setNewTodoDeadline(formatDate(new Date()));

    // Close modal after adding task
    document.getElementById(`modal-new-task`).close();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target))
        setIsDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="w-full flex items-center justify-between">
      <h1 className="select-none text-lg">Today - {currentDate}</h1>

      <div className="flex gap-2">
        <Modal trigger={newTaskModal} modalId="new-task">
          <section>
            <h1 className="text-xl">New task</h1>
            <p className="text-base-content/60 text-sm">
              Create your task here
            </p>
          </section>

          <div className="divider m-1"></div>

          <form onSubmit={handleNewTask} className="space-y-5">
            <section className="form-group">
              <label htmlFor="title" className="text-sm">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                placeholder="Your task title"
              />
            </section>

            <div className="flex w-full gap-2">
              <section className="form-group w-full">
                <label htmlFor="status" className="text-sm">
                  Status
                </label>
                <select
                  id="status"
                  name="status"
                  value={newTodoStatus}
                  className="select focus:outline-none! w-full"
                  onChange={(e) => setNewTodoStatus(e.target.value)}
                >
                  <option value="todo">Todo</option>
                  <option value="in-progress">In Progress</option>
                  <option value="done">Done</option>
                  <option value="on-hold">On Hold</option>
                </select>
              </section>

              <section className="form-group w-full">
                <label htmlFor="deadline" className="text-sm">
                  Date
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={newTodoDeadline}
                  onChange={(e) => setNewTodoDeadline(e.target.value)}
                  className="outline-none!"
                />
              </section>
            </div>

            <button type="submit" className="btn btn-neutral w-full">
              Add todo
            </button>
          </form>
        </Modal>

        {/* Filter dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="btn btn-soft"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Filter
          </button>

          {isDropdownOpen && (
            <div className="mt-2 absolute bg-base-100 rounded-md border-1 border-base-300 shadow-md z-10 p-2 w-40 top-full right-0">
              {statusOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center gap-2 cursor-pointer hover:bg-base-300 rounded-md py-1 px-2"
                  onClick={() => setFilter(option.value)}
                >
                  <input
                    type="radio"
                    name="filter"
                    value={option.value}
                    checked={filter === option.value}
                    onChange={() => setFilter(option.value)}
                    className="radio radio-xs"
                  />
                  <label htmlFor={option.value} className="cursor-pointer">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoActions;
