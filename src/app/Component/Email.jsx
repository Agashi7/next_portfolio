"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const Email = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
  
    try {
      const formData = new FormData(e.target);
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      
      console.log("Access Key:", accessKey);
      console.log("Form Data:", Object.fromEntries(formData));
  
      if (!accessKey) {
        throw new Error("Web3Forms access key is not configured");
      }
  
      if (!navigator.onLine) {
        throw new Error("No internet connection");
      }
  
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
        signal: controller.signal,
        mode: "cors",
      }).catch((fetchError) => {
        throw new Error(`Fetch failed: ${fetchError.message}`);
      });
  
      clearTimeout(timeoutId);
  
      const result = await response.json();
      console.log("Response:", result);
  
      if (!result.success) {
        throw new Error(result.message || "Failed to send message");
      }
  
      alert("Message sent successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Error:", err);
      if (err.name === "AbortError") {
        setError("Request timed out");
      } else if (err.message.includes("Fetch failed")) {
        setError("Network error: Unable to reach Web3Forms");
      } else {
        setError(err.message || "Failed to send message");
      }
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component (JSX) remains the same
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative" id="contact">
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
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="access_key"
            value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY}
          />
          <input
            type="hidden"
            name="redirect"
            value="https://web3forms.com/success"
          />
          
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