import React, { useEffect, useState } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { useAuth } from '~/hooks/auth';
import { useApiKey } from '~/hooks/api';
import { useMicrocms } from '~/hooks/microcms';

import { ArticleList } from '~/components/ArticleList';
import { Logo } from '~/components/Logo';
import { Container, Spacer, Row, Card, Loading, Text } from '@nextui-org/react';

export const loader: LoaderFunction = async ({ params }) => {
  return params.id;
}

export default function Index():React.ReactElement {
    const { apiKey }= useApiKey();
    const { user } = useAuth();
    const {getArticle, article} = useMicrocms();
    const id = useLoaderData();

    useEffect(() => {
        getArticle(apiKey || "", id);
    } , [apiKey, user]);

    return (
        <Container gap={2}>
            <Spacer />
            <Logo/>
            <Spacer y={2} />
            <Row justify='center'>
            {article === undefined && <Loading></Loading>}
            {article === null && <Card css={{
                mw: "600px",
            }}>
                    <Row justify='center'>
                        <Text h1>ここに記事はない！</Text>
                    </Row>
                </Card>}
            {article &&
                <Card css={{
                    mw: "900px",
                }}>
                   <ArticleList title={article.title} subtitle={article.profile} id={article.id} key={article.id} createdAt={article.date}></ArticleList>
                    <Spacer/>
                    <div dangerouslySetInnerHTML={{__html:article.content}}></div>
                </Card>
            }
            </Row>
            <Spacer y={3}/>
        </Container>
    );
};