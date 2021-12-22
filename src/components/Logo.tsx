import React from "react";
import styled, { keyframes } from "styled-components";
import { useLocation } from "react-router-dom";

import kalIcon from "../../img/kal.png";

const Logos = styled.div`
    display: flex;
    width: 100%;
    max-width: 800px;
`
const Container = styled.div`
    font-size: 32px;
    color: ${(props) => props.theme.mainText};
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
    color: ${(props) => props.theme.subText};
`

const Button = styled.button`
    margin-left: auto;
    height: 56px;
    width: 56px;
    font-size: 24px;
    border-radius: 50%;
    border: none;
    :hover {
        background-color: gray;
    }
`

export const Logo: React.VFC <{theme:string, toggleTheme:() => void}>= ({theme, toggleTheme}) => {
    const location = useLocation();
    return (
        <Logos>
            <IconImage />
            <Name>
                <Container>Kal,</Container>
                <Me>It{"\'"}s me! Garebare</Me>
            </Name>
            {
                location.pathname !== "/login" && (theme == "light" ? <Button onClick={() => toggleTheme()}>🌕</Button> : <Button onClick={() => toggleTheme()}>🌑</Button>)
            }
        </Logos>
    );
};