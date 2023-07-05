import React from "react";

const Todos = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id} className="collection-item">
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center"> You have no todo's left, yay1</p>
  );
  return <div className="todos collection">
    {todoList}
  </div>;
};

export default Todos;
