import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate submission (you can replace this with actual API/Google Form call)
    console.log("Submitted message:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  // Auto-hide success message after 4 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section id="contact" className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">Contact Me</h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <div className="mt-4 text-green-600 font-semibold">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
