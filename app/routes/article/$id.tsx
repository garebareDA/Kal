import React, { useEffect } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { useNavigate } from '@remix-run/react';

import { useAuth } from '~/hooks/auth';
import { useApiKey } from '~/hooks/api';
import { useMicrocms } from '~/hooks/microcms';

import { ArticleList } from '~/components/ArticleList';
import { Logo } from '~/components/Logo';
import { Container } from '@nextui-org/react';

export const loader: LoaderFunction = async ({ params }) => {
  return params.id;
}

export default function Index():React.ReactElement {
    const { apiKey }= useApiKey();
    const { user } = useAuth();
    const {getArticle, article} = useMicrocms();
    const navigate = useNavigate();
    const id = useLoaderData();

    useEffect(() => {
        if((!apiKey || apiKey == "") || !user) {
            navigate('/login');
        }

        getArticle(apiKey, id);
    } , [apiKey, user]);

    return (
        <Container>
            <Logo/>
            {!article && apiKey && <div>何もないかもしれない</div>}
            {article &&
                <div>
                   <ArticleList title={article.title} subtitle={article.profile} id={article.id} key={article.id} createdAt={article.date} isLink={false}></ArticleList>
                    <div dangerouslySetInnerHTML={{__html:article.content}}></div>
                </div>
            }
        </Container>
    );
};