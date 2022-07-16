// import * as mdb from 'mdb-ui-kit';
import { useState } from "react";
import "./admin.css";

function Admin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setAdmin] = useState(false);

    function handleusername(e) {
        setUsername(e.target.value)
    };

    function handlepassword(e) {
        setPassword(e.target.value)
    };

    function handleSubmit(e) {
        if (username && password) setAdmin(true);
        else e.preventDefault();
    }


    return (
        <section className="vh-100 gradient-custom admin-section">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4 pb-5">

                                        <h2 className="fw-bold mb-2 text-uppercase">Admin Portal</h2>
                                        <p className="text-white-50 mb-5">Please enter your login and password!</p>

                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline form-white mb-4">
                                                <input autoComplete='off' type='username' id="typeEmailX" className="form-control form-control-lg" value={username} onChange={handleusername} />
                                                <label className="form-label" htmlFor="typeEmailX" required> Username* </label>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={handlepassword} />
                                                <label className="form-label" htmlFor="typePasswordX" required>Password*</label>
                                            </div>

                                            <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                            <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )

}

export default Admin;


