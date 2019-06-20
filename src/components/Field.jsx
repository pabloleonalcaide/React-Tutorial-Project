import React from "react";
import styled from "styled-components";
import propsTypes from "prop-types";

import { playersList } from "../players";
const team = playersList;

class Field extends React.Component {
  static defaultProps = {
    players: {}
  };

  render() {
      let { players } = this.props
    return (
      <div>
        <h2>Alineación</h2>
        <ul>
          {Object.keys(players).map(player => (
            <li>{player} - {team[player]}</li>
          ))}
        </ul>
        <PlayingField>
          <div className="goal" />
          <div className="defenseLine" />
          <div className="midfield" />
          <div className="atackLine" />
        </PlayingField>
      </div>
    );
  }
}

Field.propsTypes = {
  players: propsTypes.object.isRequired
};

const PlayingField = styled.div`
  border: 1px solid green;
  height: 100%;
`;
export default Field;
