import React from "react";

import arrowRight from "../assets/img/listeResultats/icons8-fleche-droite-50.png";

import "../styles/listeReservations.css";

function Reservation({ idList, nVol, dateDepart, aerDep, aerArr }) {
  async function deleteReservation() {
    await fetch('http://localhost:8080/api/reservations/'+idList, { method: 'DELETE' });
  }

  return (
    <li className="Billet" key={idList}>
      <div className="info">
      <div className="titre">
        <h1>Reservation N°{idList}</h1>
        <button onClick={deleteReservation}>
          <svg
            width="1.5rem"
            height="1.5rem"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
        <div className="id">
          <h2>Vol N°</h2>
          <p>{nVol}</p>
        </div>
        <div className="dateDepart">
          <h2>Date de depart</h2>
          <p>{dateDepart}</p>
        </div>
        <div>
          <div><span>{aerDep} <img className="arrow-right" src={arrowRight} alt="arrow" /></span><span>{aerArr}</span></div>
        </div>
      </div>
    </li>
  );
}

export default Reservation;
