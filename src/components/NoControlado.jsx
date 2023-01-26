import { useRef } from "react";

const NoControlado = () => {

  const form= useRef(null)

  const handlerSubmit = (e) => {
    e.preventDefault();
    const data=new FormData(form.current);
    //console.log(...data.entries())
    const {title,descripcion,state}=Object.fromEntries([...data.entries()]);
    console.log(title)
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
    </form>
  );
};
export default NoControlado;
