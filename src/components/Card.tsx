import * as React from 'react';
import styled from 'styled-components';
import { User } from 'firebase/auth'

const CardFrame = styled.div`
    box-shadow: 0 2px 8px 0 ${(props) => props.theme.shadow};
    border-radius: 20px;
    padding: 16px;
    padding-right: 0px;
    max-width: 500px;
    display:flex;
    flex-flow: column;
    width: 100%;
`

const LoginText = styled.div`
    font-size: 16px;
    padding-bottom: 8px;
    color: ${(props) => props.theme.mainText};
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
    color: ${(props) => props.theme.mainText};
    padding-left: 8px;
`;

const Button = styled.button`
    border: none;
    border-radius: 5px;
    margin-bottom: 8px;
    background-color: ${(props) => props.theme.button};
    cursor: pointer;
    :hover{
        background-color: #ff0000;
    }
`

const ButtonText = styled.div`
    font-size: 16px;
    padding: 8px;
    color: ${(props) => props.theme.mainText};
    :hover {
        color: #ffffff;
    }
`;

const TextAnnotation = styled.div`
    font-size: 12px;
    color: ${(props) => props.theme.subText};
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