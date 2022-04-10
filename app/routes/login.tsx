import React, { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

import { useAuth } from '../hooks/auth';
import { Intro } from '../components/Intro';
import { Logo } from '../components/Logo';
import { LoginButton } from '../components/LoginButton';

export default function Index(): React.ReactElement {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    } , [user]);
    return (
        <div>
            <div>
                <Logo/>
            </div>
            <div>
                <Intro />
            </div>
            <div>
                <LoginButton logIn={logIn}/>
            </div>
        </div>
    );
};