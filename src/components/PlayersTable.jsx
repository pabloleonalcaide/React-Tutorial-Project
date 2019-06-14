import React from "react";
import styled from "styled-components"

import PlayerRow from "./PlayerRow";
import Field from "./Field";

import { playersList } from "../players";
const myTeam = playersList;

class PlayersTable extends React.Component {
  onSelectedPlayer(name, position, selected) {

  }
  render() {
    return (
      <MainContainer>
        <table>
          <thead>
            <h2>Plantilla</h2>
            <tr>
              <th>Jugador</th>
              <th>Posición</th>
              <th>Seleccionado</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(myTeam).map(player => (
              <PlayerRow
                name={player}
                position={myTeam[player]}
                key={player}
                onSelectedPlayer={this.onSelectedPlayer}
              />
            ))}
          </tbody>
        </table>
        <Field />
      </MainContainer>
    );
  }
}
const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  > * {
    flex: 1;
    text-align: center;
  }
`;

export default PlayersTable;
