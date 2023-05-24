import React from "react";

import "../styles/BilletsVoles.css";

function BilletsVoles() {
  return (
    <main id="BilletsVoles">
      <div className="Billet">
        <div className="titre">
          <h1>Reservation N°01</h1>
          <button>
            <svg
              width="1.5rem"
              height="1.5rem"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <div className="info">
          <div className="id">
            <h2>vol n°</h2>
            <p>14ASDE758</p>
          </div>
          <div className="reservation">
            <h2>Reservation</h2>
            <p>text</p>
          </div>
          <div className="dateDepart">
            <h2>Date de depart</h2>
            <p>25 juin 2021</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BilletsVoles;
