"use client"
import { useForm } from 'react-hook-form';

function StudentAdmission() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1 className='text-xl p-4 shadow-lg flex justify-center'>Student Admission Form</h1>
      <div className='max-w-xl m-auto  mt-12 shadow-xl p-12'>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className='flex flex-col mb-4'>
              <label className='text-slate-600'>User Name</label>
              <input
                {...register("userName", { required: true, maxLength:15, minLength:3 })}
                type='text'
                placeholder='Enter Your Name'
                className='border border-slate-400 px-4 rounded-md outline-none py-1'
              />
              {errors.userName && errors.userName.type == 'required' && (
                <div className='text-red-700'>Name is Required</div>
              )}

              {
                errors.userName && errors.userName.type=='maxLength' && <div className='text-red-500'>Name should be less than 15 characters</div>
              }

              {
                errors.userName && errors.userName.type=='minLength'&& <div className='text-red-500'>Name should be three character longer</div>
              }
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor="#" className='text-slate-600'>Enter Email</label>
              <input 
              {...register ("email",{required:true})}
              
              type="email" 
              placeholder='Enter Your Email' 
              className='border border-slate-400 px-4 rounded-md outline-none py-1'
              />
              {
                errors.email && errors.email.type=='required' && <div className='text-red-600'>Email Required</div>
              }
            </div>
            <div className='flex flex-col mb-'>
              <label htmlFor="#" className='text-slate-600'>Your Password</label>
              <input
              {...register("password",{required:true, maxLength:15,minLength:8})}
              type="password" 
              placeholder='Enter Password'
              className='border border-slate-400 px-4 rounded-md outline-none py-1'
               />
               {
                errors.password && errors.password.type=='required' && <div className='text-red-600'>plz Enter Your password</div>
               }

               {
                errors.password && errors.password.type=='maxLength' && <div className='text-red-600'>Password Length should less than 15</div>
               }

               {
                errors.password && errors.password.type=='minLength' && <div className='text-red-600'>Password should be at least above of 8 </div>
               }
            </div>
            <div>
              <input
              
                type='submit'
                value='Register'
                className='bg-slate-600 text-white px-10 py-2 mt-10 rounded-lg hover:bg-slate-700 transition-all duration-700 cursor-pointer'
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentAdmission;
