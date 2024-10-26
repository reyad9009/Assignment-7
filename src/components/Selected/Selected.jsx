import Select from "../Select/Select";
import PropTypes from "prop-types";

const Selected = ({handleSelected, choosePlayer, deleteSelectedPlayer}) => {
    return (
        <div className="  flex items-center justify-center">
            <div className="flex flex-col w-12/12 w-[70%]">
                <h1>Selected Player({choosePlayer.length}/6)</h1>
                <div className="">
                    <div className="flex flex-col gap-3 my-8">
                        {
                            choosePlayer.map((choosePlayers, playerId)=> <Select key={playerId} select={choosePlayers} deleteSelectedPlayer={deleteSelectedPlayer}></Select>)
                        }
                    </div>
                    <button onClick={handleSelected} className="btn">Add More Player</button>
                </div>
            </div>
              
        </div>
    );
};

Selected.propTypes = {
    handleSelected: PropTypes.func.isRequired,
    choosePlayer:PropTypes.array.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired
}
export default Selected;