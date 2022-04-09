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
`;

const Contents = styled.div`
    color: ${(props) => props.theme.contentsText};
`;

const Frame = styled.div`
    max-width: 800px;
    width: 100%;
`;

const Page = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    color:${(props) => props.theme.mainText};
`;

type Props = {
    apiKey: string|null
};

export const Article: React.VFC<Props> = ({apiKey}:Props) => {
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
            
            <Logo/>
            {!article && apiKey && <Page>何もないかもしれない</Page>}
            {article &&
                <Frame>
                    <ArticleList title={article.title} subtitle={article.profile} id={article.id} key={article.id} createdAt={article.date} isLink={false}></ArticleList>
                    <Contents dangerouslySetInnerHTML={{__html:article.content}}></Contents>
                </Frame>
            }
        </Articles>
    );
};