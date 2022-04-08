import * as React from 'react';
import styled from 'styled-components';

const Intros = styled.div`
    box-shadow: 0 2px 8px 0 ${(props) => props.theme.shadow};
    border-radius: 10px;
    padding: 16px;
    max-width: 800px;
`;

const Text = styled.div`
    font-size: 24px;
    padding-bottom: 8px;
    color: ${(props) => props.theme.mainText };
`;

const Abduction = styled.div`
    padding-top: 16px;
    color: ${(props) => props.theme.mainText };
`;

export const Intro: React.VFC = () => {
    return (
        <Intros>
            <Text>Kalは<a href="https://twitter.com/garebare521">ガレバレ</a>のブログです。 </Text>
            <Text>Twitterでフォローされてないと見ることはできません。</Text>
            <Text>フォローされているかを確認するためにログインする必要があります。</Text>
            <Abduction>
                <div>アカウントのID以外は使用しません。</div>
                <div>Firebase AuthCationに保存されます。</div>
            </Abduction>
        </Intros>
    );
};