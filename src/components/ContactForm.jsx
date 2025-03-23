import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setMessage("Message is being sent...");

    emailjs
      .sendForm(
        "service_e2v65eb",
        "template_f6zuut4",
        form.current,
        "9yXQ3RT2vEEqfmE0r"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setMessage("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setMessage("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div>
      <h1 className="text-center text-2xl text-gray-300 hover:text-white">
        Contact Me
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 bg-black p-4 sm:p-8 md:max-w-2xl lg:max-w-3xl"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full rounded-lg border-2 border-gray-600 bg-black p-2 transition-colors duration-150 hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full rounded-lg border-2 border-gray-600 bg-black p-2 transition-colors duration-150 hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
        />

        <textarea
          name="message"
          required
          placeholder="Your Message"
          className="h-32 w-full rounded-lg border-2 border-gray-600 bg-black p-2 transition-colors duration-150 hover:border-white focus:outline-none focus:ring-2 focus:ring-white"
        ></textarea>

        <button
          type="submit"
          className="w-1/2 rounded-lg border-2 border-gray-600 bg-black px-4 py-2 text-gray-400 transition-colors duration-150 hover:border-white hover:text-white"
        >
          Send
        </button>
      </form>

      {/* Message display */}
      {message && (
        <p className="text-center text-lg text-white mb-8">{message}</p>
      )}

      <div className="mx-auto flex w-full max-w-lg flex-wrap items-center justify-between gap-4 bg-black md:max-w-2xl lg:max-w-3xl">
        <div className="flex min-w-[180px] flex-1 items-center justify-center rounded-md border-2 border-gray-600 py-2 text-sm transition-colors duration-150 hover:border-white hover:text-gray-100 sm:min-w-[220px] sm:text-base md:p-3">
          jaydeeptamkahne@gmail.com
        </div>

        <div className="flex min-w-[180px] flex-1 items-center justify-center rounded-md border-2 border-gray-600 py-2 text-sm transition-colors duration-150 hover:border-white hover:text-gray-100 sm:min-w-[220px] sm:text-base md:p-3">
          +91 79724 66078
        </div>
        <a
          href="https://www.linkedin.com/in/jaydeep-lilachand-tamkhane/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-[180px] flex-1 items-center justify-center rounded-md border-2 border-gray-600 py-2 text-sm transition-colors duration-150 hover:border-white hover:text-gray-100 sm:min-w-[220px] sm:text-base md:p-3"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default ContactForm;

