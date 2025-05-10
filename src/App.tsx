// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { Home } from './pages/home';
import { Blog } from './pages/blog';
import { Pg } from './pages/pg';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blog" element={<Blog />} />
                <Route path="playground" element={<Pg />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
