import "../App.css"
import { useState } from 'react'

export default function Box(props) {
    const [tic, setTic] = useState("");
    function handleButtonClick() {
        if (props.turn) {
            setTic("X");
            props.setTurn((t) => {
                return !t
            })
        } else {
            setTic("O");
            props.setTurn((t) => {
                return !t
            })
        }        
    }

    return (
        <>
        <button onClick={handleButtonClick} className="box">{tic}</button>
        </>
    )
}