import React from "react";

// TODO: complete the form submission

interface FormProps {
  onSubmit: () => void;
}

const Form: React.FC = () => {
  return (
      <form action="">
        <div className="form-wrapper">
          <section>
            <div className="field">
              <label>Votre nom</label>
              <div>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name-input"
                  placeholder="Bob Razowski"
                  required
                />
              </div>
            </div>
            <div className="field">
              <label>Votre email</label>
              <div>
                <input
                  className="input"
                  name="email"
                  id="email-input"
                  type="email"
                  placeholder="bob.razowski@monsterandco.com"
                  required
                />
              </div>
            </div>
          </section>
          <section>
            <div className="field">
              <label>Parlez-nous de votre projet</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="project"
                  id="project-input"
                  placeholder="Je n'ai plus le temps de gérer ma notoriété en ligne, pouvez-vous m'aider ?"
                  required
                ></textarea>
              </div>
            </div>
          </section>
        </div>
        <input className="submit" type="submit" value="submit" name="submit" />
      </form>
  );
};

export default Form;
