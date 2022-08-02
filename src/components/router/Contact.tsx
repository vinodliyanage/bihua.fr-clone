import React from "react";
import Form from "../layout/Form";

const Contact: React.FC = () => {
  return (
    <div className="contact block">
      <h1 aria-label="Hello">Hello</h1>
      <p>
        Vous avez une idée de projet ? Nous sommes curieux de la connaître,
        racontez-nous.
      </p>
      <section className="contact__form">
        <Form />
      </section>
    </div>
  );
};

export default Contact;
