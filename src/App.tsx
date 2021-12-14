import * as React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Home} from './routes/Home';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}