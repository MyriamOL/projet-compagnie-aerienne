import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Popup from "./Popup";

import logo from "../assets/img/HeaderFooter/logo_48x48.png";

import "../styles/components/header.css";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";

export default function Header() {
  /* navigate */
  const navigate = useNavigate();

  /* gere l'ouverture du popup, open est true si le popup est affiché */
  const [open, setOpen] = useState(false);

  /* gere si l'utilisateur est authentifie et les boutons auquels il a acces*/
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();

  function logout(e) {
    signOut();
    navigate("/");
  }

  return (
    <header id="main-header">
      <nav>
        <div>
          <Link to="/" className="text-reserva">
            <img src={logo} alt="Avion faisant le tour de la terre" />
            <p>Reserva</p>
          </Link>
        </div>
        <div>
          {isAuthenticated() &&
          <button className="buttonHeader" >
            <Link to="/billets-voles">
              Reservations
            </Link>
          </button>
          }
          
          {isAuthenticated() ?
            <button className="buttonHeader" onClick={logout}>
              Deconnexion
            </button>
            :
            <button className="buttonHeader" onClick={() => setOpen(true)}>
            Connexion
          </button>
          }
          {open ? <Popup closePopup={() => setOpen(false)} /> : null}
        </div>
      </nav>
    </header>
  );
}
