import PropTypes from "prop-types";
import { AiOutlineDelete } from "react-icons/ai";

const Select = ({select, deleteSelectedPlayer}) => {
    const {cover, name,batting_style} = select;
    //console.log(name)
    return (
        <div className="flex justify-between border-2 p-6 rounded-xl"> 
            <div className="flex items-center gap-5">
                <div className="w-[100px] h-[100px] relative overflow-hidden rounded-xl">
                    <img className="w-[100px] h-[100px]  absolute" src={cover} alt="" />
                </div>
                <div>
                    <h1 className="font-extrabold text-xl">{name}</h1>
                    <p className="pt-2">{batting_style}</p>
                </div>
            </div>
            <button onClick={()=>deleteSelectedPlayer(select)} className="text-red-600 text-2xl"><AiOutlineDelete /></button>
        </div>
    );
};

Select.propTypes = {
    select: PropTypes.object.isRequired,
    deleteSelectedPlayer: PropTypes.func.isRequired
}
export default Select;