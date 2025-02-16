import './App.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/header';
import { Content } from './components/content';

function App() {
    return (
        <div className="master-container">
            <Header />
            <Content />
        </div>
    );
}

export default App;
