import * as React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Article = styled.div`
    border-radius: 20px;
    padding: 24px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
    max-width: 800px;
`;

const LinkTitle = styled.div`
    color: ${(props) => props.theme.titleText};
    font-size: 24px;
    margin-bottom: 16px;
    cursor: pointer;
    :hover {
        color: #043b7a;
    }
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
    color: ${(props) => props.theme.titleText};
`;

const Shr = styled.hr`
    background-color: #ffffff;
    border-top: 2px dashed #d8d8d8;
`

const CreatedAt = styled.div`
    color: ${(props) => props.theme.subText};
`;


export const ArticleList: React.VFC<{ title: string, subtitle: string, id: string, createdAt: string, isLink:boolean }> = ({ title, subtitle, id, createdAt, isLink }) => {
    const navigate = useNavigate();
    return (
        <Article>
            <CreatedAt>{createdAt.split('T')[0]}</CreatedAt>
            {isLink && <LinkTitle onClick={() => {navigate(`/article/${id}`);}}>{title}</LinkTitle>}
            {!isLink && <Title>{title}</Title>}
            <div>{subtitle}</div>
            <Shr />
        </Article>
    );
}