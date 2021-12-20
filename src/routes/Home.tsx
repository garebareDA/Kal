import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { Card } from '../components/Card';
import { useMicrocms, Article } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';


export const Home: React.VFC<{apiKey:string|null}> = ({apiKey}) => {
        const [page, setPage] = useState<number>(0);
        const [isNextPage, setIsNextPage] = useState<boolean>(false);
        const [isPrevPage, setIsPrevPage] = useState<boolean>(false);
        const { logOut, deleteAccount, user } = useAuth();
        const {contents, getArticles} = useMicrocms();
        const [articles, setArticles] = useState<React.ReactNode[]>([]);

        useEffect(() => {
            if(!user) return;
            if(!apiKey || apiKey == "") return;
            getArticles(apiKey, page);
        } , [apiKey, user, page]);

        useEffect(() => {
            setArticles([]);
            for(let i = 0; i < contents.length; i++) {
                const c = contents[i]
                setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id}/>])
            }
        } , [contents]);

        const pageTransition = (pages:number) => {
            if(page >= 1 && contents.length == 10 && pages > 0) {
                setPage(page + pages);
            }

            if(page <= 1 && pages < 0) {
                setPage(page + pages);
            }
        }

        return (
            <div>
                {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
                {articles}
                {user &&
                    <div>
                        <button onClick={() => {pageTransition(1)}}>次へ</button>
                        <button onClick={() => {pageTransition(-1)}}>前へ</button>
                    </div>}
            </div>
        );
    };