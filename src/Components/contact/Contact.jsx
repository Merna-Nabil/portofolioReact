import React, { useContext, useRef, useState } from "react";
import "./contact.scss";
import { themeContext } from "../../Context";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pdci2xr",
        "template_lgcj7wg",
        form.current,
        "PaiaP7C-zXUpJfWS4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in touch</span>
          <span>Contact me </span>
        </div>
      </div>
      <div className="c-right">
        <form className="c-form" action="" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
          />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />
          <span className="msg">{done && "thanks for contacting me :)) "}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
