import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import SocalLogin from '../Sheared/ScailLogin/SocalLogin';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const{createUser}=useContext(AuthContext)

  const navigate=useNavigate()
    const onSubmit = data => {
        
  console.log(data);
  createUser(data.email,data.password)
  .then(result=>{
    const savedUser= {name:data.name, email:data.email}
    const loggedUser=result.user
    
    fetch('https://bistro-boss-server-lemon-six.vercel.app/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(savedUser)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
      reset()
      Swal.fire({
        position:'top-center',
        icon:'success',
        title:'user created Successfully',
        showConfirmButton:false,
        timer:1500
      });
      navigate('/')
      }
    })
  })
    };




    return (
      <>
      <Helmet>
        <title>Bistro Boss |sign up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered" />
                {errors.email&& <span className='text-red-600'>email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true, minLength:6, maxLength: 20,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} name='password' placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be 6 characters</p>}
                {errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less then 20 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
                <input type="submit"  className="btn btn-primary" value="Sign up" />
              </div>
            </form>
            <p><small>Already have an account? <Link to='/login'>Plese Login</Link></small></p>
            <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;