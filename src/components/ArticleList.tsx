import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Article = styled.p`
    border-radius: 20px;
    padding: 24px;
    width: 100%;
    max-width: 700px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
    color: #3e83d1;
    cursor: pointer;
    :hover {
        color: #043b7a;
    }
`;

const Shr = styled.hr`
    background-color: #fff;
	border-top: 2px dashed #d8d8d8;
`

const CreatedAt = styled.div`
    color: gray;
`;


export const ArticleList: React.VFC<{ title: string, subtitle: string, id: string, createdAt: string }> = ({ title, subtitle, id, createdAt }) => {
    const navigate = useNavigate();
    return (
        <Article>
            <CreatedAt>{createdAt}</CreatedAt>
            <Title onClick={() => {
                navigate(`/article/${id}`);
            }}>{title}</Title>
            <div>{subtitle}</div>
            <Shr />
        </Article>
    );
}