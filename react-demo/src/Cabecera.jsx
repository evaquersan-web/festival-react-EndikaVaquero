
function Cabecera({info}){
return(

    <article className="cabecera">
        <h1>{info.titulo}</h1>
        <h2>{info.descripcion}</h2>
    </article>
);
}


export default Cabecera;