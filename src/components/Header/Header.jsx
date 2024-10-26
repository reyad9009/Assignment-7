import logo from '../../assets/logo.png'
import coinImg from '../../assets/coin.png'
import PropTypes from 'prop-types';

const Header = ({coin}) => {
    return (
        <div className='flex justify-center'>
            <div className="navbar bg-base-100 w-[69%] mt-5">
                
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <img className="" src={logo} alt="" />
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex mr-4">
                        <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                        <span>{coin}</span>
                        <span>Coin</span>
                        <img src={coinImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};
Header.propTypes = {
    coin: PropTypes.number,
}
export default Header;