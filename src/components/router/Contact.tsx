import * as React from "react";
import Form from '../layout/Form';

function Contact() {
  return (
    <div className="contact block">
      <h1 aria-label="Hello">Hello</h1>
      <p>
        Vous avez une idée de projet ? Nous sommes curieux de la connaître,
        racontez-nous.
      </p>
      <Form />
    </div>
  );
}

export default Contact;
