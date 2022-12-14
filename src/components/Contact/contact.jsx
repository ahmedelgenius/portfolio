import React from "react";
import "./contact.css";
import { BsWhatsapp } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { MdAlternateEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9iqqd48",
        "template_tfppqop",
        form.current,
        "L0pxnfcxjn1VwRpwd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="row g-5">
        <div className="col-md-12">
          <div className="text-center">
            <h5 className="section-subtitil">Get In Touch</h5>
            <h2 className="section-title">Contact Me</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact__options ">
            <a href="mailto:ahmedhany5321@gmail.com" target="_blank">
              <article className="contact__option">
                <MdAlternateEmail className="contact__option-icon" />
                <h4>Email</h4>
                <h5 className="overflow-hidden">ahmedhany5321@gmail.com</h5>
                <a href="mailto:ahmedhany5321@gmail.com" target="_blank">
                  Send a message
                </a>
              </article>
            </a>
            <a
              href="https://www.linkedin.com/in/ahemd-hany-9bb233214"
              target="_blank"
            >
              <article className="contact__option">
                <GrLinkedinOption className="contact__option-icon" />
                <h4>LinkedIn</h4>
                <h5>Ahmed Hany</h5>
                <a
                  href="https://www.linkedin.com/in/ahemd-hany-9bb233214"
                  target="_blank"
                >
                  Send a message
                </a>
              </article>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=01033151009"
              target="_blank"
            >
              <article className="contact__option">
                <BsWhatsapp className="contact__option-icon" />
                <h4>WhatsApp</h4>
                <h5>+201033151009</h5>
                <a
                  href="https://api.whatsapp.com/send?phone=01033151009"
                  target="_blank"
                >
                  Send a message
                </a>
              </article>
            </a>
          </div>
        </div>
        <div className="col-md-8">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="7"
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
