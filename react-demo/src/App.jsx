import { useState } from "react";
import ConciertoCard from "./ConciertoCard";

function App() {

const[numeroClics, setNumeroClicks] = useState(0);

return (

        <main>

            <h1>Festival React</h1>

            
            <p>Bienvenido a nuestra aplicación de conciertos.</p>

        <button onClick={(ev)=>{
              console.log(ev);
              setNumeroClicks(numeroClics + 1);
            }}>Hacer Click</button>
            
            <h1>{numeroClics}</h1>

            <h1>Cartelera</h1>
            <ConciertoCard/>
        </main>

    );

}



export default App;
