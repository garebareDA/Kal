import * as React from 'react';
import { User } from 'firebase/auth';
import { Card, Text, Avatar, Button, Row, Spacer } from '@nextui-org/react';

type Props = {
    logOut: () => Promise<void>
    deleteAccount: () => Promise<void>
    user: User,
};

export const UserCard: React.VFC<Props> = ({ logOut, deleteAccount, user }: Props) => {
    return (
        <Card css={{
            mw: "600px",
        }}>
            <Text h4>アカウント</Text>
            <Spacer y={2} />
            <Row align='center'>
                <Avatar size='lg' src={user.photoURL as string} alt={user.displayName as string} />
                <Spacer />
                <Text>{user.displayName}</Text>
            </Row>
            <Spacer/>
            <Row>
                <Button color="error" onClick={() => { logOut(); }}>
                    ログアウト
                </Button>
            </Row>
            <Spacer/>
            <Row>
                <Button color="error" onClick={() => { deleteAccount(); }}>
                    アカウント削除
                </Button>
            </Row>
            <Spacer/>
            <Text>アカウントを削除してもまたログインできます。</Text>
            <Text>ただガレバレの逆鱗に触れると帰ってこれません。</Text>
        </Card>
    );
};