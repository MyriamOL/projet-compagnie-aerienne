import "../styles/listeResultats.css";
import arrowRight from "../assets/img/listeResultats/icons8-fleche-droite-50.png";
import Resultat from "../components/Resultat";

import { Link } from "react-router-dom";

export default function ListeResultats() {
  return (
    <main id="listeResultats">
      <div className="searchInfo">
        <div className="searchInfoElements">
          <div className="gares">
            <div className="gareDepart">Lille</div>
            <img className="arrow-right" src={arrowRight} alt="arrow" />
            <div className="gareArrivee">Lyon</div>
          </div>
          <div className="dateDepart">06/04/2023</div>
          <div className="heureDepart">14h36</div>
          <Link to="/">Modifier</Link>
        </div>
      </div>

      <div className="result-wrapper">
        <ul className="result-list">
          <Resultat
            hDep={"17:38"}
            hArr={"19:37"}
            compagnie={"AIR FRANCE"}
            duree={"1h59"}
            nVol={"555453575"}
          />
          <Resultat
            hDep={"18:10"}
            hArr={"21:21"}
            compagnie={"RYAN AIR"}
            duree={"3h11"}
            nVol={"685553675"}
          />
          <Resultat
            hDep={"18:40"}
            hArr={"23:08"}
            compagnie={"AIR FRANCE"}
            duree={"4h28"}
            nVol={"471583267"}
          />
        </ul>
      </div>
    </main>
  );
}
