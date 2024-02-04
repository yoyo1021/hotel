import { NavLink } from "react-router-dom"

function LoginForm() {
    return (
        <>
            <div className='loginForm'>
                <div className="mb-5">
                    <p className='text-primary mb-2'>享樂酒店，誠摯歡迎</p>
                    <h1 className='text-white fw-bold'>立即開始旅程</h1>
                </div>
                <form >
                    <div className="mb-3">
                        <label htmlFor="email" className='text-white mb-2'>電子信箱</label>
                        <input type="email" id='email' className='form-control rounded' placeholder='hello@example.com' />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className='text-white mb-2'>密碼</label>
                        <input type="password" id='password' className='form-control rounded' placeholder='請輸入密碼' />
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