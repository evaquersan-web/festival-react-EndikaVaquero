import { useState } from "react";
import "./App.css";

const ConciertoInfo = {
    artista: "Fontaines D.C",
    genero: "Rock",
    fecha: "14/11/2026"
}

function Card({datos , prueba }){
return(
    <article className="concierto-card">
        <h2>{datos.artista}</h2>
        <p><strong>Genero: </strong> {datos.genero}</p>
        <p><strong>Fecha: </strong> {datos.fecha}</p>
        <button type="button" onClick={prueba}>manejador</button>
    </article>
);
    
}

