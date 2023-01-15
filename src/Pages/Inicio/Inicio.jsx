import React from "react";
import "./Inicio.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";
import Naruto from '../../assets/Naruto.png'
import Saske from '../../assets/Saske.jpg'
import Itachi from '../../assets/Itachi.jpg'
import Jiraya from '../../assets/Jiraiya.jpg'

function Inicio() {
  const [imagen, setImagen] = useState(Naruto);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    imagenFuncion(event.target.value);
  };

  const imagenFuncion = (funcion) => {
    funcion === 10 ? setImagen(Naruto):
    funcion === 20 ? setImagen(Saske):
    funcion === 30 ? setImagen(Itachi):
    funcion === 40 && setImagen(Jiraya);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="home-container">
      <h1>Calculadora de funciones Trigonometricas</h1>
      <section className="img-continer">
        <img className="img-function" src={imagen} alt="" />
      </section>
      <section>
        <section className="input-function">
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            label="Function"
            onChange={handleChange}
            className="selectFunction"
            defaultChecked = {10}
            defaultValue = {10}
          >
            <MenuItem value={10}>Naruto</MenuItem>
            <MenuItem value={20}>Saske</MenuItem>
            <MenuItem value={30}>Itachi</MenuItem>
            <MenuItem value={40}>Jiraiya</MenuItem>
          </Select>
        </section>
      </section>
    </div>
  );
}

export default Inicio;
