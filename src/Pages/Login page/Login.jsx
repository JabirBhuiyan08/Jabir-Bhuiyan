import { useContext, useState } from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const from = location.state?.from?.pathname || '/';

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            console.log('Logged in user:', result.user);
            form.reset();
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message);  // Display error to the user
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col md:flex-row-reverse">
                <div className="text-center md:w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Sign in to access exclusive features and manage your account.</p>
                </div>
                <div className="card md:w-1/2 max-w-sm shadow-2xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="input input-bordered text-black" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="input input-bordered text-black" 
                                required 
                            />
                           
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}  {/* Display errors */}

                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit" disabled={loading}>
                                {loading ? "Logging in..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
