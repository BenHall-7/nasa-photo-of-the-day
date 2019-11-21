import React from "react";
import CardInfo from "./card-info/CardInfo";
import "./ImageCard.css"

function ImageCard(props) {
    return (
        <div className="ImageCard">
            <img src={props.data.url} alt={props.data.title}/>
            <CardInfo data={props.data}/>
        </div>
    )
}

export default ImageCard;