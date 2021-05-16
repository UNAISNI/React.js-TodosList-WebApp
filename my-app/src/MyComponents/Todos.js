import React from 'react'
import {Todoitems} from './Todoitems'
import '../css/Todos.css'

export const Todos = (props) => {
    return (
        <div>
           <h2 className="h2t">Todos List</h2>
           {props.todos.length==0? "No Todos to Display":
           props.todos.map((todo)=>{
               return <Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           })
           }
           
           
        </div>
    )
}
