import TodoItem from "./TodoItem";

const TodoList = ({ toggleTodos, deleteTodo, todos}) => {
    return (
        <ul className="list">
            {todos.length === 0 && "No todos"}
         {
          todos.map((item)=> {
            return (
              <TodoItem {...item} key={item.id} toggleTodos={toggleTodos} deleteTodo={deleteTodo}/>
            )
          })
         } 
          </ul>
     
    )
}

export default TodoList;