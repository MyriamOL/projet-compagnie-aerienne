import "../styles/components/formulaire.css";

export default function Connexion({ goToCreationCompte, goToRecuperationMdp }) {
  return (
    <main id="formulaire">
      <div className="form-wrapper">
        <h2>Connexion</h2>

        <form>
          <div className="input-text-field">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-text-field">
            <label htmlFor="mdp">Mot de passe (6 charactères minimum)</label>
            <input type="password" minLength="6" id="mdp" name="mdp" />
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
