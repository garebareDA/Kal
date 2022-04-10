import React, { useEffect, useState } from 'react';


import { useAuth } from '~/hooks/auth';
import { useApiKey } from '~/hooks/api';
import { UserCard } from '~/components/UserCard';
import { useMicrocms } from '~/hooks/microcms';

import { ArticleList } from '~/components/ArticleList';
import { Logo } from '~/components/Logo';
import { Card, Loading, Row, Text, Spacer, Container, Button, Table } from '@nextui-org/react';

export default function Index() {
    const { apiKey } = useApiKey();
    const [page, setPage] = useState<number>(1);
    const [isNextPage, setIsNextPage] = useState<boolean>(false);
    const [isPrevPage, setIsPrevPage] = useState<boolean>(false);
    const { logOut, deleteAccount, user } = useAuth();
    const { response, getArticles } = useMicrocms();
    const [articles, setArticles] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        getArticles(apiKey, page);
    }, [apiKey, user, page]);

    useEffect(() => {
        if (!response) return;
        setArticles([]);
        for (let i = 0; i < response.contents.length; i++) {
            const c = response.contents[i];
            setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id} createdAt={c.date}/>]);
        }
        setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
        setIsPrevPage(page != 1);
    }, [response]);

    return (
        <Container gap={2}>
            <Spacer />
            <Logo />
            <Spacer />
            <Row justify='center'>
                {articles.length == 0 && apiKey != "" && <Loading></Loading>}
                {articles.length == 0 && apiKey == "" && <Card css={{ mw: "600px", }}>
                    <Row justify='center'>
                        <Text>
                            フォローされていません！寝て待て！
                        </Text>
                    </Row>
                </Card>}
                {articles.map((article) => {
                    return <Card>
                        {article}
                    </Card>
                })}
                {user &&
                    apiKey != "" &&
                    <Container>
                        <Button disabled={!isPrevPage} onClick={() => { setPage(page - 1); }}>
                            <Text>
                                {'<'}
                            </Text>
                        </Button>
                        <Text>{page}</Text>
                        <Button disabled={!isNextPage} onClick={() => { setPage(page + 1); }}>
                            <Text>
                                {'>'}
                            </Text>
                        </Button>
                    </Container>
                }
            </Row>
            <Spacer y={3} />
            <Row justify='center'>
                {user && <UserCard logOut={logOut} deleteAccount={deleteAccount} user={user} />}
            </Row>
        </Container>
    );
};