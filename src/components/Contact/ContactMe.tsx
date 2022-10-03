import React from "react";
import "./ContactMe.css";

const ContactMe = (): JSX.Element => {
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
        ></input>
        <label htmlFor="email">Email</label>
        <input
          name="Email"
          id="email"
          type="email"
          placeholder="required..."
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
        />
        <input
          type="submit"
          value="Submit"
          style={{
            backgroundColor: "#ffff99",
            color: "black",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default ContactMe;
