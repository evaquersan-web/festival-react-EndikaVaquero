
import { useState } from "react";
import ConciertoCard from "./ConciertoCard";
import Cabecera from "./Cabecera";
import "./App.css";

function App() {

const concierto = {
    artista: "Fontaines D.C.",
    genero: "Rock",
    fecha: "14/11/2026",
    horario: "22:30",
  };

const cabecera = {
    titulo: "Festival React Endika",
    descripcion: "Bienvenido a la aplicacion de conciertos de Endika",
};  

function manejarClick(){
    console.log("Has pulsado en", concierto.artista);
}

return (

        <main>
            <Cabecera info={cabecera}/>

            <h1>Cartelera</h1>
            <ConciertoCard datos={concierto} alPulsar={manejarClick} />
        </main>

    );

}



export default App;
