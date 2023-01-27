import { useState } from "react";

const Controlado = () => {
  const[todo,setTodo]=useState({
    title:'Todo',
    descripcion:'Descripcion 1',
    state:'pendiente'
  })
  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  const handlerChange=e=>{
    setTodo({...todo,
      [e.target.name]:e.target.name
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
      <select className="form-select" name="state" value={todo.state} onChange={handlerChange}>
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
