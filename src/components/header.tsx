import Location from '../assets/location.svg';
import Email from '../assets/email.svg';
import Phone from '../assets/phone.svg';

import LinedIn from '../assets/linkedin.svg';
import Website from '../assets/website.svg';

export const Header = () => {
    return (
        <div className="row" style={{ padding: '32px 0 16px 0' }}>
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
                    <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end me-3 me-lg-0 my-0 mb-lg-1">
                        <a
                            type="button"
                            className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                        >
                            <div className="text-black">NSW, Australia</div>
                            <div>
                                <img
                                    src={Location}
                                    className="scale-header-image"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end me-3 me-lg-0 mb-lg-1">
                        <a
                            type="button"
                            className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                        >
                            <div className="text-black">
                                tofarshid@gmail.com
                            </div>
                            <div>
                                <img
                                    src={Email}
                                    className="scale-header-image"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end me-3 me-lg-0 mb-lg-1">
                        <a
                            type="button"
                            className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                        >
                            <div className="text-black">+61 409 544 422</div>
                            <div>
                                <img
                                    src={Phone}
                                    className="scale-header-image"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end me-3 me-lg-0 mb-lg-1">
                        <a
                            type="button"
                            href="https://www.linkedin.com/in/farshidkamal/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                        >
                            <div className="text-black">Linked In</div>
                            <div>
                                <img
                                    src={LinedIn}
                                    className="scale-header-image"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-sm-start justify-content-lg-end me-3 me-lg-0 mb-lg-1">
                        <a
                            type="button"
                            href="https://main.d3h2k6q5z31jv.amplifyapp.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="d-flex flex-row-reverse flex-lg-row text-decoration-none"
                        >
                            <div className="text-black">Website</div>
                            <div>
                                <img
                                    src={Website}
                                    className="scale-header-image"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
