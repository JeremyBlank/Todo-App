import React, {
  useState,
  useEffect
}
from "react";
import "./App.css";
import Todo from "./Todo";
import db from './firebase';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map((doc) => doc.data().title))
    });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]); // add whatever input to to todos array
    setInput(""); // clear the input field

    db.collection('todos').add({
      title: input,
    })
  };

  return (
    <div className = "App">
      <h1>Todo App</h1>

      <form >
        <input
          value={input}
          onChange = {(e) => setInput(e.target.value)}
          type = "text"/>
          <button type = "submit"onClick = {addTodo} > Add todo </button> 
      </form>

      {todos.map((todo, i) => ( <Todo title={todo}key={i}/>))} 
    </div>
  );
}

export default App;


// git add .
// get status
// git commit -m 'what you did'
// git push
// npm install --save firebase
// npm install -g firebase-tools (frm cmd)
// if access denied add sudo in the beginning
// firebase init
// go to hosting and hit spacebar then enter
// use existing project
// what do you want to use as your public directory? build
// y
// npm run build
// firebase deploy
// npm run deploy