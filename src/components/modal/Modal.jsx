import React, { useState } from "react";
import "./modal.css";
import { useDispatch } from "react-redux";
import { addToodo, getTodo } from "../../redux/reducers/TodoReducer";

const Modal = ({ flag }) => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const inputHandle = (event) => {
    setTodo(event.target.value);
  };

  const onAddTodo = async () => {
    const body = {
      is_complete: false,
      text: todo,
    };
    dispatch(addToodo(body));
    flag(false);
  };

  return (
    <div className="overlay">
      <div className="modalWrapper">
        <input
          onChange={inputHandle}
          value={todo}
          className="todoInput"
          type="text"
          placeholder="Enter your todo"
        />
        <button onClick={onAddTodo}>Add todo</button>
      </div>
    </div>
  );
};

export default Modal;
