import { useState } from "react";

const TodoList = () => {
    const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
    const [currentItem, setCurrentItem] = useState(0);
    return (
        <div>
            {
                todos && todos.length
                ?<ul className="list-group">
                    {todos.map((item, i)=>{
                        return(
                            <li 
                                key={i} 
                                onClick={()=>setCurrentItem(i)}
                                className={`list-group-item ${(i===currentItem?'active':'')}`}
                                role="button"
                            >
                                {item}
                            </li>
                        )
                    })}
                </ul>
                :<div className="alert alert-danger" role="alert">
                    No Todos
                </div>
            }
        </div>
    );
}
 
export default TodoList;