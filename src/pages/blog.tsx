import CodeSnippet from '../components/codeSnippet/test';

export const Blog = () => {
    return (
        <div className="master-container" style={{ marginBottom: '300px' }}>
            <div>
                <div className="container">
                    <div className="row" style={{ padding: '32px 0 16px 0' }}>
                        <div className="col-sm-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        One Liner JavaScript
                                    </h5>
                                    <p className="card-text"></p>
                                    <CodeSnippet />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">
                                        Some quick example text to build on the
                                        card title and make up the bulk of the
                                        card's content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
