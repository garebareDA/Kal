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

export const Login: React.VFC = () => {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    } , [user]);
    return (
        <Logins>
            <p> <Logo /> </p>
            <p> <Intro /> </p>
            <p> <LoginButton logIn={logIn}/> </p>
        </Logins>
    );
}