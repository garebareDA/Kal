import * as React from 'react';
import styled from 'styled-components';
import { User } from 'firebase/auth'

const CardFrame = styled.p`
    box-shadow: 0 4px 8px 0 rgba(0, 6, 0, 0.5);
    border-radius: 20px;
    padding: 16px;
    max-width: 500px;
    display:flex;
    flex-flow: column;
    width: 100%;
`

const LoginText = styled.div`
    font-size: 16px;
    padding-bottom: 8px;
`

const DisplayIcon = styled.img`
    border-radius: 100%;
    width: 48px;
    height: 48px;
`;

const Users = styled.div`
    display:flex;
`;

const DisplayName = styled.p`
    padding-left: 8px;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    margin-bottom: 8px;
    background-color: #f0f0f0;
    cursor: pointer;
    :hover{
        background-color: #ff0000;
        color: #ffffff;
    }
`

const ButtonText = styled.div`
    font-size: 16px;
    padding: 8px;
`;

const TextAnnotation = styled.div`
    font-size: 12px;
    color: #666666;
`

export const Card: React.VFC<{ logOut: () => Promise<void>, deleteAccount: () => Promise<void>, user: User }> = ({ logOut, deleteAccount, user }) => {
    return (
        <CardFrame>
            <LoginText>アカウント</LoginText>
            <Users>
                <DisplayIcon src={user.photoURL as string} alt={user.displayName as string} />
                <DisplayName>{user.displayName}</DisplayName>
            </Users>

            <div>
                <Button onClick={() => { logOut() }}>
                    <ButtonText>ログアウト</ButtonText>
                </Button>
            </div>
            <div>
                <Button onClick={() => { deleteAccount() }}>
                    <ButtonText>アカウント削除</ButtonText>
                </Button>
            </div>
            <TextAnnotation>アカウントを削除してもまたログインできます。</TextAnnotation>
            <TextAnnotation>ただガレバレの逆鱗に触れると帰ってこれません。</TextAnnotation>
        </CardFrame>
    );
}