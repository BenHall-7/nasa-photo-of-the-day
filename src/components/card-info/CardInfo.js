import React from 'react';
import styled from 'styled-components';

function CardInfo(props) {
    let CardInfo = styled.div`
        padding: 0 30px 20px;
    `;

    let CopyRight = () => {
        if (props.data.copyright) {
            const Ret = styled.p`
                text-align: right;
            `;
            return (
                <Ret>
                    © {props.data.copyright}
                </Ret>
            )
        } else {
            return null;
        }
    }

    return (
        <CardInfo>
            <CopyRight/>
            <h1>{props.data.title}</h1>
            <p className="description">{props.data.explanation}</p>
        </CardInfo>
    )
}

export default CardInfo;