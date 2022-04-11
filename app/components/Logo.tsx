import { Avatar, Container, Text, Link } from "@nextui-org/react";
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
                    <Avatar src={kalIcon} size="xl" />
                    <Text h1>Kal,</Text>
                    <Text h3>It{"'"}s me! Garebare</Text>
                </div>
            </Link>
        </Container>
    );
};