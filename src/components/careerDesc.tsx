type prop = {
    list: string[];
};

export const CareerDesc = ({ list }: prop) => {
    return (
        <ul className="mt-1 mb-2" style={{ paddingLeft: '20px' }}>
            <DescList list={list} />
        </ul>
    );
};

const DescList = ({ list }: prop) => {
    return list.map((item) => (
        <li>
            <p className="m-0 mb-1">{item}</p>
        </li>
    ));
};
