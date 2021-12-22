import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { useMicrocms } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';
import { Logo } from '../components/Logo';

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
        <div>
            <Logo />
            {article &&
                <div>
                    <ArticleList title={article.title} subtitle={article.profile} id={article.id} key={article.id} createdAt={article.createdAt} isLink={false}></ArticleList>
                    <div dangerouslySetInnerHTML={{__html:article.content}}></div>
                </div>
            }
        </div>
    );
};