import * as React from 'react';
import { User} from 'firebase/auth'

export const Card : React.VFC<{logOut:() => Promise<void>, deleteAccount:() => Promise<void>, user:User}> = ({logOut, deleteAccount, user}) => {
    return (
        <div>
            <div>{user.displayName}</div>
            <img src={user.photoURL as string} alt= {user.displayName as string}/>
            <div>
                <button onClick={() => {logOut()}}>ログアウト</button>
            </div>
            <div>
                <button onClick={() => {deleteAccount()}}>アカウント削除</button>
            </div>
        </div>
    );
}