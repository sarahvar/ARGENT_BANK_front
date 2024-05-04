import { Link } from "react-router-dom";
import "../errorpage/Error.css";

//Créer la page error en cas d'erreurs et utiliser pour les 3 pages
const ErrorPage =() => {
  return (
    <div className="error-page">
      <div className="container">
        <h1 className="title-error">404</h1>
        <div className="oups">
          Oups! La page que vous demandez n&apos;existe pas.
        </div>
        <Link className="link-accueil" to="/">
          retourner sur la page d&apos;accueil
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage