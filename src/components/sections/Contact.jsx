import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    })

  const SERVICE_ID = "service_bix7u2h";
  const TEMPLATE_ID = "template_8mgypzn";
  const PUBLIC_KEY = "J6CupgI_XOkdVizOD"; 
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#B56078] to-[#D8A1B2] bg-clip-text text-transparent text-center">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-[var(--accent-soft)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] transition focus:outline-none focus:border-[var(--accent-main)] focus:bg-[var(--accent-soft)]"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-[var(--accent-soft)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] transition focus:outline-none focus:border-[var(--accent-main)] focus:bg-[var(--accent-soft)]"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-[var(--accent-)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] transition focus:outline-none focus:border-[var(--accent-main)] focus:bg-[var(--accent-soft)]"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--accent-main)] text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(181,96,120,0.35)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};