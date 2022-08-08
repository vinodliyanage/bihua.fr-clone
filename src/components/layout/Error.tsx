import React from "react";
import { useLocation } from "react-router-dom";

const Error: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <section className="error block">
      <div className="error__wrapper">
        <div className="error__content__container">
          <h1 className="error-title">
            Désolé,
            <br />
            une erreur est survenue:
          </h1>
          <p className="error-content">
            La page à l'adresse
            <span> &quot;</span>
            {pathname}
            <span>&quot; </span>
            n'as pas était trouvée !
            <br />
            Nous vous invitons à retourner sur la page d' Accueil ou la page de
            nos Réalisations !
          </p>
        </div>
        <div>
          <p className="error-code">404</p>
        </div>
      </div>
    </section>
  );
};

export default Error;
