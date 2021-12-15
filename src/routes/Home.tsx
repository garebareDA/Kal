import * as React from 'react';
import styled from 'styled-components';

import { Intro } from '../components/Intro';
import { Card } from '../components/Card';

export const Home: React.VFC = () => {
    return (
        <div>
            <Intro />
            <Card name="garebare" img="" ></Card>
        </div>
    );
};