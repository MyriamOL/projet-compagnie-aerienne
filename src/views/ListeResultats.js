import "../styles/listeResultats.css";
import arrowRight from "../assets/img/listeResultats/icons8-fleche-droite-50.png";
import Resultat from "../components/Resultat";

import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

import { useSelector } from 'react-redux';


export default function ListeResultats() {

  /* redux */
  const search = useSelector( (state) => state.search );

  /* fetch vols */
  const [vols, setVols] = useState([]);
  const access_key = "490709dfdb75e660a6932ae96687959a";
  const dep_iata = search.iataDep;
  const arr_iata = search.iataArr;
  /* const flight_date = search.jourDep; */

  const url = `http://api.aviationstack.com/v1/flights?access_key=${access_key}&dep_iata=${dep_iata}&arr_iata=${arr_iata}`;

  const loadVols = useCallback(async () => {
    const response = await fetch(url);
    const vols = await response.json();
    setVols(vols);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    loadVols();

  }, [loadVols])

  /* formatteur de date, prend en entree une chaine de charactere representant une date et renvoie en sortie l'heure sous le format hh:mm */
  function dateFormatter(dateStr) {
    const d = new Date(dateStr);
    const h = d.getHours() >= 10 ? d.getHours() : "0" + d.getHours();
    const m = d.getMinutes() >= 10 ? d.getMinutes() : "0" + d.getMinutes();
    return `${h}:${m}`;
  }

  /* calcule la duree entre deux heures et la renvoies sous forme de chaine de caractere */
  function calculateDuration(departureStr, arrivalStr) {
    const dep_d = new Date(departureStr);
    const arr_d = new Date(arrivalStr);

    var seconds = (arr_d - dep_d) / 1000;
    if(seconds<0) {
      seconds+=1000*60*60*24;
    }
    const hours = Math.floor(seconds/60/60);
    const minutes = (seconds/60)%60;

    const h = hours >= 10 ? hours : "0" + hours;
    const m = minutes >= 10 ? minutes : "0" + minutes;
    return `${h}h${m}`;
  }


  return (
    <main id="listeResultats">
      <div className="searchInfo">
        <div className="searchInfoElements">
          <div className="gares">
            <div className="gareDepart">{search.aeroportDep}</div>
            <img className="arrow-right" src={arrowRight} alt="arrow" />
            <div className="gareArrivee">{search.aeroportArr}</div>
          </div>
          <div className="dateDepart">{search.jourDep}</div>
          <Link to="/">Modifier</Link>
        </div>
      </div>

      <div className="result-wrapper">
        <ul className="result-list">
          {
            vols.data && vols.data.map((vols, index) => (
              <Resultat
                idList={index}
                hDep={dateFormatter(vols.departure.scheduled)}
                hArr={dateFormatter(vols.arrival.scheduled)}
                compagnie={vols.airline.name}
                duree={calculateDuration(vols.departure.scheduled, vols.arrival.scheduled)}
                nVol={vols.flight.number}
                aerDep={vols.departure.airport}
                aerArr={vols.arrival.airport}
                terminalDep={vols.departure.terminal}
                gateDep={vols.departure.gate}
                terminalArr={vols.arrival.terminal}
                gateArr={vols.arrival.gate}
              />
            ))
          }
        </ul>
      </div>
    </main>
  );
}
