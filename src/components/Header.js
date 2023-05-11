import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";

import logo from "../assets/img/HeaderFooter/logo_48x48.png";

import "../styles/components/header.css";

export default function Header() {
  /* gere l'ouverture du popup, open est true si le popup est affiché */
  const [open, setOpen] = useState(false);

  return (
    <header id="main-header">
      <nav>
        <div>
          <Link to="/">
            <img src={logo} alt="Avion faisant le tour de la terre" />
            <p>Reserva</p>
          </Link>
        </div>
        <div>
          <button className="buttonHeader" onClick={() => setOpen(true)}>
            Connexion
          </button>
          {open ? <Popup closePopup={() => setOpen(false)} /> : null}
        </div>
      </nav>
    </header>
  );
}
