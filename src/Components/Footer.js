import React from "react";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();

  return <h3 className="footer"> powered by dykey copyright © {year} </h3>;
};

export default Footer;
