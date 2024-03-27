import React from "react";
import "./todoitem.css";
import deleteBtn from "../../delete.png";

const TodoItem = ({ info, onDelete }) => {
  console.log('info: ', info);
  return (
    <div className="todo">
      <p className="todo_text">{info.text}</p>
      <button className="delete">
        <img src={deleteBtn} onClick={() => onDelete(info.id)} alt="delete" />
      </button>
    </div>
  );
};

export default TodoItem;
