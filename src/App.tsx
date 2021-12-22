import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useApiKey } from './hooks/api';
import { useTheme } from './hooks/theme';

import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { Article } from './routes/Article';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/Theme';
import { GlobalStyle } from './style/Global';

export const App: React.FC = () => {
    const { apiKey } = useApiKey();
    const { theme, toggleTheme } = useTheme();
    const currentTheme = theme === 'light' ? lightTheme : darkTheme;

    return (
        <div>
            <ThemeProvider theme={currentTheme}>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} apiKey={apiKey} />} />
                    <Route path="/article/:id" element={<Article theme={theme} toggleTheme={toggleTheme} apiKey={apiKey} />} />
                    <Route path="/login" element={<Login theme={theme} toggleTheme={toggleTheme} />} />
                </Routes>
            </ThemeProvider>
        </div>

    );
}