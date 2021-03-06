import React, { useState } from "react";
import "./styles.css";

const Dices = ({ actions, places }) => {
    const [action, setAction] = useState("");
    const [place, setPlace] = useState("");

    const rollDices = () => {
        setPlace(random(places));
        setAction(random(actions));
    };

    const random = array => {
        return array[Math.floor(Math.random() * array.length)];
    };

    return (
        <div>
            <div className="main">
                <div className="dice">
                    <strong className='dice-content'>{action}</strong>
                </div>
                <div className="dice">
                    <strong className='dice-content'>{place}</strong>
                </div>
            </div>
            <div className="rollButton">
                <button onClick={rollDices}> Roll </button>
            </div>
        </div>
    );
};

export default Dices;
