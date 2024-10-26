import { useEffect, useState } from "react";
import Player from "../Player/Player";
import PropTypes from "prop-types";

// const Players = ({handleAvailable, handleAddToSelected}) => {
const Players = ({handleAddToSelected}) => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[69%] mx-auto mt-14 pb-96">
            {
                players.map((players, playersId)=> <Player  key={playersId} player={players} handleAddToSelected={handleAddToSelected}></Player>)
            }
        </div>
    );
};

Players.propTypes = {
    handleAddToSelected: PropTypes.func.isRequired
}
export default Players;