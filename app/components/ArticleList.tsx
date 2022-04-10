import { Card, Text, Link} from '@nextui-org/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
    title: string
    subtitle: string
    id: string
    createdAt: string
}

export const ArticleList: React.VFC<Props> = ({ title, subtitle, id, createdAt }: Props) => {
    const navigate = useNavigate();
    return (
        <Card>
            <Text>{createdAt.split('T')[0]}</Text>
            <Link icon onClick={() => { navigate(`/article/${id}`); }}>
                <Text h2>
                    {title}
                </Text>
            </Link>
            <Text size={16}>{subtitle}</Text>
        </Card>
    );
};