import { ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../App';

export const ReactHooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('hi');
        setCount(count + 1);
    }, [close]);

    useEffect(() => {
        console.log('count has increased');
    }, [count]);

    return (
        <>
            <Form />
        </>
    );
};

function Form() {
    return (
        <Panel title="Welcome">
            <Button>Sign up</Button>
            <Button>Log in</Button>
        </Panel>
    );
}
type PanelProp = {
    title: string;
    children: ReactNode;
};
const Panel = ({ title, children }: PanelProp) => {
    return (
        <section>
            <h1>{title}</h1>
            {children}
        </section>
    );
};

type ButtonProp = {
    children: ReactNode;
};

const Button = ({ children }: ButtonProp) => {
    const theme = useContext(ThemeContext);

    return (
        <>
            <button onClick={() => theme()}>{children}</button>
        </>
    );
};
