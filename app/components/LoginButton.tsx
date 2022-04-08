import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 5px;
    padding : 8px;
    font-size: 24px;
    cursor: pointer;
    background-color: #3e83d1;
    color: #ffffff;
    :hover{
        background-color: #043b7a;
    }
`;

type Props = {
    logIn: () => Promise<void>
}

export const LoginButton:React.VFC<Props> = ({logIn}:Props) => {
    return (
        <div>
            <Button onClick={() => { logIn(); }}>
                    Twitterでログイン
            </Button>
        </div>
    );
};