import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { Intro } from '../components/Intro';

export const Login: React.VFC = () => {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!user) {
            navigate('/');
        }
    } , [user]);
    return (
        <div>
            <Intro />
            <button onClick={ () => { logIn() }}> login </button>
        </div>
    );
}