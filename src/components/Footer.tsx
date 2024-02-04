import logo from '../assets/images/桌機版/logo.png'
function Footer() {
    return (<>
        <section className="bg-black py-8">
            <div className="container ">
                <div className="row row-cols-1 row-cols-md-2 pb-8">
                    <div className="col">
                        <img src={logo} alt="" className="footer-logo mb-5" />
                        <div className="d-flex mb-5">
                            <a href='#' className="social-media me-3" >
                                <i className="bi bi-line"></i>
                            </a>
                            <a href="#" className="social-media">
                                <i className="bi bi-instagram" ></i>
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-block d-lg-flex">
                            <div className="ms-auto">
                                {/* <div className="row row-cols-1 row-cols-md-2 text-white">
                                    <div className="col">
                                        <ul className='px-0' style={{listStyle:'none'}}>
                                            <li className='mb-lg-5 mb-3'>
                                                <p className='mb-2'>TEL</p>
                                                <a href='tel:+886-7-1234567'>+886-7-1234567</a>
                                            </li>
                                            <li className='mb-3'>
                                                <p className='mb-2'>FAX</p>
                                                <a href='tel:+886-7-1234567'>+886-7-1234567</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul className='px-0' style={{listStyle:'none'}}>
                                            <li className='mb-lg-5 mb-2'>
                                                <p className='mb-2'>MAIL</p>
                                                <a href='mailto:elh@hexschool.com'>elh@hexschool.com</a>
                                            </li>
                                            <li className='mb-3'>
                                                <p className='mb-2'>WEB</p>
                                                <a href='#'>www.elhhexschool.com.tw</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="d-block d-lg-flex justify-content-between text-white ">
                                    <div className="me-8">
                                        <ul className='px-0' style={{listStyle:'none'}}>
                                            <li className='mb-lg-5 mb-3'>
                                                <p className='mb-2'>TEL</p>
                                                <a href='tel:+886-7-1234567'>+886-7-1234567</a>
                                            </li>
                                            <li className='mb-3'>
                                                <p className='mb-2'>FAX</p>
                                                <a href='tel:+886-7-1234567'>+886-7-1234567</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="">
                                    <ul className='px-0' style={{listStyle:'none'}}>
                                            <li className='mb-lg-5 mb-2'>
                                                <p className='mb-2'>MAIL</p>
                                                <a href='mailto:elh@hexschool.com'>elh@hexschool.com</a>
                                            </li>
                                            <li className='mb-3'>
                                                <p className='mb-2'>WEB</p>
                                                <a href='#'>www.elhhexschool.com.tw</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <p className='text-white'>806023 台灣高雄市新興區六角路123號</p>
                    </div>
                    <div className="col">
                        <div className="d-block d-md-flex">
                        <p className='text-white ms-auto'>© 享樂酒店 2023 All Rights Reserved.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

    </>)
}

export default Footer