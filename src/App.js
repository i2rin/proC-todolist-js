import "./App.css";
import { useState, useRef} from "react";
import TodoList from "./TodoList";
import { v4 as uuid4 } from "uuid"; //uuidを使うことで入力にランダムな文字列が割り当てられ，同じ文字列でも区別できるようになる

const App = () => {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef(); //useRefは要素を取得できる

  const handleAddTodo = () => {
   //タスクを追加する
   const name = todoNameRef.current.value;
   if (name === "") return; //空欄の場合は追加しない
   setTodos((prevTodos) => {
    return [...prevTodos, {id: uuid4(), name: name, completed: false}]; //要素を追加

  });
  todoNameRef.current.value = null; //タスクを追加したら空欄にする
};

  const toggleTodo = (id) => { //idは引数
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id); //idが一致するものを探す
    todo.completed = !todo.completed; //trueとfalseを切り替える
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed); //完了したタスクを削除
    setTodos(newTodos);
  }

  return (
    <div>
      <Todolist todos = {todos} toggleTodo={toggleTodo} /> 
      <input type = "text" ref={todoNameRef}/>
      <button onClick = {handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
   </div>
  );
}

export default App;
