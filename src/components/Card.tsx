import * as React from 'react';

type Props = {
    name: string;
    img: string
}

export const Card : React.VFC<Props> = ({name, img}) => {
    return (
        <div>
            <div>{name}</div>
            <img src={img} alt= {name}/>
            <div>ログアウト</div>
            <div>アカウントの削除</div>
        </div>
    );
}