import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { Card } from '../components/Card';
import { useMicrocms, Article } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';

const Homes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

const Users = styled.div`
    margin:24px;
    max-width:500px;
    width:100%;
`

export const Home: React.VFC<{ apiKey: string | null }> = ({ apiKey }) => {
    const [page, setPage] = useState<number>(1);
    const [isNextPage, setIsNextPage] = useState<boolean>(false);
    const [isPrevPage, setIsPrevPage] = useState<boolean>(false);
    const { logOut, deleteAccount, user } = useAuth();
    const { response, getArticles } = useMicrocms();
    const [articles, setArticles] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        if (!user) return;
        if (!apiKey || apiKey == "") return;
        getArticles(apiKey, page);
    }, [apiKey, user, page]);

    useEffect(() => {
        if (!response) return;
        setArticles([]);
        for (let i = 0; i < response.contents.length; i++) {
            const c = response.contents[i]
            setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id} createdAt={c.createdAt.split("T")[0]}/>])
        }
        setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
        setIsPrevPage(page != 1);
    }, [response]);

    return (
        <Homes>
            {articles}
            {user &&
                <div>
                    <button disabled={!isPrevPage} onClick={() => { setPage(page - 1) }}>前へ</button>
                    <button disabled={!isNextPage} onClick={() => { setPage(page + 1) }}>次へ</button>
                </div>
            }
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user}/>}
        </Homes>
    );
};