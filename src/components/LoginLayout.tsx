import { Outlet } from 'react-router-dom';
import registerImg from '../assets/images/桌機版/register.png';

function LoginLayout(){
    return(
        <section className='bg-black' style={{paddingTop:'120px'}}>
        <div className="row row-cols-lg-2 row-cols-1  g-0">
          <div className="col d-none d-lg-flex">
            <img src={registerImg} className='w-100 object-cover' alt="" />
          </div>
          <div className="col l_login ">
            <Outlet />
          </div>
        </div>
        </section>
    )
}
export default LoginLayout