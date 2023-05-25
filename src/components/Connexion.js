import { useSignIn } from "react-auth-kit";
import "../styles/components/formulaire.css";
import axios from "axios";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../slice/userSlice";

export default function Connexion({ goToCreationCompte, goToRecuperationMdp }) {
  /* connexion */
  const signIn = useSignIn();
  const apiUrl = "http://localhost:8080/connexion";

  /* formulaire */
  const [email, setEmail] = useState('');
  const [mdp, setMdp] = useState('');

  /* redux cookie */
  const dispatch = useDispatch();

  /* fonctions formulaire */
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangeMdp(e) {
    setMdp(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios.post(apiUrl, {
      email: email,
      mdp: mdp
    })
      .then((response) => {
        console.log("cnx token:"+response.data.jwttoken);
        dispatch(setToken({ val: response.data.jwttoken }));
        signIn({
          token: response.data.jwttoken,
          tokenType: "Bearer",
          expiresIn: 3600,
          authState: email
        })
      })
    }
    
  return (
    <main id="formulaire">
      <div className="form-wrapper">
        <h2>Connexion</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-text-field">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="text" id="email" name="email" onChange={handleChangeEmail} />
          </div>
          <div className="input-text-field">
            <label htmlFor="mdp">Mot de passe</label>
            <input type="password" id="mdp" name="mdp" onChange={handleChangeMdp} />
          </div>

          {/* <span className="form-link-nav" onClick={goToRecuperationMdp}>
            Mot de passe oublié
          </span> */}
          <button onClick={goToRecuperationMdp}>Mot de passe oublié</button>

          <p className="conditions">
            En me connectant j’accepte les conditions générales d’utilisationet
            la déclaration sur la protection des données de Reserva ainsi que
            les conditions générales d’utilisation de Reserva.
          </p>

          <input type="submit" value="Se connecter" />
        </form>

        {/* <p>
          Vous n'avez pas de compte &nbsp;
          <span onClick={goToCreationCompte}>en créer un.</span>
        </p> */}
        <p>
          Vous n'avez pas de compte &nbsp;
          <button onClick={goToCreationCompte}>en créer un.</button>
        </p>
      </div>
    </main>
  );
}