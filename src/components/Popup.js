import { useState } from "react";

import crossBlack from "../assets/img/popup/icons8-multiplier-90.png";
import crossRed from "../assets/img/popup/icons8-multiplier-90-red.png";
import Connexion from "./Connexion";
import CreationCompte from "./CreationCompte";
import RecuperationMdp from "./RecuperationMdp";
import "../styles/components/popup.css";

export default function Popup({ closePopup }) {
  /* hover sur la croix pour se deconnecter */
  const [closeIsHovered, setCloseIsHovered] = useState(false);
  const cross = closeIsHovered ? crossRed : crossBlack;

  /* quelle page afficher sur le popup */
  const [connexionIsShowed, setConnexionIsShowed] = useState(true);
  const [creationCompteIsShowed, setCreationCompteIsShowed] = useState(false);
  const [recuperationMdpIsShowed, setRecuperationMdpIsShowed] = useState(false);

  /* fonctions permettant de changer de page a afficher */
  function showConnexion() {
    setConnexionIsShowed(true);
    setCreationCompteIsShowed(false);
    setRecuperationMdpIsShowed(false);
  }

  function showCreationCompte() {
    setConnexionIsShowed(false);
    setCreationCompteIsShowed(true);
    setRecuperationMdpIsShowed(false);
  }

  function showRecuperationMdp() {
    setConnexionIsShowed(false);
    setCreationCompteIsShowed(false);
    setRecuperationMdpIsShowed(true);
  }

  return (
    <div id="popup-container">
      <div className="popup-body">
        <img
          onClick={closePopup}
          className="closePopupCross"
          src={cross}
          alt="close cross"
          onMouseEnter={() => setCloseIsHovered(true)}
          onMouseLeave={() => setCloseIsHovered(false)}
        />

        {connexionIsShowed && (
          <Connexion
            goToCreationCompte={() => showCreationCompte()}
            goToRecuperationMdp={() => showRecuperationMdp()}
          />
        )}

        {creationCompteIsShowed && (
          <CreationCompte
            goToConnexion={() => showConnexion()}
            goToRecuperationMdp={() => showRecuperationMdp()}
          />
        )}

        {recuperationMdpIsShowed && (
          <RecuperationMdp
            goToConnexion={() => showConnexion()}
            goToCreationCompte={() => showCreationCompte()}
          />
        )}
      </div>
    </div>
  );
}
