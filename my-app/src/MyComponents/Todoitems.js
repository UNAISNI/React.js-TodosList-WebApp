import React from 'react'
import '../css/Todoitem.css'

export const Todoitems = ({todo,onDelete}) => {
    return (
        <div className="items">
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
            <button onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
