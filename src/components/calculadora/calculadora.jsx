import { useState } from "react"
const Calculadora = (props) => {
    //Inicializamos los valores del componente
    const [ initialCant, setInitialCant ] = useState('')
    const num1 = () => {
        setInitialCant(initialCant+1) 
    }
    const num2 = () => {
        setInitialCant(initialCant+2 )
    }
    const num3 = () => {
        setInitialCant(initialCant + 3 )
    }
    const suma = () => {
       setInitialCant(initialCant)
        const iC=initialCant
        console.log(iC)
        setInitialCant('')
        
    }
    
    const num4 = () => {
        setInitialCant(initialCant + 4 )
    }
    const num5 = () => {
        setInitialCant(initialCant + 5) 
    }
    const num6 = () => {
        setInitialCant(initialCant + 6 )
    }
    const resta = () => {
        setInitialCant(initialCant)
    }
    const num7 = () => {
        setInitialCant(initialCant + 7) 
    }
    const num8 = () => {
        setInitialCant(initialCant + 8) 
    }
    const num9 = () => {
        setInitialCant(initialCant + 9) 
    }
    const division = () => {
        setInitialCant(initialCant)
    }
    const num0 = () => {
        setInitialCant(initialCant + 0)
    }
    const igual = () => {
        
        let total={suma}+initialCant
        console.log({suma})
        setInitialCant(total)
    }
    
    return (
        <div className="Calculadora">
            <h1>{initialCant}</h1>
            <div>
            <button onClick={num1}>1</button> 
            <button onClick={num2}>2</button>
            <button onClick={num3}>3</button>
            <button onClick={suma}>+</button>
            </div>
            <div>
            <button onClick={num4}>4</button> 
            <button onClick={num5}>5</button>
            <button onClick={num6}>6</button>
            <button onClick={resta}>-</button>
            </div>
            <div>
            <button onClick={num7}>7</button> 
            <button onClick={num8}>8</button>
            <button onClick={num9}>9</button>
            <button onClick={division}>/</button>
            </div>
            <div>
            <button onClick={num1}>.</button> 
            <button onClick={num0}>0</button>
            <button onClick={igual}>=</button>
            </div>
        </div>
        
    )
}

export default Calculadora