import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
  return (
    <Link href={href} onClick={onClick} className="text-white hover:text-gray-400">
      {title}
    </Link>
  );
};

export default NavLink;
