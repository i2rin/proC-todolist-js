import React from "react";
import Todo from "./Todo";

const TodoList= ({ todos, toggleTodo}) => { //{}でpropsを指定している
  return todos.map((todo) => (
  <Todo key={todo.id} todo={todo} toggleTodo ={toggleTodo} />
  )); //map関数はtodo配列から一つ一つ取り出す用
};

export default TodoList;