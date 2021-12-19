import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from './routes/Home';
import { Login } from './routes/Login';
import { NotSee } from './routes/NotSee';
import { Article } from './routes/Article';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/login" element={<Login />} />
            <Route path="/notsee" element={<NotSee />} />
        </Routes>
    );
}