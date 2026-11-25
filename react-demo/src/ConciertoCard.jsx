



function ConciertoCard({datos , alPulsar }){
return(
    <article className="concierto-card">
        <h2>{datos.artista}</h2>
        <p><strong>Genero: </strong> {datos.genero}</p>
        <p><strong>Fecha: </strong> {datos.fecha}</p>
        <p><strong>Horario: </strong>{datos.horario}</p>
        <button type="button" onClick={alPulsar}>manejador</button>
    </article>
);
    
}

export default ConciertoCard;