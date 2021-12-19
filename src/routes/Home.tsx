import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';

import { Card } from '../components/Card';

export const Home: React.VFC<{
    apiKey: string | null,
    setApiKey: (apiKey: string | null) => void,
}> = ({
    apiKey,
    setApiKey,
}) => {
        const { logOut, deleteAccount, user } = useAuth();
        const { getApiKey } = useApiKey();
        const navigate = useNavigate();

        useEffect(() => {
            if (!user) return;
            if(!apiKey || apiKey != "") return;
            getApiKey().then((key) => {
                setApiKey(key);
                if (key == "") {
                    navigate('/notsee');
                }
            });
        }, [user]);

        return (
            <div>
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
            </div>
        );
    };