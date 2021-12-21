import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';
import { useMicrocms } from '../hooks/microcms';

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
            {article &&
                <div>
                    <div>{article.createdAt.split('T')[0]}</div>
                    <h1>{article.title}</h1>
                    <div>{article.profile}</div>
                    <div dangerouslySetInnerHTML={{__html:article.content}}></div>
                </div>
            }
        </div>
    );
};