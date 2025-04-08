type Props = {
    title: string;
};
export const SectionHeading = ({ title }: Props) => {
    return (
        <>
            <h5 className="m-0">{title}</h5>
            <hr className="m-0 my-2" />
        </>
    );
};
