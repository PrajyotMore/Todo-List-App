import AddNewItems from './AddNewItems';
import './App.css';
import {useEffect, useState} from "react"
import TodoList from './TodoList';

function App() {
const [todos,setTodos] = useState([]);

useEffect(()=> {
  localStorage.setItem("Items", JSON.stringify(todos))
},[todos])
const addTodo = (title) => {
  setTodos((currentTodos)=> {
           return [
            ...currentTodos,
            {id: crypto.randomUUID(), title, completed: false}
           ]
        })
}

const toggleTodos = (id,completed) => {
  setTodos((currentTodos) => {
    return currentTodos.map(todo => {
      if(todo.id === id){
        return {...todo,completed}
      }
      return todo;
    })
  })
}

const deleteTodo = (id) => {
  setTodos((currentTodos)=> {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

console.log(todos)
  return (
    <div className="App">
     <AddNewItems onSubmit={addTodo}/>
        <h1 className='header'>Todo List</h1>
     <TodoList todos={todos} toggleTodos={toggleTodos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
