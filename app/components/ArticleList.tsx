import { Card, Text, Link} from '@nextui-org/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string
    subtitle: string
    createdAt: string
}

export const ArticleList: React.VFC<Props> = ({ title, subtitle, createdAt }: Props) => {
    return (
        <div>
            <Text>{createdAt.split('T')[0]}</Text>
                <Text h2>
                    {title}
                </Text>
            <Text size={16}>{subtitle}</Text>
        </div>
    );
};