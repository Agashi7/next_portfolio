"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");
    setError("");

    const formData = new FormData(event.target);
    formData.append("access_key", "d234685a-622b-4e96-8102-0c2801e48e1b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative" id="contact">
      <div className="z-10">
        <h5 className="text-xl font-bold my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-4">
          <Link href="https://github.com/Agashi7" target="_blank" rel="noopener noreferrer">
            <Image src={GithubIcon} alt="GitHub Icon" width={32} height={32} />
          </Link>
          <Link href="https://www.linkedin.com/in/agashi7/" target="_blank" rel="noopener noreferrer">
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={32} height={32} />
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-start md:justify-center">
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        {result && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {result}
          </div>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="abc@gmail.com"
              disabled={loading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Just saying hi"
              disabled={loading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Let's talk about..."
              disabled={loading}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 font-medium py-2.5 rounded-lg w-full disabled:bg-purple-300 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Email;
