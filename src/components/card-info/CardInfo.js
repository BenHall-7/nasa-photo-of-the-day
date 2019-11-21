import React from 'react';
import "./CardInfo.css";

function CardInfo(props) {
    return (
        <div className="CardInfo">
            {props.data.copyright ?
                <p className="copyright">
                    {`© ${props.data.copyright}`}
                </p>
                : null}
            <h1>{props.data.title}</h1>
            <p class="description">{props.data.explanation}</p>
        </div>
    )
}

export default CardInfo;