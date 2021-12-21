import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { Card } from '../components/Card';
import { useMicrocms, Article } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';


export const Home: React.VFC<{apiKey:string|null}> = ({apiKey}) => {
        const [page, setPage] = useState<number>(1);
        const [isNextPage, setIsNextPage] = useState<boolean>(false);
        const [isPrevPage, setIsPrevPage] = useState<boolean>(false);
        const { logOut, deleteAccount, user } = useAuth();
        const {response, getArticles} = useMicrocms();
        const [articles, setArticles] = useState<React.ReactNode[]>([]);

        useEffect(() => {
            if(!user) return;
            if(!apiKey || apiKey == "") return;
            getArticles(apiKey, page);
        } , [apiKey, user, page]);

        useEffect(() => {
            if(!response) return;
            setArticles([]);
            for(let i = 0; i < response.contents.length; i++) {
                const c = response.contents[i]
                setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id}/>])
            }
            setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
            setIsPrevPage(page != 1);
        } , [response]);

        return (
            <div>
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
                {articles}
                {user &&
                    <div>
                        <button disabled={!isPrevPage} >前へ</button>
                        <button disabled={!isNextPage}>次へ</button>
                    </div>}
            </div>
        );
    };