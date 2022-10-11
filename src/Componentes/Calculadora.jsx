import React from 'react'
import './Calculadora.css'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { useState } from 'react';


export default function Calculadora() {
    const [num, setNum] = useState(0);
    const [aux, setAux] = useState(0);
    const [operador, setOperador] = useState();


    function numeroSelec(e) {
        var input = e.target.value;

        if (num == 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }
    }

    function limpar() {
        setNum(0)
    }

    function mudarSinal() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num));
        }
    }

    function porcentagem() {
        setNum(num / 100)
    }

    function operadorUse(e) {

        let oper = e.target.value;
        setOperador(oper)
        setAux(num)
        setNum(0)
    }

    function calcular() {
        console.log("calculou");
        if (operador === "/") {
            setNum(aux / num)
        } else if (operador === "x") {
            setNum(aux * num)
        } else if (operador === "-") {
            setNum(aux - num)
        } else if (operador === "+") {
            let aux2 = parseFloat(aux)
            let num2 = parseFloat(num)
            setNum(aux2 + num2)
        }
    }

    function dividir(e) {

    }
    return (
        <div>
            <Box m={20} />
            <Container maxWidth="xs">
                <div className='btns'>
                    <div className='visor'> <h1 style={{maxWidth:"200px"}}>{num}</h1></div>
                    <div className='btnGroup'>
                        <div className='linha'>
                            <button className='especial' onClick={limpar}>AC</button>
                            <button className='especial' onClick={mudarSinal}>+/-</button>
                            <button className='especial' onClick={porcentagem}>%</button>
                            <button className='operacao' onClick={operadorUse} value="/" >÷</button>
                        </div>

                        <div className='linha'>
                            <button onClick={numeroSelec} value={7}>7</button>
                            <button onClick={numeroSelec} value={8}>8</button>
                            <button onClick={numeroSelec} value={9}>9</button>
                            <button className='operacao' onClick={operadorUse} value="x" >x</button>
                        </div>

                        <div className='linha'>
                            <button onClick={numeroSelec} value={4}>4</button>
                            <button onClick={numeroSelec} value={5}>5</button>
                            <button onClick={numeroSelec} value={6}>6</button>
                            <button className='operacao' onClick={operadorUse} value="-" >-</button>
                        </div>
                        <div className='linha'>
                            <button onClick={numeroSelec} value={1}>1</button>
                            <button onClick={numeroSelec} value={2}>2</button>
                            <button onClick={numeroSelec} value={3}>3</button>
                            <button className='operacao' onClick={operadorUse} value="+" >+</button>
                        </div>
                        <div className='linha'>
                            <button id='zero' onClick={numeroSelec} value={0}>0</button>
                            <button onClick={numeroSelec} value=".">,</button>
                            <button className='operacao' id="igual" onClick={calcular}>=</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

