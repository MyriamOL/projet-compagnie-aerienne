import arrowRight from "../assets/img/listeResultats/icons8-fleche-droite-50.png";
import doubleArrowUp from "../assets/img/listeResultats/double-arrow-up-64.png";
import doubleArrowDown from "../assets/img/listeResultats/double-arrow-down-64.png";

import "../styles/components/resultat.css";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";

export default function Resultat({
  idList,
  hDep,
  hArr,
  compagnie,
  duree,
  nVol,
  aerDep,
  aerArr,
  terminalDep,
  gateDep,
  terminalArr,
  gateArr,
  dateDepart
}) {
  /* etat de l'element resultat, true si il est ouvert */
  const [expanded, setExpanded] = useState(false);

  /* reference vers l'image double fleche */
  const arrowRef = useRef(null);

  /* useNavigate */
  const navigate = useNavigate();

  /* authentification */
  const isAuthenticated = useIsAuthenticated();

  function switchExpand() {
    if (expanded === false) {
      setExpanded(true);
      arrowRef.current.src = doubleArrowUp;
    } else if (expanded === true) {
      setExpanded(false);
      arrowRef.current.src = doubleArrowDown;
    }
  }

  /* ajout de la reservation a la liste */
  async function addReservation(e) {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "numeroVol": nVol,
          "aeroportArrivee": aerArr,
          "dateDepart": dateDepart,
          "aeroportDepart": aerDep
      })
    };
    await fetch('http://localhost:8080/api/reservations', requestOptions);
    navigate("/liste-reservations")
  }

  return (
    <li
      id="resultat"
      className={`result-item ${expanded ? "expanded" : ""}`}
      key={idList}
    >
      <div className="info-trajet">
        <div className="horaire-societe">
          <div className="horaires">
            <div className="heureDepartItem">{hDep}</div>
            <img className="arrow-right" src={arrowRight} alt="arrow" />
            <div className="heureArriveeItem">{hArr}</div>
          </div>
          <div className="societe">{compagnie}</div>
        </div>
        <div className="duree">{duree}</div>
      </div>

      {expanded && (
        <div className="expandedInformation">
          <div className="num-vol">Vol n°{nVol}</div>
          <div className="itineraire-valider">
            <div className="itineraire">
              <ul>
                <li>
                  <span>{hDep}</span> : <span>{aerDep}</span>
                  <div className="info-embarquement">
                    <div>{terminalDep && `terminal ${terminalDep}`}</div>
                    <div>{terminalDep && `porte ${gateDep}`}</div>
                  </div>
                </li>
                <li>
                  <span>{hArr}</span> : <span>{aerArr}</span>
                  <div className="info-embarquement">
                    <div>{terminalArr && `terminal ${terminalArr}`}</div>
                    <div>{gateArr && `porte ${gateArr}`}</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="retour">
            {isAuthenticated() &&
              <form onSubmit={addReservation}>
                <input
                  type="submit"
                  value="Reserver"
                  className="btnValider"
                />
              </form>
            }
            </div>
          </div>
        </div>
      )}

      <div className="arrow-expand" onClick={() => switchExpand()}>
        <img
          ref={arrowRef}
          className="double-arrow"
          src={doubleArrowDown}
          alt="double fleche haut"
        />
      </div>
    </li>
  );
}
