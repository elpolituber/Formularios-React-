import { useState } from "react";

const Controlado = () => {
  const [title,setTitle]=useState('prueba');
  const [descripcion,setDescripcion]=useState('esto es prueba');
  const [state,setState]=useState('pendiente');
  
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
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese descripcion"
        name="descripcion"
        value={descripcion}
        onChange={e=>setDescripcion(e.target.value)}
      />
      <select className="form-select" name="state" value={state} onChange={e=>setState(e.target.value)}>
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
