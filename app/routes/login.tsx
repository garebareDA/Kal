import React, { useEffect } from 'react';
import { useNavigate } from '@remix-run/react';

import { useAuth } from '../hooks/auth';
import { Intro } from '../components/Intro';
import { Logo } from '../components/Logo';
import { Container, Card, Spacer, Row, Button } from '@nextui-org/react';

export default function Index(): React.ReactElement {
    const { logIn, user } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);
    return (
        <Container justify='center'>
            <Spacer />
            <Logo />
            <Spacer y={3} />
            <Row justify='center'>
                <Card css={{ mw: "600px" }}>
                    <Intro />
                    <Spacer y={2} />
                    <Row justify='center'>
                        <Button onClick={() => { logIn(); }}>
                            Twitterでログイン
                        </Button>
                    </Row>
                </Card>
            </Row>
        </Container>
    );
};