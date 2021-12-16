import * as React from 'react';
import { User} from 'firebase/auth'

import { useAuth } from '../hooks/auth';

export const Card : React.VFC<{logOut:() => Promise<void>, user:User}> = ({logOut, user}) => {
    return (
        <div>
            <div>{user.displayName}</div>
            <img src={user.photoURL as string} alt= {user.displayName as string}/>
            <div>
                <button onClick={() => {logOut()}}>ログアウト</button>
            </div>
            <div>アカウントの削除</div>
        </div>
    );
}