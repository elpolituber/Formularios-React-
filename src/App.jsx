import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Todos from "./components/Todos";

const initialStatesTodos=[]

const App=()=>{  
  
  const [todos,setodos]=useState(initialStatesTodos)
  
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const addtodo=todo=>{
    setodos([...todos,todo])
  }
  
  const deleteTodo=id=>{
    const newArray=todos.filter(todo=>todo.id !== id)
    setodos(newArray)
  }
  
  const updateTodo=id=>{
    const newArray=todos.map(todo=>{
      if(todo.id === id){
        todo.state = !todo.state
      }
      return todo
    })
    setodos(newArray)
  }

  const orderTodo=arrayTodos=>{
    return arrayTodos.sort((req,res)=>{
    if(req.priority===res.priority)return 0
    if (req.priority) return -1
    if (!req.priority) return 1 
  })}
  return (
    <div className="container mb-2">
      <h1  className="my-5">Formularios</h1>
      <Formulario addtodo={addtodo}/>
      <Todos 
        todos={orderTodo(todos)} 
        deleteTodo={deleteTodo} 
        updateTodo={updateTodo}

      />
    </div>
  );
}
export default App;