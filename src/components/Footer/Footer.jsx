import footerLogo from '../../assets/logo-footer.png'
import bgShadow from '../../assets/bg-shadow.png'
const Footer = () => {
    return (
        <div className='relative'>
            <div className='flex justify-center items-center'>
            <div className='absolute top-[-200px] z-10'>
                <div className="flex items-center justify-center mt-8 relative">
                    
                    <img className="relative w-[1292px] h-[336px] rounded-xl bg-white" src={bgShadow} alt="Background"/>
                    
                    <div className="absolute flex flex-wrap flex-col items-center justify-center text-center">
                    <h1 className='text-3xl font-extrabold'>Subscribe to our Newsletter</h1>
                    <p className='text-lg py-5'>Get the latest updates and news right in your inbox!</p>
                    <div className='flex gap-3'>
                            <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                            <button className='btn bg-gradient-to-r from-fuchsia-300 to-orange-300'>Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            
            <footer className="footer flex items-center justify-center flex-col bg-[#060919] pt-72 p-4 relative">
            
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