import { useCallback, useEffect, useState } from "react";
import "../styles/accueil.css";
import { useNavigate } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { setAeroportDep, setAeroportArr, setIataDep, setIataArr, setJourDep } from '../slice/searchSlice';


export default function Accueil() {

  /* champs du formulaire */
  const [inputDepart, setInputDepart] = useState('');
  const [inputArrivee, setInputArrivee] = useState('');
  const [inputIataDepart, setInputIataDepart] = useState('');
  const [inputIataArrivee, setInputIataArrivee] = useState('');
  const [inputDate, setInputDate] = useState('');

  /* useNavigate */
  const navigate = useNavigate();

  /* redux */
  const dispatch = useDispatch();

  /* fonctions handle du formulaire */
  function handleInputDep(e) {
    setInputDepart(e.target.value);
    setInputIataDepart(e.target.options[e.target.selectedIndex].dataset.iataCode);
  }

  function handleInputArr(e) {
    setInputArrivee(e.target.value);
    setInputIataArrivee(e.target.options[e.target.selectedIndex].dataset.iataCode);
  }

  function handleInputDate(e) {
    setInputDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    /* envoie les données au store */
    dispatch(setAeroportDep({ val: inputDepart }));
    dispatch(setAeroportArr({ val: inputArrivee }));
    dispatch(setIataDep({ val: inputIataDepart }));
    dispatch(setIataArr({ val: inputIataArrivee }));
    dispatch(setJourDep({ val: inputDate }));

    navigate("/liste-resultats");
  }

  /* select */
  const [airports, setAirports] = useState([]);
  const access_key = "490709dfdb75e660a6932ae96687959a";

  const url = `http://api.aviationstack.com/v1/airports?access_key=${access_key}`;

  const loadAirports = useCallback(async () => {
    const response = await fetch(url);
    const airports = await response.json();
    setAirports(airports);
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
<<<<<<< HEAD
            <select name="select-depart" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              {airports.data !== undefined
                ? airports.data.map((airport) => (
                    <option>{airport.airport_name}</option>
                  ))
=======
            <select name="select-depart" onChange={handleInputDep}>
              <option value="">Choisissez un aéroport</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option key={airport.id} data-iata-code={airport.iata_code}>{airport.country_name + " / " + airport.airport_name}</option>
                ))

>>>>>>> main
                : null}
            </select>
          </div>
          <div>
<<<<<<< HEAD
            <label>Lieu d'arrivé</label>
            <select name="select-arrivee" onChange={handleChange}>
              <option value="">--Please choose an option--</option>
              {airports.data !== undefined
                ? airports.data.map((airport) => (
                    <option>{airport.airport_name}</option>
                  ))
=======
            <label>Lieu d'arrivée</label>
            <select name="select-arrivee" onChange={handleInputArr}>
              <option value="">Choisissez un aéroport</option>
              {airports.data !== undefined ?

                airports.data.map(airport => (
                  <option key={airport.id} data-iata-code={airport.iata_code}>{airport.country_name + " / " + airport.airport_name}</option>
                ))

>>>>>>> main
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
