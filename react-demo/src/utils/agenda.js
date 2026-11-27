


export function duracion (concierto){

    return concierto.fin - concierto.inicio;
}

export function hora(minutos){

    const h = Math.floor(minutos /60);
    const m = minutos % 60;
    return `${String(h)} : ${String(m)}`;
}

export function solapan (a , b){

    if (a.inicio < b.fin && a.fin > b.inicio){
        return true;
    }
    else return false;

}

export function minutosTotales(lista){
let total=0;
    for(const c of lista){
        total += duracion(c);
    }
    return total;
}

export function motivoRechazo(lista , nuevo){

    for( const c of lista){
        if(c.id === nuevo.id){
            return "ID repetido";
        }
        else if (solapan(c,nuevo)){
            return `Se solapa con ${c.artista}` ;
        }    
         
    }
    return null;

}

export function mostrarAgenda(lista){

    for (let index = 0; index < lista.length; index++) {
        const concierto = lista[index];
        console.log(`${hora(concierto.inicio)} - ${concierto.artista}`);
    }
}