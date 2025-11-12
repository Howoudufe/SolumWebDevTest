import './Login.css';

const Login = () => {

    return(
        <div className="bg-light d-flex align-items-center justify-content-center vh-100 login-background">
            <div className="card shadow-lg w-100" style={{maxWidth: '450px'}}>
                <div className="card-body">
                    <div className="text-center">
                        <h1 className="card-title">Log in</h1>
                    </div>
                    <div className="mt-4 text-start">
                        <form>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label text-muted mb-1">
                                    Email Address
                                </label>
                                <input type='text' name='email' id='email' placeholder='username@example.com' className='form-control'/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="form-label text-muted mb-1">
                                    Password
                                </label>
                                <input type='password' name='password' id='password' placeholder='Enter your password' className='form-control'/>
                            </div>
                            <div className="mb-4 text-center">
                                <a href="#" class="card-link link-secondary">Forgot password?</a>
                            </div>
                            <div className="d-grid">
                                <button type="Submit" className="btn btn-dark btn-lg">
                                    Submit
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