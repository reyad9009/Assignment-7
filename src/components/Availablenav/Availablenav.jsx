
const Availablenav = ({handleAvailable, handleSelected , isSelected }) => {
    return (
        <div className="flex justify-center items-center gap-60">
            <h1>Available Players</h1>
            <div>
                <button onClick={handleSelected}  className={`btn ${handleSelected ? 'bg-amber-400' : 'bg-blue-500'}`}>Available</button>

                <button onClick={handleAvailable}  className={`btn ${handleSelected ? 'bg-amber-400' : 'bg-blue-500'}`}>Selection (<span>0</span>)</button>
            </div>
        </div>
    );
};

export default Availablenav;