import * as React from 'react';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { Intro } from '../components/Intro';

export const Login: React.VFC = () => {
    const { logIn } = useAuth();
    return (
        <div>
            <Intro />
            <button onClick={ () => { logIn() }}> login </button>
        </div>
    );
}