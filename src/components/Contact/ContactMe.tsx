import React, { useState } from "react";
import "./ContactMe.css";

const ContactMe = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const checkForDefaults = (name: string, email: string, message: string) => {
    return name.length > 0 && email.length > 0 && message.length > 0;
  };

  return (
    <div className="form">
      <form
        action="https://public.herotofu.com/v1/6fa96b40-431d-11ed-9b17-6fdf7f94f506"
        method="post"
      >
        <label htmlFor="name">Your name</label>
        <input
          name="Name"
          id="name"
          type="text"
          placeholder="required..."
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name="Email"
          id="email"
          type="email"
          placeholder="required..."
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>Subject</label>
        <input
          name="Subject"
          id="subject"
          type="text"
          placeholder="optional..."
        ></input>
        <label>Message</label>
        <textarea
          name="Message"
          id="message"
          rows={6}
          placeholder="type your message here"
          onChange={(e) => setMessage(e.target.value)}
        />
        {checkForDefaults(name, message, email) ? (
          <input
            type="submit"
            value="Submit"
            style={{
              backgroundColor: "#ffff99",
              color: "black",
              cursor: "pointer",
            }}
          />
        ) : (
          <input
            type="button"
            value="Enter Info.."
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          />
        )}
      </form>
    </div>
  );
};

export default ContactMe;
