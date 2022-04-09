import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string
    subtitle: string
    id: string
    createdAt: string
    isLink: boolean
}

export const ArticleList: React.VFC<Props> = ({ title, subtitle, id, createdAt, isLink }: Props) => {
    const navigate = useNavigate();
    return (
        <div>
            <div>{createdAt.split('T')[0]}</div>
            {isLink && <div onClick={() => { navigate(`/article/${id}`); }}>{title}</div>}
            {!isLink && <div>{title}</div>}
            <div>{subtitle}</div>
            <hr />
        </div>
    );
};