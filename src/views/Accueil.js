import { useCallback, useEffect, useState } from "react";
import "../styles/accueil.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setAeroportDep, setAeroportArr, setHeureDep } from '../slice/searchSlice';


export default function Accueil() {

  /* champs du formulaire */
  const [inputDepart, setInputDepart] = useState('');
  const [inputArrivee, setInputArrivee] = useState('');
  const [inputDate, setInputDate] = useState('');

  /* useNavigate */
  const navigate = useNavigate();

  /* redux */
  const dispatch = useDispatch();

  /* fonctions handle du formulaire */
  function handleInputDep(e) {
    setInputDepart(e.target.value);
  }

  function handleInputArr(e) {
    setInputArrivee(e.target.value);
  }

  function handleInputDate(e) {
    setInputDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    /* envoie les données au store */
    dispatch(setAeroportDep({ val: inputDepart }));
    dispatch(setAeroportArr({ val: inputArrivee }));
    dispatch(setHeureDep({ val: inputDate }));

    navigate("/liste-resultats");
  }

  /* fetch aeroports */
  const [airports, setAirports] = useState([]);
  const access_key = "8d77f46e094aa317fce70f76f6c3ed8d";

<<<<<<< HEAD
  const url =
<<<<<<< HEAD
    "http://api.aviationstack.com/v1/airports?access_key=6c3b4717facb660a591728666e5b37fb";
=======
    "http://api.aviationstack.com/v1/airports?access_key=a7dc730ff64b6884f4eec751b957d1e1";
>>>>>>> kurasiak-yohann-14-04-2023
=======
  const url = `http://api.aviationstack.com/v1/airports?access_key=${access_key}`;
>>>>>>> 2267fe8151dbf13d5a0a20f79ad164a927bb9748

  const loadAirports = useCallback(async () => {
    const response = await fetch(url);
    const airports = await response.json();
    setAirports(airports);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    loadAirports();
  }, [loadAirports]); //transmet la fonction à useEffect pour permettre de faire une
  //comparaison avant l'execution d'une mise à jour (didUpdate)

  return (
    <main id="accueil">
      <section>
        <form className="sectionMain" onSubmit={handleSubmit}>
          <div>
            <label>Lieu de départ</label>
            <select name="select-depart" onChange={handleInputDep}>
              <option value="">Choisissez un aéroport</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option key={airport.id}>{airport.country_name + " / " + airport.airport_name}</option>
                ))

                : null}
            </select>
          </div>
          <div>
            <label>Lieu d'arrivée</label>
            <select name="select-arrivee" onChange={handleInputArr}>
              <option value="">Choisissez un aéroport</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option key={airport.id}>{airport.country_name + " / " + airport.airport_name}</option>
                ))

                : null}
            </select>
          </div>
          <div>
            <label>Date de départ</label>
            <input type="date" onChange={handleInputDate} />
          </div>
          <div>
            <input type="submit" value="Recherche" />
          </div>
        </form>
      </section>
    </main>
  );
}
