import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { Intro } from '../components/Intro';
import { Logo } from '../components/Logo';
import { LoginButton } from '../components/LoginButton';

const Logins = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
`;

const Content = styled.div`
    margin-top:24px;
    word-wrap: wrap none;
`;

export const Login: React.VFC<{theme:string, toggleTheme:() => void}> = ({theme, toggleTheme}) => {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    } , [user]);
    return (
        <Logins>
            <Content> <Logo theme={theme} toggleTheme={toggleTheme}/> </Content>
            <Content> <Intro /> </Content>
            <Content> <LoginButton logIn={logIn}/> </Content>
        </Logins>
    );
}