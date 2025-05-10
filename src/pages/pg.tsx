import { ReactNode, useState } from 'react';

interface CardProp {
    children: ReactNode;
    key: string;
}

interface HeadingProp {
    children: ReactNode;
}

export const Card: React.FC<CardProp> = ({ children, key }) => {
    return (
        <div className="col-sm-12 mb-4" key={key}>
            {children}
        </div>
    );
};

export const Heading: React.FC<HeadingProp> = ({ children }) => {
    return <h3>{children}</h3>;
};

export type ContextProp = {
    show: boolean;
    setShow: (v: boolean) => void;
};

export const Pg = () => {
    const [toggle, setToggle] = useState(false);
    const onClick = () => setToggle(!toggle);
    return (
        <div className="master-container" style={{ marginBottom: '300px' }}>
            <div>
                <div className="container">
                    <div className="row" style={{ padding: '32px 0 16px 0' }}>
                        <Card key={`key-1`}>
                            <Heading>With Context</Heading>
                        </Card>

                        <Card key={`key-2`}>
                            <Heading>This is heading</Heading>
                            {toggle && (
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled
                                    it to make a type specimen book. It has
                                    survived not only five centuries, but also
                                    the leap into electronic typesetting,
                                    remaining essentially unchanged.
                                </p>
                            )}
                        </Card>
                        <div className="col-sm-12 mb-4">
                            <Heading>The list</Heading>
                            <ul>
                                {ListOfFruits.map((item, index) => (
                                    <li key={`fruit-${index}`}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-sm-12 mb-4">
                            <button type="button" onClick={onClick}>
                                Toggle
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
