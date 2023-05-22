import { useCallback, useEffect, useState } from "react";
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



  /* select */
  const [airports, setAirports] = useState([]);

  const url = "http://api.aviationstack.com/v1/airports?access_key=9fffb88916d797a2e1f992a65b7b50d2";

  const loadAirports = useCallback(async () => {
    const response = await fetch(url);
    const airports = await response.json();
    setAirports(airports);
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports])//transmet la fonction à useEffect pour permettre de faire une 
  //comparaison avant l'execution d'une mise à jour (didUpdate)

  return (
    <main id="accueil">
      <section>
        <form className="sectionMain" onSubmit={handleSubmit}>
          <div>
            <label>Lieu de départ</label>
            <select name="select-depart" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option>{airport.airport_name}</option>
                ))

                : null}
            </select>
          </div>
          <div>
            <label>Lieu d'arrivé</label>
            <select name="select-arrivee" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option>{airport.airport_name}</option>
                ))

                : null}
            </select>
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
