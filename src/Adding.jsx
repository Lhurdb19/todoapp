import React, { useState, Fragment, useEffect } from "react";
import { LuBadgePlus } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { FaRegFloppyDisk } from "react-icons/fa6";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Adding() {
  const [addNewValue, setAddNewValue] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedValue, setEditedValue] = useState("");

  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: addNewValue,
      completed: false,
    };
    if (newTodo.text === "") {
      toast.warn("Todo cannot be empty");
    } else {
      setTodos([...todos, newTodo]);
      toast.success("Todo added successfully");
      setAddNewValue("");
    }
  };

  const handleChange = (e) => {
    setAddNewValue(e.target.value);
  };

  const handleEdit = (index, goal) => {
    setEditingIndex(index);
    setEditedValue(goal.text);
  };

  const handleSave = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editedValue;
    setTodos(updatedTodos);
    setEditingIndex(-1);
    setEditedValue("");
    toast.success("Todo updated successfully");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter(
      (_, currentIndex) => currentIndex !== index
    );
    setTodos(updatedTodos);
    toast.error("Todo deleted successfully");
  };

  const handleEditedValueChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <Fragment>
      <div className="todo-container">
        <div className="app-container">
          <div className="task-box">
            <GiCheckMark className="icon" />
          </div>
          <h1>To Do List</h1>

          <form onSubmit={handleTodoSubmit}>
            <input
              type="text"
              name="todo"
              placeholder="Enter Task"
              value={addNewValue}
              onChange={handleChange}
            />
            <button type="submit" className="add">
              <LuBadgePlus />
              <div className="display-on-hover">
                <p>Add</p>
              </div>
            </button>
          </form>

          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <span
                  className={`flex-grow ${todo.completed ? "line-through" : ""}`}
                >
                  {todo.text}
                </span>

                {editingIndex === index ? (
                  <div className="edit-input">
                    <input
                      type="text"
                      value={editedValue}
                      onChange={handleEditedValueChange}
                    />
                    <button onClick={() => handleSave(index)} className="save" style={{ width: "340px" }}>
                      <FaRegFloppyDisk />
                      <div className="display-on-hover">
                        <p>save</p>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="edited-box">
                    <div className="button-box">
                      <div className="check">
                        <input
                          type="checkbox"
                          style={{ cursor: "pointer" }}
                          checked={todo.completed}
                          onChange={() => handleToggleComplete(index)}
                        />
                        <div className="display-on-hover">
                          <p>done</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleEdit(index, todo)}
                        className="edit"
                        disabled={todo.completed}
                      >
                        <FaRegPenToSquare />
                        <div className="display-on-hover">
                          <p>edit</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="delete"
                        disabled={todo.completed}
                      >
                        <FaRegTrashCan />
                        <div className="display-on-hover">
                          <p>delete</p>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            progress={undefined}
            theme="light"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Adding;
