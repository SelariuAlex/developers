import React from "react";
import "./footer.styles.css";

const Footer = () => {
  return (
    <footer className="footer p-1 text-center">
      <p className="container-fluid">
        Copyright &copy; {new Date().getFullYear()} Șelariu Alexandru
      </p>
    </footer>
  );
};

export default Footer;
