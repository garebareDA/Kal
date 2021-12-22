import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useApiKey } from './hooks/api';
import { useTheme } from './hooks/theme';

import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { NotSee } from './routes/NotSee';
import { Article } from './routes/Article';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from './style/Theme';

export const App: React.FC = () => {
    const { apiKey } = useApiKey();
    const { theme, toggleTheme } = useTheme();
    const currentTheme = lightTheme;

    return (
        <div>
            <ThemeProvider theme={currentTheme}>
                <Routes>
                    <Route path="/" element={<Home apiKey={apiKey} />} />
                    <Route path="/article/:id" element={<Article apiKey={apiKey} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notsee" element={<NotSee />} />
                </Routes>
            </ThemeProvider>
        </div>

    );
}