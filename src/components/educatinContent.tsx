import Bank from '../assets/bank.svg';
export const EducationContent = () => {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-row">
                <div className="me-2">
                    <img src={Bank} className="scale-header-image with-lg" />
                </div>

                <div className="flex-fill">
                    <div className="d-flex flex-column flex-lg-row">
                        <h5 className="m-0">
                            Masters in Information Communication Technology
                        </h5>
                        <div className="px-1 d-none d-lg-block">-</div>
                        <i>University of Wollongong, NSW, Australia</i>
                    </div>
                </div>
                <h6>2005</h6>
            </div>
            <div className="d-flex flex-row">
                <div className="me-2">
                    <img src={Bank} className="scale-header-image with-lg" />
                </div>

                <div className="flex-fill">
                    <div className="d-flex flex-column flex-lg-row">
                        <h5 className="m-0">Bachelor of Computer Science</h5>
                        <div className="px-1 d-none d-lg-block">-</div>
                        <i>University of Pune, India</i>
                    </div>
                </div>
                <h6>2000</h6>
            </div>
        </div>
    );
};
