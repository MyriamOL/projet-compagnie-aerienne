import "../styles/components/formulaire.css";

export default function CreationCompte({ goToConnexion, goToRecuperationMdp }) {
  return (
    <main id="formulaire">
      <div className="form-wrapper">
        <h2>Créer un compte</h2>

        <form>
          <div className="input-text-field">
            <label htmlFor="email">Adresse e-mail</label>
            <input type="text" id="email" name="email" />
          </div>
          <div className="input-text-field">
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" />
          </div>
          <div className="input-text-field">
            <label htmlFor="utilisateur">Nom </label>
            <input type="text" id="utilisateur" name="utilisateur" />
          </div>
          <div className="input-text-field">
            <label htmlFor="mdp">Mot de passe</label>
            <input type="text" id="mdp" name="mdp" />
          </div>

          <p className="conditions">
            En creant un compte j’accepte les conditions générales d’utilisation
            et la déclaration sur la protection des données de Reserva ainsi que
            les conditions générales d’utilisation de Reserva.
          </p>

          <input type="submit" value="Créer un compte" />
        </form>
      </div>
    </main>
  );
}
