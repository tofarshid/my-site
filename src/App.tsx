import './App.scss';

import 'bootstrap/dist/css/bootstrap.css';
import { Header } from './components/header';
import { Content } from './components/content';

function App() {
    return (
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
        // <div className="container">
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     <p>
        //         Lorem Ipsum is simply dummy text of the printing and typesetting
        //         industry. Lorem Ipsum has been the industry's standard dummy
        //         text ever since the 1500s, when an unknown printer took a galley
        //         of type and scrambled it to make a type specimen book. It has
        //         survived not only five centuries, but also the leap into
        //         electronic typesetting, remaining essentially unchanged. It was
        //         popularised in the 1960s with the release of Letraset sheets
        //         containing Lorem Ipsum passages, and more recently with{' '}
        //     </p>
        //     {/* <Header />
        //     <Content /> */}
        // </div>
    );
}

export default App;
