import PropTypes from "prop-types";

const Availablenav = ({handleAvailable, handleSelected , selectedCount }) => {
    return (
        <div className="flex justify-center">
            <div className="w-[69%] flex justify-between items-center mt-20">
                <h1 className="text-xl font-extrabold">Available Players</h1>
                    <div>
                        <button onClick={handleSelected}  className={`btn ${handleAvailable === true ? 'bg-amber-400' : 'bg-blue-500'}`}>Available</button>

                    <button onClick={handleAvailable}  className={`btn ${handleSelected ? 'bg-amber-400' : 'bg-blue-500'}`}>Selection ({selectedCount})</button>
                </div>
            </div>
        </div>
    );
};

Availablenav.propTypes = {
    handleAvailable: PropTypes.func.isRequired,
    handleSelected: PropTypes.func.isRequired,
    selectedCount: PropTypes.number.isRequired,
}
export default Availablenav;