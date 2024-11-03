import React from "react";
import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 mt-10 sticky">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
        <h1 className="text-lg font-semibold">Connect with me</h1>
        
        {/* Icons */}
        <div className="flex space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/RanjanWorks"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={28} />
          </a>

          {/* Email */}
          <a
            href="mailto:kashyapranjan9977@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaEnvelope size={28} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+916266245085"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaWhatsapp size={28} />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Ranjan Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
