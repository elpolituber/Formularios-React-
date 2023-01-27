import { useState } from "react";

const Controlado = () => {
  const[todo,setTodo]=useState({
    title:'Todo',
    descripcion:'Descripcion 1',
    state:'pendiente',
    priority:false
  })
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerChange=e=>{
  //  setTodo({...todo, priority:e.target.checked})
    setTodo({...todo,
      [e.target.name]:
      e.target.type === "checkbox" 
      ?e.target.checked
      :e.target.name
    })
  }
  return (
    <form onSubmit={handlerSubmit} >
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={handlerChange}
      />
      <textarea
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese descripcion"
        name="descripcion"
        value={todo.descripcion}
        onChange={handlerChange}
      />
      <div className="form-check mb-2">
      <input type="checkbox" 
        name="priority" 
        className="form-check-input" 
        id="input"
        checked={todo.priority}
        onChange={handlerChange}
      />
      <label htmlFor="input">Dar prioridad</label>
      </div>
      <select className="form-select mb-2" name="state" value={todo.state} onChange={handlerChange}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary mb-2" type="submit">
        Agregar
      </button>
    </form>
  );
};
export default Controlado;
