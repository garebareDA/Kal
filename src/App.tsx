import React, {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';

import {Home} from './routes/Home';
import {Login} from './routes/Login';

import { useApiKey } from './hooks/api';

export const App: React.FC = () => {
    const [apiKey, setApiKey] = useState<string | null>(null);

    React.useEffect
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}