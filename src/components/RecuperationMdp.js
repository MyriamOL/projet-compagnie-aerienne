import "../styles/components/formulaire.css";

export default function RecuperationMdp({ goToConnexion, goToCreationCompte }) {
    return (
        <main id="formulaire">
            <div className="form-wrapper">

                <h2>Mot de passe oublié</h2>

                <form>
                    <div className="input-text-field">
                        <label htmlFor="email">Adresse e-mail</label>
                        <input type="text" id="email" name="email" />
                    </div>

                    <p className="conditions">
                        Un lien pour re-initialiser votre mot de passe vous sera envoyé par email.
                    </p>

                    <input type="submit" value="Valider" />
                </form>

            </div>
        </main>
    );
}