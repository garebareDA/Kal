import { useState} from 'react';

export type MicrocmsResponse = {
    contents: Article[];
    totalCount: number;
    offset: number;
    limit: number;
}

export type Article = {
    id: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    revisedAt: string,
    title: string,
    profile: string,
    content: string,
    date:string
}
const ENDPOINT = 'https://kal.microcms.io/api/v1/blog';

export const useMicrocms = (): {
    response: MicrocmsResponse | undefined | null,
    article: Article | undefined | null,
    getArticle: (key?: string, id?: string) => void,
    getArticles: (key?: string, page?: number) => void,
} => {
    const [response, setContents] = useState<MicrocmsResponse | null | undefined>(undefined);
    const [article, setArticle] = useState<Article | null | undefined >(undefined);

    const Limit = 100;
    const getArticles = async (key?: string, page?: number) => {
        if (!key) throw new Error('key is required');
        if (!page) throw new Error('page is required');
        const params = new URLSearchParams({
            offset: ((page - 1) * Limit).toString(),
            limit: Limit.toString(),
        });
        const res = await fetch(`${ENDPOINT}?${params.toString()}`, {
            method: 'GET',
            headers: {
                'X-MICROCMS-API-KEY': key,
            },
        });
        res.status === 400 ? setContents(null) : setContents(await res.json() as MicrocmsResponse);
    };

    const getArticle = async (key?: string, id?: string) => {
        if (!key) throw new Error('key is required');
        if (!id) throw new Error('id is required');
        const res = await fetch(`${ENDPOINT}/${id}`, {
            method: 'GET',
            headers: {
                'X-MICROCMS-API-KEY': key,
            },
        });
        res.status == 404 ? setArticle(null) : setArticle((await res.json() as Article));
    };

    return {
        response,
        article,
        getArticle,
        getArticles,
    };
};
