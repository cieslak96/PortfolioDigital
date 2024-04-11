

import PropTypes from "prop-types";
import Link from "next/link";

const Footer = ({ links }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid={"footer"}
      className="flex flex-row justify-between bg-gray-100 p-6 border-t border-gray-300 dark:bg-black"
    >
      <ul className="flex flex-row items-center space-x-6">
        {links.map((link, index) => (
          <li key={index} data-testid={`footerLink${index}`}>
            <Link href={link.url} className="text-gray-600  dark:text-white hover:text-gray-800 hover:underline">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <p data-testid="footerContent" className="text-gray-500 dark:text-white text-sm m-0">
        © {year}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

Footer.defaultProps = {
  links: [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Projects", url: "/projects" },
    { title: "Uses", url: "/uses" },
  ],
};

export default Footer;
