import PropTypes from "prop-types";

const Select = ({select}) => {
    const {name, } = select;
    //console.log(name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

Select.propTypes = {
    select: PropTypes.object.isRequired
}
export default Select;