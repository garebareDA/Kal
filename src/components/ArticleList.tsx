import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Article = styled.div`
    border-radius: 50px;
    padding: 24px;
    width: 100%;
    max-width: 700px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
`;

export const ArticleList: React.VFC<{title:string, subtitle:string, id:string, createdAt:string}> = ({title, subtitle, id, createdAt}) => {
    return (
        <Article>
            <div>{createdAt}</div>
            <Link to={`/article/${id}`}>
                <Title>{title}</Title>
            </Link>
            <div>{subtitle}</div>
        </Article>
    );
}