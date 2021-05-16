
import '../css/addtodo.css'
import React, {useState} from 'react'

export const Addtodo = (props) => {

    const [title,setTitle] = useState("")
    const [desc,setdesc] = useState("")
    
    const Submit = (e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("Title And Description cannot be blank")
        }
        else{
            props.addtodo(title,desc)
            setTitle("");
            setdesc("");

        }
     
    }

    return (
        <div className="div_forms">
            <form action="" onSubmit={Submit}>
                <input type="text" id="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title"/>
                <input type="text" id="desc" value={desc} onChange={(e)=>{setdesc(e.target.value)}} placeholder="Desc"/>
                <button>Add Todo</button>
            </form>
        </div>
    )
}
