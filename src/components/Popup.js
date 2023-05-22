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
  /* valeurs de pageShowed : connexion, creationCompte, recuperationMdp */
  const [pageShowed, setPageShowed] = useState("connexion");
  
  
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

        {pageShowed==="connexion" && (
          <Connexion
            goToCreationCompte={() => setPageShowed('creationCompte')}
            goToRecuperationMdp={() => setPageShowed('recuperationMdp')}
          />
        )}

        {pageShowed==="creationCompte" && (
          <CreationCompte />
        )}

        {pageShowed==="recuperationMdp" && (
          <RecuperationMdp />
        )}
      </div>
    </div>
  );
}
