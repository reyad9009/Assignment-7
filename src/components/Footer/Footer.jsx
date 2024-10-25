import footerLogo from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer flex items-center justify-center flex-col bg-[#060919] pt-96 p-4 relative">
                <img src={footerLogo} alt="" />
                <div className="flex justify-center gap-56  text-white mt-8">
                    <nav className='w-[20%]'>
                        <h6 className="text-lg text-white">About Us</h6>
                        <p className="link link-hover text-[1rem] text-[#9b9da3] leading-8 mt-4">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>

                    <nav>
                        <h6 className="text-lg">Quick Links</h6>
                        <ul className="list-inside list-[square] text-[#9b9da3] text-[1rem] ps-1 space-y-4 mt-4">
                            <li> <a className="link link-hover" href="#">Home</a> </li>
                            <li><a className="link link-hover" href="#">Services</a></li>
                            <li><a className="link link-hover" href="#">About</a></li>
                            <li><a className="link link-hover" href="#">Contact</a></li>
                        </ul>
                    </nav>

                    <form className='w-[20%]'>
                        <h6 className="text-lg">Subscribe</h6>
                        <fieldset className="form-contro">
                            <label className="label">
                                <span className="label-text text-[1rem] text-[#9b9da3] leading-8 my-4">Subscribe to our newsletter for the latest updates.</span>
                            </label>
                            <div className="join">
                                <input
                                type="text"
                                placeholder="Enter your email"
                                className="input input-bordered join-item" />
                                <button className="btn join-item bg-gradient-to-r from-fuchsia-300 to-orange-300">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div> 
                <span className='w-full h-[0.01rem] bg-[#303030] absolute top-[90%]'></span> 
                <p className='text-[#9b9da3] text-[1rem] divide-y divide-[9b9da3] pt-32 pb-5'>@2024 Your Company All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;