import React from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";

import PlayerRow from "./PlayerRow";
import Field from "./Field";

import { playersList } from "../players";
import "../index.css";
const myTeam = playersList;

class PlayersTable extends React.Component {
  onSelectedPlayer(name, position, selected) {
    let selectedString = selected ? "Seleccionado" : "No Seleccionado";
    ToastsStore.success(
      name + " en posición " + position + " está " + selectedString
    );
  }
  render() {
    return (
      <div className="mainContainer">
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
            {Object.keys(myTeam).map((player) => (
              <PlayerRow
                name={player}
                position={myTeam[player]}
                key={player}
                onSelectedPlayer={this.onSelectedPlayer}
              />
            ))}
            <ToastsContainer store={ToastsStore} />
          </tbody>
        </table>
        <Field />
      </div>
    );
  }
}
export default PlayersTable;
