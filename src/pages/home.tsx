import { Content } from '../components/content';
import { Header } from '../components/header';

export const Home = () => {
    return (
        <>
            <div className="master-container">
                <div>
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <div className="flex-content">
                    <div className="container">
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
};
