import React from "react";
import propsTypes from "prop-types";

class PlayerRow extends React.Component{

    static defaultProps = {
        selected: false
    }

    onChange = ()=>{
        const {name, onSelectedChange} = this.props
        let selected = this.refs.selected.checked
        onSelectedChange(name,selected)
    }
    render() {
        const {name, position} = this.props
        return(
            <tr>
                <td>{name}</td>
                <td>{position}</td>
                <td><input type="checkbox" ref="selected" onChange={this.onChange}/></td>
            </tr>
        )
    }
}
PlayerRow.propsTypes = {
    name: propsTypes.string.isRequired,
    position: propsTypes.string.isRequired,
    onSelectedChange: propsTypes.func.isRequired
}

export default PlayerRow;