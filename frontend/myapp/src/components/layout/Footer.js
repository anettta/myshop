import React, { Fragment } from "react";

const Footer = () => {
  const date = new Date();

  return (
    <Fragment>
      <footer className="py-1">
        <p className="text-center mt-1">
          Nature Aesthetic &copy; {date.getFullYear()}, All Rights Reserved
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
