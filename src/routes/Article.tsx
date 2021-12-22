import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useMicrocms } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';
import { Logo } from '../components/Logo';

const Articles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

const Contents = styled.div`
    color: #414141;
`

const Frame = styled.p`
    max-width: 800px;
    width: 100%;
`

export const Article: React.VFC<{apiKey:string|null}> = ({apiKey}) => {
    const { id } = useParams();
    const { user } = useAuth();
    const {getArticle, article} = useMicrocms();

    useEffect(() => {
        if(!user) return;
        if(!apiKey || apiKey == "") return;
        getArticle(apiKey, id);
    } , [apiKey, user]);

    return (
        <Articles>
            <Logo />
            {article &&
                <Frame>
                    <ArticleList title={article.title} subtitle={article.profile} id={article.id} key={article.id} createdAt={article.createdAt} isLink={false}></ArticleList>
                    <Contents dangerouslySetInnerHTML={{__html:article.content}}></Contents>
                </Frame>
            }
        </Articles>
    );
};