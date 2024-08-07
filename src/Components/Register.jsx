import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)
    

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email, password, name);

        // create user in firebase
        createUser(email, password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error);
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center p-8">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                </div>
                <div className="card p-4 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='mt-4'>
                            <p>Already have an account? please <Link to='/login' className='text-blue-600'>Login</Link></p>
                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;<h3>This is register page!</h3>