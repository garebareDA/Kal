import React from "react";
import styled, { keyframes } from "styled-components";

import kalIcon from "../../img/kal.png";

const Logos = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
`

const Container = styled.div`
    font-size: 32px;
    color: #000000;
`;

const typing = keyframes`
    from { width: 0; }
    to { width: 100%; }
`
const Me = styled.div`
    overflow: hidden;
    white-space: nowrap;
    animation: ${typing} 1s steps(15) 1;
`

const IconAnimation = keyframes`
    to { background-position: -720px 0;}
`
const IconImage = styled.a`
    background: url(${kalIcon}) no-repeat;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
    :active {
        animation: ${IconAnimation} 1s steps(9);
    }
`

const Name = styled.div`
    padding-left: 24px;
    color: #a5a5a5;
`

export const Logo: React.VFC = () => {
    return (
        <Logos>
            <IconImage />
            <Name>
                <Container>Kal,</Container>
                <Me>It{"\'"}s me! Garebare</Me>
            </Name>
        </Logos>
    );
};