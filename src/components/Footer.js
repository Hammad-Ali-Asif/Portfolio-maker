import React from "react";

const Footer = ({ socialLinks }) => {
  if (!Array.isArray(socialLinks) || socialLinks.length === 0) return null;

  return (
    <footer className="bg-purple-700 text-white py-6 mt-10">
      <div className="max-w-5xl mx-auto text-center">
        <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
        <div className="flex justify-center gap-6 flex-wrap">
          {socialLinks.map((link, index) => (
            link.name && link.url && (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-gray-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
        <p className="mt-4 text-sm text-gray-200">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
