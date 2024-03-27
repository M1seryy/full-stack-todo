import React, { useEffect, useState } from "react";
import "./main.css";
import clock from "../../Clock.png";
import Modal from "../../components/modal/Modal";
import TodoItem from "../../components/todo/TodoItem";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector } from "../../redux/selectors/selectors";
import { deleteTodo, getTodo } from "../../redux/reducers/TodoReducer";

const Main = () => {
  const todo = useSelector(todoSelector);
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const onOpenHandler = () => {
    setOpen(true);
  };
  const onCloseHandle = (e) => {
    if (e.keyCode === 27) {
      setOpen(false);
    }
    return;
  };

  const onDeleteHandler = (id) => {
    console.log("id: ", id);
    dispatch(deleteTodo(id));
  };
  document.addEventListener("keydown", onCloseHandle);

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div className="main-wrapper">
      {isOpen ? <Modal flag={setOpen} /> : null}
      <div className="greenBack"></div>
      <div className="content">
        <img src={clock} alt="clock" className="clock" />
        <p className="todo-title">Set up your task lists for tomorrow</p>
        <div className="todo-table">
          {todo !== null
            ? todo.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    info={item}
                    onDelete={onDeleteHandler}
                  />
                );
              })
            : null}
        </div>
        <button onClick={() => onOpenHandler()} className="create">
          Create
        </button>
      </div>
    </div>
  );
};

export default Main;
