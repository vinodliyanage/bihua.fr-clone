import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer block">
      <div className="columns">
        <div className="column">
          <h2>Adresse</h2>
          <p>
            11 place Antonin Poncet
            <br />
            69002 Lyon <br />
            France
          </p>
        </div>
        <div className="column">
          <h2>Email</h2>
          <a href="mailto:hello@bihua.fr" className="underline">
            hello@bihua.fr
          </a>
        </div>
        <div className="column">
          <h2>Téléphone</h2>
          <a href="tel:+33 (0)9 81 14 69 00">+33 (0)9 81 14 69 00</a>
        </div>
        <div className="column">
          <h2>Réseaux</h2>
          <ul className="columns is-mobile">
            <li>
              <a
                className="underline"
                href="https://instagram.com/studio_bihua/"
                target="_blank"
                rel="noopener"
              >
                In
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://linkedin.com/company/bihua/"
                target="_blank"
                rel="noopener"
              >
                Lk
              </a>
            </li>
            <li>
              <a
                className="underline"
                href="https://twitter.com/studio_bihua/"
                target="_blank"
                rel="noopener"
              >
                Tw
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="#navbar" className="scroll-top"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
