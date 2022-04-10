import { Avatar, Container, Text } from "@nextui-org/react";
import React from "react";
import kalIcon from "~/assets/image/kal.png";

export const Logo: React.VFC = () => {
    return (
        <Container>
            <Avatar src={kalIcon} size="lg"/>
            <div>
                <Text h1>Kal,</Text>
                <Text h3>It{"'"}s me! Garebare</Text>
            </div>
        </Container>
    );
};