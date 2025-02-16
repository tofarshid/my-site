import Location from '../assets/location.svg';
import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';

export const Header = () => (
    <div className="row mt-10">
        <div className="col-sm-12 col-lg-6">
            <div className="d-flex flex-column">
                <h1>Farshid Kamal</h1>
                <h5>
                    FULLSTACK DEVELOPER, SENIOR FRONTEND ENGINEER, SENIOR
                    DEVELOPER
                </h5>
            </div>
        </div>
        <div className="col-sm-12 col-lg-6">
            <div className="d-flex flex-wrap flex-lg-column">
                <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end mr-10">
                    <div className="d-flex flex-row-reverse flex-lg-row">
                        <div className="pr-2">NSW, Australia</div>
                        <div>
                            <img
                                src={Location}
                                className="scale-header-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end">
                    <div className="d-flex flex-row-reverse flex-lg-row">
                        <div>tofarshid@gmail.com</div>
                        <div>
                            <img src={Email} className="scale-header-image" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end">
                    <div className="d-flex flex-row-reverse flex-lg-row">
                        <div>+61 409 544 422</div>
                        <div>
                            <img src={Phone} className="scale-header-image" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end">
                    <a
                        type="button"
                        className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                    >
                        <div className="text-black">Linked In</div>
                        <div>
                            <img
                                src={Location}
                                className="scale-header-image"
                            />
                        </div>
                    </a>
                </div>
                <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end">
                    <a
                        type="button"
                        className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                    >
                        <div className="text-black">Website</div>
                        <div>
                            <img
                                src={Location}
                                className="scale-header-image"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
);
