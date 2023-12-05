
const TodoInput = ({todo,setTodo,addTodo}) => {

    return(
        <div className="input-wrapper">
            <input placeholder="add a task" value={todo} onChange={(e) =>{setTodo(e.target.value)}}/>
        
            <button className="add-button" onClick={addTodo}>Double Tap to Add Task</button>
        </div>
    )

} 

export default TodoInput;