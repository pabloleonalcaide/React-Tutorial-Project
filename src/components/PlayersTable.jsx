import React from "react";
import styled from "styled-components";

import PlayerRow from "./PlayerRow";
import Field from "./Field";

import { playersList } from "../players";

const myTeam = playersList;

class PlayersTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPlayers: {}
    };
  }

  onSelectedChange = (name, selected) => {
    if (selected) {
      let newSelectedPlayers = this.state.selectedPlayers;
      newSelectedPlayers[name] = playersList[name];
      this.setState(prevState => ({
        selectedPlayers: { ...prevState.selectedPlayers, ...newSelectedPlayers }
      }));
    }
  };

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
                onSelectedChange={this.onSelectedChange}
              />
            ))}
          </tbody>
        </table>
        <Field players={this.state.selectedPlayers} />
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
