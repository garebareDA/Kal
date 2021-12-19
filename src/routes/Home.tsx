import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { Card } from '../components/Card';
import { useMicrocms, Article } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';


export const Home: React.VFC = () => {
        const { logOut, deleteAccount, user } = useAuth();
        const { apiKey } = useApiKey();
        const {contents, getArticles, page, setPage} = useMicrocms();
        const [articles, setArticles] = useState<React.ReactNode[]>([]);

        useEffect(() => {
            if(!user) return;
            if(!apiKey || apiKey == "") return;
            getArticles(apiKey, page);
        } , [apiKey, user]);

        useEffect(() => {
            setArticles([]);
            for(let i = 0; i < contents.length; i++) {
                const c = contents[i]
                setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id}/>])
            }
        } , [contents]);

        return (
            <div>
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
                {articles}
            </div>
        );
    };