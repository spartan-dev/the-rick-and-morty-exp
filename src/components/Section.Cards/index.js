import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./sections.css";
import Pagination from "../Pagination";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import axios from "axios";
import Loader from "../Loader";
const URL = `https://rickandmortyapi.com/api/character`;
const SectionCards = () => {
  //poner los hooks
  const [chars, setChars] = useState([]);
  const [pagesCount, setPages] = useState();
  const [contando, setContando] = useState();
  useEffect(() => {
    llamada(); // hoisting
  });

  const llamada = async () => {
    const call = await axios.get(`${URL}/?page=${contando}`);
    //doble destructurcion
    const {
      data: { results },
    } = call;
    const {
      data: { info },
    } = call;

    setChars(results);
    setPages(info.pages);
  };

  return (
    <section>
      <h1>Seccion de Characters</h1>
      <CssBaseline />
      <Container fixed>
        <Pagination
          pagesTo={pagesCount}
          setContando={(contando) => setContando(contando)}
        />
        <ul className="cards-container">
          {chars.length === 0 ? (
            <Loader />
          ) : (
            chars.map((personaje, idx) => (
              <Card key={personaje.id} personaje={personaje} />
            ))
          )}
        </ul>
        <Pagination
          pagesTo={pagesCount}
          setContando={(contando) => setContando(contando)}
        />
      </Container>
    </section>
  );
};

export default SectionCards;
