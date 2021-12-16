import * as React from 'react';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';

import { Intro } from '../components/Intro';
import { Card } from '../components/Card';

export const Home: React.VFC = () => {
    const {logOut, user} = useAuth();
    return (
        <div>
            { user && <Card logOut={logOut} user={user}/> }
        </div>
    );
};