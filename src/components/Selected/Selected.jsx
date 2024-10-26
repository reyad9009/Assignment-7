import Select from "../Select/Select";
import PropTypes from "prop-types";

const Selected = ({handleSelected, choosePlayer}) => {
    return (
        <div className="flex justify-center items-center gap-60">
                <h1>Selected Player({choosePlayer.length}/6)</h1>
                <button onClick={handleSelected} className="btn">Add More Player</button>
                <div>
                    {
                        choosePlayer.map((choosePlayers, playerId)=> <Select key={playerId} select={choosePlayers}></Select>)
                    }
                </div>
        </div>
    );
};

Selected.propTypes = {
    handleSelected: PropTypes.func.isRequired,
    choosePlayer:PropTypes.array.isRequired
}
export default Selected;