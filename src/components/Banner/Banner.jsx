import bgShadow from '../../assets/bg-shadow.png'
import bannerMain from '../../assets/banner-main.png'
import PropTypes from 'prop-types';
const Banner = ({handleCoin}) => {
    return (
        <div className='container mx-auto relative'>
            <div className="flex items-center justify-center mt-8"> 
                
                <img className="relative bg-black w-[1320px] h-[545px] rounded-xl" src={bgShadow} alt="Background"/>
                
                <div className="absolute flex flex-wrap flex-col items-center justify-center text-center text-white">
                    <img className='w-[248px] h-[200px] mb-10' src={bannerMain} alt="" />
                    <h1 className="text-white text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-xl mt-6 mb-5'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handleCoin} className='btn'>Claim Free Credit</button>
                </div>
                
            </div>
        </div>
    );
};
Banner.propTypes = {
    handleCoin: PropTypes.func,
}
export default Banner;