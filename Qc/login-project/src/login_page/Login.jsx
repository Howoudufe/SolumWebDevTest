import './Login.css';
import { useState } from 'react';

const Login = () => {

    // Simulated valid accounts
    const validUsers = [
        { email: "test@example.com", password: "Test1234!" },
        { email: "user@example.com", password: "User.5678" }
    ];

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((data) => ({...data, [name]: value}));
    }

    // Check if the pw format is valid
    const validatePassword = (password) => {
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,16}$/;
        return regex.test(password);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
 
        if (!data.email) {
            setError("Email cannot be empty.");
            setLoading(false);
            return;
        }

        // Check if the user (email) exist
        const user = validUsers.find((u) => u.email === data.email);

        if (!user) {
            setError("This email does not exist.");
            setLoading(false);
            return;
        }

        // Check if the password valid
        if (!validatePassword(data.password)) {
            setError(
                "Password must be 8–16 characters, include at least one uppercase letter, one lowercase letter, one number, and one symbol."
            );
            setLoading(false);
            return;
        }

        // Check if the pw is matched
        if (data.password !== user.password) {
            setError("Incorrect password.");
            setLoading(false);
            return;
        }

        setLoading(false);
        setLoggedIn(true);
    };

    // Log out
    const handleLogout = () => {
        setLoggedIn(false);
        setData({ email: "", password: "" });
        setError("");
    };

    // the welcome page
    if (loggedIn) {
        return (
            <div className="vh-100 d-flex flex-column justify-content-center align-items-center login-background">
                <div className="card shadow-lg p-4 text-center" style={{ maxWidth: "450px" }}>
                    <h2 className="mb-3">Welcome, {data.email}!</h2>
                    <button className="btn btn-dark btn-lg" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        );
    }

    return(
        <div className="bg-light d-flex align-items-center justify-content-center vh-100 login-background">
            <div className="card shadow-lg w-100" style={{maxWidth: '450px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title">Log in</h1>
                    </div>
                    <div className="mt-4 text-start">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label text-muted mb-1">
                                    Email Address
                                </label>
                                <input type='text' name='email' id='email' placeholder='username@example.com' className='form-control' onChange={onChangeHandler} value={data.email}/>
                            </div>
                            <div className="mb-2 position-relative">
                                <label htmlFor="password" className="form-label text-muted mb-1">
                                    Password
                                </label>
                                <input type={show ? "text" : "password"} name='password' id='password' placeholder='Enter your password' className='form-control pe-5' onChange={onChangeHandler} value={data.password}/>
                                <i className={`bi ${show ? "bi-eye" : "bi-eye-slash"} position-absolute`}
                                    style={{
                                    right: "12px",
                                    top: "75%",
                                    transform: "translateY(-50%)",
                                    cursor: "pointer",
                                    fontSize: "1.2rem",
                                    color: "#6c757d",
                                    }}
                                    onClick={() => setShow(!show)}
                                ></i>
                            </div>
                            <div className="mb-4 text-center">
                                <a href="#" className="card-link link-secondary">Forgot password?</a>
                            </div>
                            {error && (
                                <div className="alert alert-danger py-2 mt-3" role="alert">
                                    {error}
                                </div>
                            )}
                            <div className="d-grid">
                                <button type="Submit" className="btn btn-dark btn-lg" disabled={loading}>
                                    {loading ? "Loading..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;