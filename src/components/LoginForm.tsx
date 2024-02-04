import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Loading from "./Loading";
import Swal from 'sweetalert2';

function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const ApiUrl: string = 'https://hotel-service-center.onrender.com';
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onTouched' });
    const onSubmit = async (data: any) => {
        const { email, password } = data;
        const formData = {
            email,
            password
        }
        const res = await axios.post(`${ApiUrl}/api/v1/user/login`, formData);
        const status = res.data;
        setIsLoading(true);
        try {       
            if (status) {
                Swal.fire({
                    text: '登入成功!',
                    icon: 'success',
                })
            }
            setIsLoading(false);
        } catch (error) {
            const {message} = error.response.data;
            if(error instanceof Error){
                Swal.fire({
                    title: '登入失敗!',
                    text: message,
                    icon: 'error',
                  })
             }
            setIsLoading(true);
        }
        
        
    }
    return (
        <>
            <Loading isLoading={isLoading} />
            <div className='loginForm'>
                <div className="mb-5">
                    <p className='text-primary mb-2'>享樂酒店，誠摯歡迎</p>
                    <h1 className='text-white fw-bold'>立即開始旅程</h1>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className='text-white mb-2'>電子信箱</label>
                        <input type="email" id='email' className={`form-control rounded ${errors?.email ? 'is-invalid' : ''} `} placeholder='hello@example.com'
                            {...register('email', {
                                required: 'email 必填',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email 格式不正確',
                                },
                            })} />
                        {errors.email && (<div className='invalid-feedback mt-2'>{errors.email?.message?.toString()}</div>)}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='text-white mb-2'>密碼</label>
                        <input type="password" id='password' className={`form-control rounded ${errors?.password ? 'is-invalid' : ''}`} placeholder='請輸入密碼'
                            {...register('password', {
                                required: '密碼必填',
                            })} />
                        {errors.password && (<div className='invalid-feedback mt-2'>{errors.password?.message?.toString()}</div>)}
                    </div>
                    <div className="mb-5">
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" id="remember" className='form-check-input' />
                                <label htmlFor="remember" className='text-white'>記住帳號</label>
                            </div>
                            <div className="forget">
                                <a href="#">忘記密碼?</a>
                            </div>
                        </div>
                    </div>

                    <button type='submit' className='btn w-100 py-3 rounded mb-5 btn-login' style={{ background: 'white' }}>會員登入</button>
                    <span className='text-white'>沒有會員嗎?</span><NavLink to='/auth/sign_up' className='ms-2'>前往註冊</NavLink>
                </form>
            </div>
        </>
    )
}
export default LoginForm