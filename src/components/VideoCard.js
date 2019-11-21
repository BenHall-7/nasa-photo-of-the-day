import React, {useState, useEffect} from "react";
import CardInfo from "./card-info/CardInfo";

function VideoCard(props) {
    return (
        <div>
            VideoCard!
            <CardInfo data={props.data}/>
        </div>
    )
}

export default VideoCard;