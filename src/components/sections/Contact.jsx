import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      import.meta.env.VITE_PUBLIC_KEY
    );

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY, // ✅ FIX
        }
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ from_name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#B56078] to-[#D8A1B2] bg-clip-text text-transparent text-center">
         Get In Touch
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* REQUIRED FOR EMAILJS */}
            <input type="hidden" name="to_name" value="Dulasi" />

            <div className="relative">
              <input
                type="text"
                name="from_name"
                required
                value={formData.from_name}
                className="w-full bg-[var(--accent-soft)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] focus:outline-none focus:border-[var(--accent-main)]"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, from_name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-[var(--accent-soft)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] focus:outline-none focus:border-[var(--accent-main)]"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-[var(--accent-soft)] border border-[var(--border-soft)] rounded px-4 py-3 text-[var(--accent-main)] focus:outline-none focus:border-[var(--accent-main)]"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--accent-main)] text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(181,96,120,0.35)]">
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
