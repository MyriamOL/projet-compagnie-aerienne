import { Link } from "react-router-dom";

import twitter from "../assets/img/HeaderFooter/twitter.png";
import facebook from "../assets/img/HeaderFooter/facebook.png";
import instagram from "../assets/img/HeaderFooter/instagrame.png";
import "../styles/components/footer.css";

export default function Footer() {
  return (
    <footer id="main-footer">
      <section>
        <h3>Législation</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          provident mollitia quod nobis, saepe architecto recusandae, quia, et
          reprehenderit esse cum ipsa illo dicta totam beatae autem impedit
          laborum? Necessitatibus.
        </p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="buttonFooter"
            href="https://www.legifrance.gouv.fr"
          >
            Etat
          </a>
        </div>
      </section>
      <section>
        <h3>Nous contacter</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita esse
          facilis architecto assumenda ut? Possimus voluptatum deleniti nobis
          maxime, dolor veniam in blanditiis quo, repellat debitis omnis rem
          itaque mollitia.
        </p>
        <div className="divSocial">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/i/flow/login"
          >
            <img className="social" src={twitter} alt="twitter" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com"
          >
            <img className="social" src={facebook} alt="facebook" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/?hl=fr"
          >
            <img className="social" src={instagram} alt="instagram" />
          </a>
        </div>
      </section>
      <section>
        <h3>Qui sommes nous ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam beatae
          quod officiis autem quibusdam architecto. Laboriosam sapiente ullam
          aliquam, quas sequi impedit. Perspiciatis libero sequi suscipit.
          Soluta ipsum debitis saepe.
        </p>
        <div>
          <Link to="/qui-sommes-nous" className="buttonFooter">
            qui somme nous ?
          </Link>
        </div>
      </section>
    </footer>
  );
}
