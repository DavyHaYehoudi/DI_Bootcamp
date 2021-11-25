import React from 'react';


//Function for our Template
const Todos = ({todos, deleteTodo}) => {

  //get from localstorage
  //todos = JSON.parse(localStorage.getItem('todos'));

  console.log(todos);


  //Check if we have some Todos
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;
