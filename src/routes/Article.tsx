import * as React from 'react';
import styled from 'styled-components';

import { useAuth } from '../hooks/auth';
import { useApiKey } from '../hooks/api';

export const Article: React.FC = () => {
    const { logOut, deleteAccount, user } = useAuth();
    const { apiKey } = useApiKey();

    return (
        <div>
            <div>
                sonic
            </div>
        </div>
    );
};