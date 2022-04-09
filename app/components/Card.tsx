import * as React from 'react';
import { User } from 'firebase/auth';

type Props = {
    logOut: () => Promise<void>
    deleteAccount: () => Promise<void>
    user: User,
};

export const Card: React.VFC<Props> = ({ logOut, deleteAccount, user }:Props) => {
    return (
        <div>
            <div>アカウント</div>
            <div>
                <img src={user.photoURL as string} alt={user.displayName as string} />
                <div>{user.displayName}</div>
            </div>

            <div>
                <button onClick={() => { logOut(); }}>
                    <div>ログアウト</div>
                </button>
            </div>
            <div>
                <button onClick={() => { deleteAccount(); }}>
                    <div>アカウント削除</div>
                </button>
            </div>
            <div>アカウントを削除してもまたログインできます。</div>
            <div>ただガレバレの逆鱗に触れると帰ってこれません。</div>
        </div>
    );
};