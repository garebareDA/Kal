import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { Card } from '../components/Card';
import { useMicrocms } from '../hooks/microcms';


import { ArticleList } from '../components/ArticleList';
import { Logo } from '../components/Logo';

const Homes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;

const Buttons = styled.div`
    display: flex;
    margin-bottom: 48px;
`

const Page = styled.p`
    margin-left: 24px;
    margin-right: 24px;
`;

const Button = styled.button`
    border: none;
    border-radius: 10px;
    padding: 16px;
    cursor: pointer;
    :enabled{
        :hover{
            background-color: #e4e4e4;
        }
    }
`;

const ButtonText = styled.div`
    font-size: 24px;
`;

const Logos = styled.div`
    margin-bottom: 48px;
`

const Article = styled.div``

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
            setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id} createdAt={c.createdAt.split("T")[0]} /> ])
        }
        setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
        setIsPrevPage(page != 1);
    }, [response]);

    return (
        <Homes>
            <Logo/>
            <Logos/>
            {articles.length == 0 && <Page>読み込み中...</Page>}
            {articles}
            {user &&
                <Buttons>
                    <Button disabled={!isPrevPage} onClick={() => { setPage(page - 1) }}>
                        <ButtonText>
                            {'<'}
                        </ButtonText>
                    </Button>
                    <Page>{page}</Page>
                    <Button disabled={!isNextPage} onClick={() => { setPage(page + 1) }}>
                        <ButtonText>
                            {'>'}
                        </ButtonText>
                    </Button>
                </Buttons>
            }
            {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
        </Homes>
    );
};