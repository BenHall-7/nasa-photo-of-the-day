import React, {useState, useEffect} from "react";
import CardInfo from "./card-info/CardInfo";
import ReactPlayer from "react-player";
import "./VideoCard.css";

function VideoCard(props) {
    return (
        <div className="VideoCard">
            <ReactPlayer className="player"
                url={props.data.url}/>
            <CardInfo data={props.data}/>
        </div>
    )
}

export default VideoCard;