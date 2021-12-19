import * as React from 'react';
import { Link } from 'react-router-dom';

export const ArticleList: React.VFC<{title:string, subtitle:string, id:string}> = ({title, subtitle, id}) => {
    return (
        <div>
            <Link to={`/article/${id}`}>{title}</Link>
            <div>{subtitle}</div>
        </div>
    );
}