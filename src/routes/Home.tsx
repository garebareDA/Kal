import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { Card } from '../components/Card';


export const Home: React.VFC = () => {
        const { logOut, deleteAccount, user } = useAuth();
        const { apiKey } = useApiKey();
        const navigate = useNavigate();
        const [articleList, setArticleList] = useState<[]>([]);

        return (
            <div>
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
            </div>
        );
    };