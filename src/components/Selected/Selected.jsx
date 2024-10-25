

const Selected = ({handleSelected }) => {
    return (
        <div className="flex justify-center items-center gap-60">
                <h1>Selected Player</h1>
                <button onClick={handleSelected} className="btn">Add More Player</button>
        </div>
    );
};

export default Selected;