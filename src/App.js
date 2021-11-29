import React, {useState} from 'react';
import './App.css';



const App = () => {
    const [count, setCount] = useState(3);



    const reset = () => {
        setCount(3);
    }





    return (
        <div className="Container">
            <div className="titulo">
                <h1>MIFA</h1>
                <h2>Contador de energia</h2>
                <h3>Ferramenta desenvolvida para ajudar a contabilizar as energias do seu adversário no modo ARENA.</h3>
            </div>

            <div className="result">

                <input type="text" value = {count} />
                <button 
                 onClick={() => setCount(count + 1)}
                 className="buttonInc"
                 >
                     
                 </button>

                <button 
                onClick={() => setCount(count - 1)}
                className="buttonDec"
                >
                                        
                </button>

            </div>


            <div className="keypad">
                <button onClick={() => setCount(count + 2)} >Fim da rodada</button>
                <button onClick={reset} >Fim do jogo</button>
            </div>
        </div>
    );
}
export default App;