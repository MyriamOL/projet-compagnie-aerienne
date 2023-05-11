import React from "react";

import "../styles/quiSommesNous.css";
import plage from "../assets/img/quiSommesNous/travelbeach.jpg";
import montagne from "../assets/img/quiSommesNous/travelcuthiver.jpg";
import savane from "../assets/img/quiSommesNous/imagesavane.jpg";

export default function QuiSommesNous() {
  return (
    <main id="quiSommesNous">
      <section>
        <article>
          <div>
            <h1>QUI SOMMES NOUS ?</h1>
          </div>
          <div>
            <p>
              Reserva est l’un des principaux acteurs de la vente de billet en
              ligne en Europe, proposant à ses clients des offres de voyages sur
              mesure.
              <br />
              Les clients effectuent leur réservation de manière simple et
              pratique, profitant d'un excellent rapport qualité-prix, d’une
              large offre internationale de compagnies aériennes. Reserva compte
              18 millions de clients dans 46 pays.
            </p>
          </div>
          <span class="bottom-block">
            <h3 class="titre-bottom-block">Pourquoi choisir Reserva ?</h3>
            <div class="first-text-block">
              <p>
                <strong>Choix </strong> : vous pouvez choisir de réserver parmi
                des centaines de compagnies aériennes,
                <br />
                des milliers d'hôtels et d'agences de location de voitures dans
                le monde entier. Reserva c'est reserver et s'assurer d'un
                accompagnement personnalisé durant votre voyage.
                <br />
              </p>
            </div>
            <div class="seconde-text-block">
              <p>
                <strong>Client</strong> : notre service client vous offre son
                aide avant, pendant et après votre voyage. Elu meilleur sevice
                client 2023.
              </p>
            </div>
            <div class="third-text-block">
              <p>
                <strong>Réputation</strong> : des millions de clients depuis
                2002 !
              </p>
            </div>

            <div class="photos">
              <figure>
                <img alt="paysage mer idilique" class="imgplage" src={plage} />
              </figure>
              <figure>
                <img alt="paysage montage" class="imghiver" src={montagne} />
              </figure>
              <figure>
                <img
                  alt="paysage americain avec une mongolfiere"
                  class="imgsavane"
                  src={savane}
                />
              </figure>
            </div>
          </span>
        </article>
      </section>
    </main>
  );
}
