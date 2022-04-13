import React, { useEffect, useState } from 'react';

import { useAuth } from '~/hooks/auth';
import { useApiKey } from '~/hooks/api';
import { UserCard } from '~/components/UserCard';
import { useMicrocms } from '~/hooks/microcms';

import { ArticleList } from '~/components/ArticleList';
import { Logo } from '~/components/Logo';
import { Card, Loading, Row, Text, Spacer, Container, Button, Grid } from '@nextui-org/react';
import { useNavigate } from '@remix-run/react';

export default function Index() {
    const { apiKey } = useApiKey();
    const [page, setPage] = useState<number>(1);
    const [isNextPage, setIsNextPage] = useState<boolean>(false);
    const [isPrevPage, setIsPrevPage] = useState<boolean>(false);
    const { logOut, deleteAccount, user } = useAuth();
    const { response, getArticles } = useMicrocms();
    const [articles, setArticles] = useState<React.ReactNode[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getArticles(apiKey || "", page);
    }, [apiKey, user, page]);

    useEffect(() => {
        if (!response) return;
        setArticles([]);
        for (let i = 0; i < response.contents.length; i++) {
            const c = response.contents[i];
            setArticles(articles => [...articles,
                <Grid>
                    <Card
                    hoverable
                    clickable
                    onClick={() => navigate(`/article/${c.id}`)}
                    css={{
                        mw: "400px",
                    }}>
                        <ArticleList title={c.title} subtitle={c.profile} key={c.id} createdAt={c.date}></ArticleList>
                    </Card>
                </Grid>
            ]);
        }
        setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
        setIsPrevPage(page != 1);
    }, [response]);

    return (
        <Container gap={2} justify="center">
            <Spacer />
            <Logo />
            <Spacer />
            <Grid.Container gap={1} justify='center'>
                {apiKey === undefined && <Loading></Loading>}
                {apiKey === null && <Card css={{ mw: "600px", }}>
                    <Row justify='center'>
                        <Text>
                            フォローされていません！寝て待て！
                        </Text>
                    </Row>
                </Card>}
                {articles}
            </Grid.Container>
            <Spacer />
            {user &&
                apiKey != "" &&
                <Row justify="center" align='center'>
                    <Button disabled={!isPrevPage} onClick={() => { setPage(page - 1); }}>
                        <Text>
                            {'<'}
                        </Text>
                    </Button>
                    <Spacer />
                    <Text>{page}</Text>
                    <Spacer />
                    <Button disabled={!isNextPage} onClick={() => { setPage(page + 1); }}>
                        <Text>
                            {'>'}
                        </Text>
                    </Button>
                </Row>
            }
            <Spacer y={5} />
            <Row justify='center'>
                {user && <UserCard logOut={logOut} deleteAccount={deleteAccount} user={user} />}
            </Row>
            <Spacer />
        </Container>
    );
};