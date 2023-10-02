import React from "react";
import { useState } from "react";
import AddTarea from "./AddTarea";

const Items = ({ name, visto }) => {
  return (
    <li>
      {name}
      {visto ? "✔" : "❌"}
      {/* windows + . para usar iconos*/}
    </li>
  );
};

const ListadoAppMap = () => {
  const [first, setfirst] = useState(lista);

  const addTask = () => {
    setfirst([...first, {name: 'tema nuevo', visto: false}]) //... express operator para copiar el array y agregar el nuevo elemento al final del array 
  }
  let lista = [
    { name: "Proyecto Tienda", visto: true },
    { name: "Portafolio", visto: true },
    { name: "User GitHub", visto: true },
    { name: "Commits", visto: true },
    { name: "React components", visto: false },
    { name: "NodeJs", visto: false },
    { name: "React Native", visto: true },
    { name: "UseState", visto: true },
  ];
  return (
    <>
      <h1>Listado de temas vistos</h1>
      <ol>
        {first.map(item => <Items key={item.name} name={item.name} visto={item.visto}></Items>)}
      </ol>

      <AddTarea />
      <button onClick={() => addTask()}>Add New</button>
    </>
  );
};

export default ListadoAppMap;
