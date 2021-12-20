import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useApiKey } from './hooks/api';

import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { NotSee } from './routes/NotSee';
import { Article } from './routes/Article';

export const App: React.FC = () => {
    const { apiKey } = useApiKey();
    return (
        <Routes>
            <Route path="/" element={<Home apiKey={apiKey} />} />
            <Route path="/article/:id" element={<Article apiKey={apiKey} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notsee" element={<NotSee />} />
        </Routes>
    );
}