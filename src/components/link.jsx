import React, {useState} from "react";

function Link(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function handleMouseOver(){
        setIsMouseOver(true);
    }

    function handleMouseOut(){
        setIsMouseOver(false);
    }
    return (
        <li className={isMouseOver ? "bg-green" : ""} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a href={props.href}>{props.text}</a>
        </li>
    )         
}

export default Link;