import PropTypes from 'prop-types';

const Player = ({player, handleAddToSelected}) => {
    const {cover, name, country, role, batting_style, bowling_style, price} = player;
    //console.log(cover)

    return (
        <div className="border rounded-xl flex flex-col items-center justify-center py-6">
            <div>
                <img className="w-[376px] h-[240px] rounded-xl" src={cover} alt="" />
            <div>
                <h1>{name}</h1>
            </div>
                <div className="flex space-x-2">
                    <span>{country}</span>
                    <span>{role}</span>
                </div>
                <h2>Rating</h2>
                <div className="flex space-x-2">
                    <span>{batting_style}</span>
                    <span>{bowling_style}</span>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <span>Price: <span>{price}</span></span>
                    <button onClick={()=>handleAddToSelected(player)} className="btn">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleAddToSelected:PropTypes.func
}

export default Player;
