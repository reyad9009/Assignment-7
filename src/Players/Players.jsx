import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Players = () => {
    const [players, setPlayers] = useState([]) 

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data))
    },[])



    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-[70%] mx-auto">
            {
                players.map((players, playersId)=> <Player  key={playersId} player={players}></Player>)
            }
        </div>
    );
};

export default Players;