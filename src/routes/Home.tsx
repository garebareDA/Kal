import * as React from 'react';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';

import { Card } from '../components/Card';

export const Home: React.VFC = () => {
    const {logOut, deleteAccount, user} = useAuth();
    return (
        <div>
            { user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user}/> }
        </div>
    );
};