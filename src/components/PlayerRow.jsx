import React from "react";
import propsTypes from "prop-types";

class PlayerRow extends React.Component{
    state = {
        selected : false
    }

    onClick = ()=>{
        const {name, position, onSelectedPlayer} = this.props
        const nowSelected = !this.state.selected
        this.setState({
            selected: nowSelected
        })
        onSelectedPlayer(name,position,nowSelected)
    }
    render() {
        const {name, position} = this.props
        return(
            <tr>
                <td>{name}</td>
                <td>{position}</td>
                <td><input type="checkbox" onClick={this.onClick}/></td>
            </tr>
        )
    }
}
PlayerRow.propsTypes = {
    name: propsTypes.string.isRequired,
    position: propsTypes.string.isRequired,
    onSelectedPlayer: propsTypes.func.isRequired
}
export default PlayerRow;