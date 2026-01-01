// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/home';
import { Blog } from './pages/blog';
import { Pg } from './pages/pg';
import { ReactHooks } from './pages/reactHooks';
import { createContext, useState } from 'react';
export const ThemeContext = createContext(() => {});
function App() {
    const [close, setClose] = useState(false);
    const onClose = () => setClose(!close);
    return (
        <ThemeContext.Provider value={onClose}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="playground" element={<Pg />} />
                    <Route path="hooks" element={<ReactHooks />} />
                </Routes>
            </BrowserRouter>
        </ThemeContext.Provider>
    );
}
export default App;
