
const Anailablenav = () => {
    return (
        <div className="flex justify-center items-center gap-60">
            <h1>Available Players</h1>
            <div>
                <button className="btn bg-amber-400">Available</button>
                <button className="btn">Selection (<span>0</span>)</button>
            </div>
        </div>
    );
};

export default Anailablenav;