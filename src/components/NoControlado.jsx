const NoControlado = () => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log("de");
  };
  return (
    <form onSubmit={handlerSubmit}>
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
