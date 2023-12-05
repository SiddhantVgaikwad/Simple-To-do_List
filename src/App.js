import React, { useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import LiveDateTime from './liveTime';

function App() {

  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

/*
  const addTodo =() => {
    if(todo !== ""){
      setTodos([...todos,todo])
      setTodo("");
    } 
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;

    });
     setTodos(newTodos)
  }
  */
  const addTodo = () => {
    if (todo !== '') {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      setTodo('');
    }
  }

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }


  
 
  return (
    <>
    <div className="App">
      <h1>TO-DO</h1>
      
      <LiveDateTime/>
      <h2>Add your today's tasks</h2>
      <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList list={todos} remove={deleteTodo}/>
    </div>

    </> 
    
  );
} 


export default App;