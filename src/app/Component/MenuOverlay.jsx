import React from "react";
import Link from "next/link";

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center">
      <div className="bg-[#121212] w-full h-full flex flex-col items-center justify-center space-y-8">
        {links.map((link, index) => (
          <Link
            href={link.path}
            key={index}
            onClick={onLinkClick} // Close the menu on link click
            className="text-white text-xl"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuOverlay;
