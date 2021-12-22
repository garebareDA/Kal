import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Logo } from '../components/Logo';

const NotFounds = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Page = styled.p`
    margin-left: 24px;
    margin-right: 24px;
    color:${(props) => props.theme.mainText};
`;

export const NotFound: React.VFC<{theme:string, toggleTheme:() => void}> = ({theme, toggleTheme}) => {
    return (
        <NotFounds>
            <Logo theme={theme} toggleTheme={toggleTheme}/>
            <Page>何もないよ！ほんとに！</Page>
        </NotFounds>
    )
}
