import classes from "./Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <header
      className={classes.Header}
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, rgba(92, 128, 86, 0.803), #28b485), url("./images/home.jpg")',
      }}
    >
      <div className={classes.LogoBox}>
        <img
          src="./images/logo-white.png"
          alt="Logo"
          className={classes.Logo}
        />
      </div>

      <div className={classes.TextBox}>
        <h1 className={classes.HeadingPrimary}>
          <span className={classes.HeadingPrimaryMain}>Repair Appliance</span>
          <span className={classes.HeadingPrimarySub}>that you need</span>
        </h1>
        <a href="#" className={`${classes.btn} ${classes.btnWhite} `}>
          Discover our Tools
        </a>
      </div>
    </header>
  );
};

export default Navbar;
