import Bank from '../assets/bank.svg';

type Props = {
    jobTitle: string;
    orgTitle: string;
    fromAndTo: string;
    duration: string;
};
import Briefcase from '../assets/briefcase.svg';
export const CareerHeading = ({
    jobTitle,
    orgTitle,
    fromAndTo,
    duration,
}: Props) => {
    return (
        <div className="d-flex flex-row">
            <div className="me-2">
                <img src={Briefcase} className="scale-header-image with-lg" />
            </div>

            <div className="flex-fill">
                <div className="d-flex flex-column flex-lg-row">
                    <h5 className="m-0">{jobTitle}</h5>
                    <div className="px-1 d-none d-lg-block">-</div>
                    <i>{orgTitle}</i>
                </div>
            </div>
            <h6>{`${fromAndTo} (${duration})`}</h6>
        </div>
    );
};
