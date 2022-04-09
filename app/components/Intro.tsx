import * as React from 'react';

export const Intro: React.VFC = () => {
    return (
        <div>
            <div>Kalは<a href="https://twitter.com/garebare521">ガレバレ</a>のブログです。 </div>
            <div>Twitterでフォローされてないと見ることはできません。</div>
            <div>フォローされているかを確認するためにログインする必要があります。</div>
            <div>
                <div>アカウントのID以外は使用しません。</div>
                <div>Firebase AuthCationに保存されます。</div>
            </div>
        </div>
    );
};