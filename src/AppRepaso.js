import React, { useState, useEffect } from "react";
import { Title } from "./components";
import axios from "axios";
const URL = `https://rickandmortyapi.com/api/character`;
function App() {
  //primer valor es el que lee nada mas
  //segundo valor es para mutar o modificar
  const [name, setName] = useState("Kain");
  const [chars, setChars] = useState([]);

  useEffect(() => {
    llamada(); // hoisting
  }, []);

  const llamada = async () => {
    const call = await axios.get(URL);
    //doble destructurcion
    const {
      data: { results },
    } = call;
    // version larga panoramica
    /*   const {data} = call
    const {results}=  data */
    setChars(results); //!aca inyectamos el valor del resultado a el estado
  };
  const changeName = () => {
    console.log("Esta pasndo mannn 🔥");
    setName("Mauricio");
  };
  return (
    <div className="App">
      {/* self closing tag */}
      <Title title="Buenos dias America" name={name} />{" "}
      {/* Title("Buenos dias america") */}
      <p>{name}</p>
      <button onClick={changeName}>Cambia el nombre</button>
      <section>
        <h1>Rick y morty llaman a casa con axios 🔥</h1>
        <ul>
          {chars.length === 0 ? (
            <span>Loading...</span>
          ) : (
            chars.map((personaje, idx) => (
              <li key={personaje.id}>
                <span>{personaje.name}</span>
                <span>{personaje.status}</span>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}

export default App;
