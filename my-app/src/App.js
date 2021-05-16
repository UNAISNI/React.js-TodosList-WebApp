import logo from './logo.svg';
import './App.css';
import {Header} from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'
import React, {useState,useEffect} from  'react'
import {Addtodo} from './MyComponents/Addtodo'
import {About} from './MyComponents/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
    const onDelete = (todo)=>{
      console.log("Iam delete on this",todo)
      setTodos(todos.filter((e)=>{
        return e!==todo
      }))
      localStorage.setItem("todos",JSON.stringify(todos))
    }
    const [todos,setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
    }, [todos])
  

    const addtodo = (title,desc)=>{
      let sno;
      const MyTodo = {
        sno: sno,
        title: title,
        desc: desc
      
      }
      if(todos.length==0){
       sno = 0;
      }
      else{
        sno = todos[todos.length -1].sno + 1
      }
      setTodos([...todos,MyTodo])

  
      
    }
  return (
    <>
    <Router>
      <Header title="My Todo App" searchbar={false}/>
      <Switch>
          <Route exact path="/" render={()=>{
            return (
          <>  
            <Addtodo addtodo={addtodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>  
            )
      
          }}>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>

      <Footer/>
    </Router> 
      </>
  );
}

export default App;
