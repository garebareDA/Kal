import { Card, Container, Spacer, Text } from '@nextui-org/react';
import * as React from 'react';

export const Intro: React.VFC = () => {
    return (
        <div>
            <Text size={16} h3>Kalは<a href="https://twitter.com/garebare521">ガレバレ</a>のブログです。</Text>
            <Text>Twitterでフォローされてないと見ることはできません。</Text>
            <Text>フォローされているかを確認するためにログインする必要があります。</Text>
            <Spacer y={2}></Spacer>
            <Text size={16}>アカウントのID以外は使用しません。</Text>
            <Text size={16}>Firebase AuthCationに保存されます。</Text>
        </div>
    );
};