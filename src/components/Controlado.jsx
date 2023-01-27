import { useState } from "react";

const Controlado = () => {
  const[todo,setTodo]=useState({
    title:'Todo',
    descripcion:'Descripcion 1',
    state:'pendiente',
    priority:false
  })
  const{title,descripcion,state,priority}=todo
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(title,descripcion,state,priority)
  };

  const handlerChange=e=>{
    const {name,type,checked,value} = e.target;
    setTodo({...todo,
      [name]:type === "checkbox" ? checked : value
    })
  }
  return (
    <form onSubmit={handlerSubmit} >
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handlerChange}
      />
      <textarea
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese descripcion"
        name="descripcion"
        value={descripcion}
        onChange={handlerChange}
      />
      <div className="form-check mb-2">
      <input type="checkbox" 
        name="priority" 
        className="form-check-input" 
        id="input"
        checked={priority}
        onChange={handlerChange}
      />
      <label htmlFor="input">Dar prioridad</label>
      </div>
      <select className="form-select mb-2" name="state" value={state} onChange={handlerChange}>
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
