import React from "react";
import CardInfo from "./card-info/CardInfo";
import ReactPlayer from "react-player";
import styled from "styled-components";

function VideoCard(props) {
    let VideoCard = styled.div`
        background: white;
        box-shadow: 1px 1px 0 grey;
        margin: 20px 0;
    `;

    let Player = styled(ReactPlayer)`
        margin: 20px auto;
    `;

    return (
        <VideoCard>
            <Player url={props.data.url}/>
            <CardInfo data={props.data}/>
        </VideoCard>
    )
}

export default VideoCard;