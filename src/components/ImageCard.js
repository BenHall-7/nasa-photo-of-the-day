import React from "react";
import CardInfo from "./card-info/CardInfo";
import styled from 'styled-components';

function ImageCard(props) {
    let ImageCard = styled.div`
        background: white;
        box-shadow: 1px 1px 0 grey;
        margin: 20px 0;
    `;

    let ImageCardImage = styled.img`
        width: 100%;
        height: 75vh;
        object-fit: cover;
    `;

    return (
        <ImageCard>
            <ImageCardImage src={props.data.url} alt={props.data.title}/>
            <CardInfo data={props.data}/>
        </ImageCard>
    )
}

export default ImageCard;