import { useRef,useState } from "react";

const NoControlado = () => {
  
  const form= useRef(null)
  const [error,setError]=useState("")
  const handlerSubmit = (e) => {
    e.preventDefault();
    setError('')
    //capturar los datos
    const data=new FormData(form.current);
    const {title,descripcion,state}=Object.fromEntries([...data.entries()]);
    //validar datos
    if(!title.trim())return setError('llena titulo')
    if(!descripcion.trim())return setError('llena descripcion')
    if(!state.trim())return setError('llena estado')
    //enviar los datos
    console.log(title,descripcion,state);
    
  };
  return (
    <form onSubmit={handlerSubmit} ref={form} >
      <input
        type="text"
        placeholder="Ingrese todo"
        className="form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        type="text"
        placeholder="Ingrese descripcion"
        name="descripcion"
      />
      <select className="form-select" name="state" defaultValue="completado">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button className="btn btn-primary" type="submit">
        Agregar
      </button>
      {error!=='' && error}
    </form>
  );
};
export default NoControlado;
