// import React, { useState, Fragment, useEffect } from "react";
// import { LuBadgePlus } from "react-icons/lu";
// import { GiCheckMark } from "react-icons/gi";
// import { FaRegFloppyDisk } from "react-icons/fa6";
// import { FaRegPenToSquare } from "react-icons/fa6";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Adding() {
//   const [addNewValue, setAddNewValue] = useState("");
//   const [editingIndex, setEditingIndex] = useState(-1);
//   const [editedValue, setEditedValue] = useState("");

//   const [todos, setTodos] = useState(() => {
//     const storedTodos = localStorage.getItem("todos");
//     return storedTodos ? JSON.parse(storedTodos) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   const handleTodo = (e) => {
//     e.preventDefault();
//     const newTodo = [
//       {
//         text: addNewValue,
//         completed: false,
//       },
//     ];

//     if (newTodo.text === "") {
//       toast.warn("Todo can not empty");
//     } else {
//       setTodos([...todos, newTodo]);
//       toast.success("Todo added successfully");
//       setAddNewValue("");
//     }
//   };

//   const handleChange = (e) => {
//     const { value } = e.target;
//     setAddNewValue(value);
//   };

//   const handleEdit = (index, goal) => {
//     setEditingIndex(index);
//     setEditedValue(goal);
//   };

//   const handleSave = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index] = editedValue;
//     setTodos(updatedTodos);
//     setEditingIndex(-1);
//     setEditedValue("");
//     toast.success("Todo updated successfully");
//   };

//   const handleDelete = (index) => {
//     const updatedTodos = todos.filter(
//       (_, currentIndex) => currentIndex !== index
//     );
//     setTodos(updatedTodos);
//     toast.error("Todo deleted successfully");
//   };

//   const handleEditedValueChange = (e) => {
//     setEditedValue(e.target.value);
//   };

//   const handleToggleComplete = (index) => {
//     const updatedTodos = [...todos];
//     updatedTodos[index].completed = !updatedTodos[index].completed;
//     setTodos(updatedTodos);
//   };

//   return (
//     <Fragment>
//       <div className="todo-container">
//         <div className="app-container">
//           <div className="task-box">
//             {" "}
//             <GiCheckMark className="icon" />{" "}
//           </div>
//           <h1>To Do List</h1>

//           <form onSubmit={handleTodo}>
//             <input
//               type="text"
//               name="todo"
//               placeholder="Enter Task"
//               value={addNewValue}
//               onChange={handleChange}
//             />
//             <button type="submit" className="add">
//               <LuBadgePlus />
//               <div className="display-on-hover">
//                 <p>Add</p>
//               </div>
//             </button>
//           </form>
//           <ul>
//             {todos.map((todo, index) => (
//               <li key={index}>
//                 <span
//                   onClick={() => handleToggleComplete(index)}
//                   className={`flex-grow ${
//                     todo.completed ? "line-through text-gray-500" : ""
//                   }`}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {todo.text}
//                 </span>
//                 {editingIndex === index ? (
//                   <div className="edit-input">
//                     <input
//                       type="text"
//                       value={editedValue}
//                       onChange={handleEditedValueChange}
//                     />
//                     <input type="checkbox" checked={todo.completed} onChange={()=> handleToggleComplete(index)}/>
//                     <button onClick={() => handleSave(index)} className="save">
//                       <FaRegFloppyDisk />
//                       <div className="display-on-hover">
//                         <p>save</p>
//                       </div>
//                     </button>
//                   </div>
//                 ) : (
//                   <div className="edited-box">
//                     <span>
//                       {/* <p>{todo.text}</p> */}
//                     </span>
//                     <div className="button-box">
//                       <input type="checkbox" checked={todo.completed} onChange={()=> handleToggleComplete(index)} />
//                       <button
//                         onClick={() => handleEdit(index, todo)}
//                         className="edit"
//                       >
//                         <FaRegPenToSquare />
//                         <div className="display-on-hover">
//                           <p>edit</p>
//                         </div>
//                       </button>
//                       <button
//                         onClick={() => handleDelete(index)}
//                         className="delete"
//                       >
//                         <FaRegTrashCan />
//                         <div className="display-on-hover">
//                           <p>delete</p>
//                         </div>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//           <ToastContainer
//             position="top-right"
//             autoClose={3000}
//             hideProgressBar={false}
//             closeOnClick={true}
//             pauseOnHover={true}
//             draggable={true}
//             progress={undefined}
//             theme="light"
//           />
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// export default Adding;

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

  const handleTodo = (e) => {
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

          <form onSubmit={handleTodo}>
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
                  onClick={() => handleToggleComplete(index)}
                  className={`flex-grow ${
                    todo.completed ? "line-through" : ""
                  }`}
                  style={{ cursor: "pointer" }}
                >
                  {todo.text}
                </span>

                {editingIndex === index ? (
                  <div className="edit-input">
                    {/* <span><p>{todo.text}</p></span> */}
                    <input
                      type="text"
                      value={editedValue}
                      onChange={handleEditedValueChange}
                    />
                    <button onClick={() => handleSave(index)} className="save" style={{width: '340px'}}>
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
                      >
                        <FaRegPenToSquare />
                        <div className="display-on-hover">
                          <p>edit</p>
                        </div>
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="delete"
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
