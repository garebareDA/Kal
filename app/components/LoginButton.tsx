import * as React from 'react';

type Props = {
    logIn: () => Promise<void>
}

export const LoginButton:React.VFC<Props> = ({logIn}:Props) => {
    return (
        <div>
            <button onClick={() => { logIn(); }}>
                    Twitterでログイン
            </button>
        </div>
    );
};