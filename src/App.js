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
                 onClick={() => {
                     if (count < 10){
                         return setCount(count + 1)

                     }else{
                         return setCount(count + 0)
                     }
                    
                }}
                 className="buttonInc"
                 >
                     
                 </button>

                <button 
                onClick={() => {
                    if (count > 0){
                        return setCount(count - 1)

                    }else{
                        return setCount(count - 0)
                    }
                   
               }}
                className="buttonDec"
                >
                                        
                </button>

            </div>


            <div className="keypad">
                <button onClick={() => {
                     if (count < 9){
                         return setCount(count + 2)

                     }
                     if (count  > 8 && count < 10){
                        return setCount(count + 1)
                     }
                     else{
                         return setCount(count + 0)
                     }
                    
                }} >
                    Fim da rodada
                    </button>
                <button onClick={reset} >Fim do jogo</button>
            </div>
        </div>
    );
}
export default App;