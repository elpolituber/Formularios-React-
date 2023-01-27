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
  return (
    <form onSubmit={handlerSubmit} >
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
        value={todo.title}
        onChange={e=>setTodo({...todo,title:e.target.value})}
      />
      <textarea
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese descripcion"
        name="descripcion"
        value={todo.descripcion}
        onChange={e=>setTodo({...todo,descripcion:e.target.value})}
      />
      <select className="form-select" name="state" value={todo.state} onChange={e=>setTodo({...todo,state:e.target.value})}>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Agregar
      </button>
    </form>
  );
};
export default Controlado;
