import * as React from 'react';

const ArticleList: React.VFC<{title:string, subtitle:string, id:string}> = ({title, subtitle, id}) => {
    
    return (
        <div>
            <div>{title}</div>
            <div>{subtitle}</div>
        </div>
    );
}