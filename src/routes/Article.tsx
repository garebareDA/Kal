import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
    color: ${(props) => props.theme.contentsText};
`

const Frame = styled.div`
    max-width: 800px;
    width: 100%;
`

const Page = styled.div`
    margin-left: 24px;
    margin-right: 24px;
    color:${(props) => props.theme.mainText};
`;

export const Article: React.VFC<{apiKey:string|null, theme:string, toggleTheme:() => void}> = ({apiKey, theme, toggleTheme}) => {
    const { id } = useParams();
    const { user } = useAuth();
    const {getArticle, article} = useMicrocms();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) return;
        if(!apiKey || apiKey == "") return;
        getArticle(apiKey, id);
    } , [apiKey, user]);

    return (
        <Articles>
            <Logo theme={theme} toggleTheme={toggleTheme}/>
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