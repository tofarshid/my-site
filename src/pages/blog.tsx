import { useEffect, useState } from 'react';
import CodeSnippet from '../components/codeSnippet/test';
import FPCodeBlock from '../components/codeSnippet/fpCodeBlock';

export const Blog = () => {
    const [contactName, setContactname] = useState('');

    const [email, setEmail] = useState('');

    const [error, setError] = useState(false);
    const [popup, setPopup] = useState(false);
    const [contactRequreid, setContactRequired] = useState(false);
    const [emailRequired, setEmailRequired] = useState(false);

    const [validate, setValidate] = useState(false);

    const onChangeContactName = (v: string) => setContactname(v);
    const onChangeEmail = (v: string) => setEmail(v);

    const onSubmit = () => {
        contactName.length === 0
            ? setContactRequired(true)
            : setContactRequired(false);
        email.length === 0 ? setEmailRequired(true) : setEmailRequired(false);
    };

    const validateEmail = (email: string) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    useEffect(() => {
        if (validate) {
            setTimeout(() => {
                setValidate(false);
                setPopup(true);
            }, 2000);
        }
    }, [validate]);

    useEffect(() => {
        validateEmail(email) === null ? setError(true) : setError(false);
    }, [email]);

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
                                    <h5 className="card-title">
                                        Responsive Form
                                    </h5>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <u>
                                                <i>A vanilla bootstrap form</i>
                                            </u>
                                            <form>
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Contact Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputContactName"
                                                        aria-describedby="contactNameHelp"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                    />
                                                </div>
                                                <div className="mb-3">
                                                    <label>Comments</label>

                                                    <textarea
                                                        className="form-control"
                                                        placeholder="Leave a comment here"
                                                        id="floatingTextarea2"
                                                        style={{
                                                            height: '100px',
                                                        }}
                                                    ></textarea>
                                                </div>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary"
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>

                                        <div
                                            className="col-sm-12 col-md-6 mt-4 mt-md-0"
                                            style={{ position: 'relative' }}
                                        >
                                            {validate && (
                                                <>
                                                    <div className="overlay"></div>
                                                    <div
                                                        className="spinner-border spinner"
                                                        role="status"
                                                    >
                                                        <span className="visually-hidden">
                                                            Loading...
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                            <form>
                                                <u>
                                                    <i>With validation</i>
                                                </u>
                                                <div className="mb-3 form-group required">
                                                    <label className="form-label control-label">
                                                        Contact Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputContactName"
                                                        aria-describedby="contactNameHelp"
                                                        value={contactName}
                                                        onChange={(e) =>
                                                            onChangeContactName(
                                                                e.target.value
                                                            )
                                                        }
                                                    />

                                                    {contactRequreid && (
                                                        <div
                                                            id="emailHelp"
                                                            className="form-text"
                                                            style={{
                                                                color: 'red',
                                                            }}
                                                        >
                                                            Please provide
                                                            contact name
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3 form-group required">
                                                    <label className="form-label control-label">
                                                        Email address
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        aria-describedby="emailHelp"
                                                        value={email}
                                                        onChange={(e) =>
                                                            onChangeEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <div
                                                        id="emailHelp"
                                                        className="form-text"
                                                    >
                                                        {email.length < 2 ? (
                                                            'We will never share your email with anyone else.'
                                                        ) : error ? (
                                                            <span
                                                                style={{
                                                                    color: 'red',
                                                                }}
                                                            >
                                                                Please provide a
                                                                valid email
                                                                address
                                                            </span>
                                                        ) : (
                                                            ''
                                                        )}
                                                    </div>

                                                    {emailRequired && (
                                                        <div
                                                            id="emailHelp"
                                                            className="form-text"
                                                            style={{
                                                                color: 'red',
                                                            }}
                                                        >
                                                            Please provide email
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="mb-3">
                                                    <div className="form-floating">
                                                        <textarea
                                                            className="form-control"
                                                            placeholder="Leave a comment here"
                                                            id="floatingTextarea2"
                                                            style={{
                                                                height: '100px',
                                                            }}
                                                        ></textarea>
                                                        <label>Comments</label>
                                                    </div>
                                                </div>
                                                <button
                                                    type="button"
                                                    className="btn btn-primary"
                                                    onClick={onSubmit}
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        FP - Functional Programming
                                    </h5>
                                    <p className="card-text">
                                        <FPCodeBlock />
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
