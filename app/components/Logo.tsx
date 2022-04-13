import { Avatar, Container, Text, Link, Row, Spacer } from "@nextui-org/react";
import React from "react";
import { useNavigate } from "@remix-run/react";
import kalIcon from "~/assets/image/kal.png";

export const Logo: React.VFC = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Link onClick={() => {
                navigate("/");
            }}>
                <div>
                    <Row align="center">
                        <Avatar src={kalIcon} size="xl" />
                        <Spacer />
                        <Text h1>Kal,</Text>
                    </Row>
                    <Row>
                        <Text h3>It{"'"}s me! Garebare</Text>
                    </Row>
                </div>
            </Link>
        </Container>
    );
};