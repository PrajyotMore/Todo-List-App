const TodoItem = ({toggleTodos,deleteTodo,completed,id, title}) => {
    return (
        <li>
              <label>
               <input type='checkbox' checked={completed} onChange={e => toggleTodos(id,e.target.checked)}/>
               {title} 
              </label>
              <button onClick={()=> deleteTodo(id)}>Delete</button>
             </li> 
    )
}

export default TodoItem;