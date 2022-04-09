import React, { useEffect, useState } from 'react';

import { useAuth } from '../hooks/auth';
import { Card } from '../components/Card';
import { useMicrocms } from '../hooks/microcms';

import { ArticleList } from '../components/ArticleList';
import { Logo } from '../components/Logo';

type Props = {
    apiKey: string|null
}

export const Index: React.VFC<Props> = ({ apiKey } : Props) => {
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
            const c = response.contents[i];
            setArticles(articles => [...articles, <ArticleList title={c.title} subtitle={c.profile} id={c.id} key={c.id} createdAt={c.date} isLink={true}/> ]);
        }
        setIsNextPage((response.totalCount % 10) == 0 && response.contents.length == 10);
        setIsPrevPage(page != 1);
    }, [response]);

    return (
        <div>
            <Logo/>
            <div/>
            {articles.length == 0 && apiKey != "" && <div>読み込み中...</div>}
            {articles.length == 0 && apiKey == "" && <div>フォローされていません！寝て待て！</div>}
            {articles}
            {user &&
            apiKey != "" &&
                <div>
                    <button disabled={!isPrevPage} onClick={() => { setPage(page - 1); }}>
                        <div>
                            {'<'}
                        </div>
                    </button>
                    <div>{page}</div>
                    <button disabled={!isNextPage} onClick={() => { setPage(page + 1); }}>
                        <div>
                            {'>'}
                        </div>
                    </button>
                </div>
            }
            {user && <Card logOut={logOut} deleteAccount={deleteAccount} user={user} />}
        </div>
    );
};