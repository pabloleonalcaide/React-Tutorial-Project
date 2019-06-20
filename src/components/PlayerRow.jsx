import React from "react";
import propsTypes from "prop-types";

class PlayerRow extends React.Component{

    static defaultProps = {
        selected: false
    }

    onChange = ()=>{
        const {name, selected, onSelectedChange} = this.props
        const nowSelected = !selected

        onSelectedChange(name,nowSelected)
    }
    render() {
        const {name, position} = this.props
        return(
            <tr>
                <td>{name}</td>
                <td>{position}</td>
                <td><input type="checkbox" onChange={this.onChange}/></td>
            </tr>
        )
    }
}
PlayerRow.propsTypes = {
    name: propsTypes.string.isRequired,
    position: propsTypes.string.isRequired,
    selected: propsTypes.bool.isRequired,
    onSelectedChange: propsTypes.func.isRequired
}

export default PlayerRow;