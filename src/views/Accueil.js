import { useState } from "react";
import "../styles/accueil.css";
import { useNavigate } from "react-router-dom";

export default function Accueil() {

  const [inputDepart, setInputDepart] = useState('');
  const [inputArrivee, setInputArrivee] = useState('');
  const [inputDate, setInputDate] = useState('');
  const navigate = useNavigate();

  function handleChange(e) {
    setInputDepart(e.target.inputDepart);
    setInputArrivee(e.target.inputArrivee);
    setInputDate(e.target.inputDate);
  }

  function handleSubmit(e) {
    e.preventDefault();

    /* envoie les données au store */
    console.log(inputDepart);
    console.log(inputArrivee);
    console.log(inputDate);

    navigate('/liste-resultats');
  }

  return (
    <main id="accueil">
      <section>
        <form className="sectionMain" onSubmit={handleSubmit}>
          <div>
            <label>Lieu de départ</label>
            <input type="text" onChange={handleChange} />
          </div>
          <div>
            <label>Lieu d'arrivé</label>
            <input type="text" onChange={handleChange} />
          </div>
          <div>
            <label>Date de départ</label>
            <input type="date" onChange={handleChange} />
          </div>
          <div>
            <input type="submit" value="Recherche" />
          </div>
        </form>
      </section>
    </main>
  );
}
