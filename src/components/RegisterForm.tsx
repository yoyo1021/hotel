import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap-icons/font/bootstrap-icons.css";
import Loading from "./Loading";
import Swal from 'sweetalert2';

function RegisterForm() {
    const formStep1 = useRef<HTMLDivElement>(null);
    const formStep2 = useRef<HTMLDivElement>(null);
    const step1 = useRef<HTMLHeadingElement>(null);
    const stepCompleted = useRef<HTMLElement>(null);
    const stepperItem2 = useRef<HTMLLIElement>(null);
    const [addressData, setAddressData] = useState([]);
    const [chosenCity, setChosenCity] = useState('');
    const [_, setZipCode] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const ApiUrl: string = 'https://hotel-service-center.onrender.com';

    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm({ mode: 'onTouched' })
    const onSubmit = async (data: any) => {
        const { name, email, password, phone, birthday, zipcode, detail } = data;
        const formData = {
            name: name,
            email: email,
            password: password,
            phone: phone,
            birthday: new Date(birthday).toLocaleDateString(),
            address: {
                zipcode: Number(zipcode),
                detail: detail
            }
        }
        setIsLoading(true);
        try {
            const res = await axios.post(`${ApiUrl}/api/v1/user/signup`, formData);
            const { status } = res;
            if (status) {
                Swal.fire({
                    text: '註冊成功!',
                    icon: 'success',
                })
            }
        } catch (error: any) {
            const { message } = error.response.data;
            Swal.fire({
                title: '註冊失敗!',
                text: message,
                icon: 'error',
            })
        }
        setIsLoading(false);
    }
    useEffect(() => {
        (async () => {
            const result = await axios.get('/src/assets/taiwan.json');
            //console.log(result);
            setAddressData(result.data);
        })();
    }, [])

    function nextStep() {
        formStep1.current?.classList.add('d-none');
        step1.current?.classList.add('d-none');
        stepCompleted.current?.classList.remove('d-none');
        stepCompleted.current?.classList.add('d-flex');
        formStep2.current?.classList.remove('d-none');
        formStep2.current?.classList.add('d-block');
        stepperItem2.current?.classList.add('active');
    }

    function PrevStep() {
        formStep1.current?.classList.remove('d-none');
        step1.current?.classList.remove('d-none');
        stepCompleted.current?.classList.add('d-none');
        stepCompleted.current?.classList.remove('d-flex');
        formStep2.current?.classList.add('d-none');
        formStep2.current?.classList.remove('d-block');
        stepperItem2.current?.classList.remove('active');
    }

    return (
        <>
            <div className='loginForm'>
                <Loading isLoading={isLoading} />
                <div className="mb-5">
                    <p className='text-primary mb-2'>享樂酒店，誠摯歡迎</p>
                    <h1 className='text-white fw-bold'>立即註冊</h1>
                    <div >
                        <ol className="stepper px-0">
                            <li className="stepper_item active" >
                                <h3 className="stepper_num mb-2" ref={step1}> 1 </h3>
                                <i className="bi bi-check-lg stepper_num mb-2 completed d-none" ref={stepCompleted}></i>
                                <p className="stepper_title">輸入信箱及密碼</p>
                            </li>
                            <li className="stepper_item" ref={stepperItem2}>
                                <h3 className="stepper_num mb-2" >2</h3>
                                <p className="stepper_title">填寫基本資料</p>
                            </li>
                        </ol>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="formStep1" ref={formStep1} >
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
                            <label htmlFor="checked" className='text-white mb-2'>確認密碼</label>
                            <input type="password" id='checked' className={`form-control rounded ${errors?.checked ? 'is-invalid' : ''}`} placeholder='請再輸入一次密碼'
                                {...register('checked', {
                                    validate: (match) => {
                                        const password = getValues('password');
                                        return match === password || '與密碼不符合'
                                    }
                                })} />
                            {errors.checked && (<div className='invalid-feedback mt-2'>{errors.checked?.message?.toString()}</div>)}
                        </div>
                        <button type='button' className='btn w-100 py-3 rounded mb-3 btn-login' style={{ background: 'white' }} onClick={() => { nextStep() }}>下一步</button>
                    </div>
                    <div className="formStep2 d-none" ref={formStep2}>
                        <div className="mb-3">
                            <label htmlFor="name" className='text-white mb-2'>姓名</label>
                            <input type="text" id='name' className={`form-control rounded ${errors.name ? 'is-invalid' : ''}`} placeholder='請輸入姓名'
                                {...register('name', {
                                    required: '姓名必填'
                                })} />
                            {errors.name && (<div className='invalid-feedback mt-2'>{errors.name?.message?.toString()}</div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className='text-white mb-2'>手機號碼</label>
                            <input type="tel" id='phone' className={`form-control rounded ${errors.phone ? 'is-invalid' : ''}`} placeholder='請輸入手機號碼'
                                {...register('phone', {
                                    required: '手機號碼必填',
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: '手機號碼為10碼',
                                    },
                                })} />
                            {errors.phone && (<div className='invalid-feedback mt-2'>{errors.phone?.message?.toString()}</div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="birthday" className='text-white mb-2'>生日</label>
                            <input type="date" id='birthday' className={`form-control rounded ${errors.birthday ? 'is-invalid' : ''}`}
                                {...register('birthday', {
                                    required: '請選擇生日'
                                })} />
                            {errors.birthday && (<div className='invalid-feedback mt-2'>{errors.birthday?.message?.toString()}</div>)}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className='text-white mb-2'>地址</label>
                            <div className="row mb-3 g-2">
                                <div className="col-6">
                                    <select className={`form-select rounded ${errors.city ? 'is-invalid' : ''}`} id="city"
                                        {...register('city', {
                                            required: '請選擇縣市'
                                        })}
                                        onChange={(e) => setChosenCity(e.target.value)}
                                    >
                                        <option value="">請選擇縣市</option>
                                        {addressData.map((city: any) => {
                                            return (
                                                <option value={city['CityName']} key={city['CityEngName']}>{city['CityName']}</option>
                                            )
                                        })}
                                    </select>
                                    {errors.city && (<div className='invalid-feedback mt-2'>{errors.city?.message?.toString()}</div>)}
                                </div>
                                <div className="col-6">
                                    <select className={`form-select rounded ${errors.zipcode ? 'is-invalid' : ''}`} id="zipcode" disabled={!chosenCity}
                                        {...register('zipcode', {
                                            required: '請選擇鄉鎮市區'
                                        })}
                                        onChange={(e) => setZipCode(e.target.value)}
                                    >
                                        <option value="">請選擇鄉鎮市區</option>
                                        {/* {addressData.find((city: any) => city.CityName === chosenCity)?.AreaList.map((area: any) => {
                                            return <option value={area.ZipCode} key={area.AreaName}>{area.AreaName}</option>
                                        })} */}
                                    </select>
                                    {errors.zipcode && (<div className='invalid-feedback mt-2'>{errors.zipcode?.message?.toString()}</div>)}
                                </div>
                            </div>
                            <input type="text" id="detail" className={`form-control rounded ${errors.detail ? 'is-invalid' : ''}`}
                                {...register('detail', {
                                    required: '請輸入詳細地址'
                                })}
                                placeholder="請輸入詳細地址"
                            />
                            {errors.detail && (<div className='invalid-feedback mt-2'>{errors.detail?.message?.toString()}</div>)}
                        </div>
                        <div className="mb-5">
                            <input type="checkbox" id="agree" className={`form-check-input me-2 ${errors.agree ? 'is-invalid' : ''}`}
                                {...register('agree', {
                                    required: '請同意本網站個資使用規範'
                                })} />
                            <label htmlFor="agree" className="text-white">我已閱讀並同意本網站個資使用規範</label>
                            {errors.agree && (<div className='invalid-feedback mt-2'>{errors.agree?.message?.toString()}</div>)}
                        </div>
                        <button type='button' className='btn w-100 py-3 rounded mb-3 btn-login' style={{ background: 'white' }} onClick={() => PrevStep()}>上一步</button>
                        <button type='submit' className='btn w-100 py-3 rounded mb-3 btn-login' style={{ background: 'white' }} disabled={!isValid}>完成註冊</button>
                    </div>
                </form>
                <span className='text-white'>已經有會員了嗎?</span><NavLink to='/auth/login' className='ms-2'>立即登入</NavLink>
            </div>
        </>
    )
}
export default RegisterForm