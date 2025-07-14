import React from "react";
import "./SplashScreen.css";
import logo from "../../assets/images/logo.png";

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <img src={logo} alt="Logo" className="splash-logo" />
    </div>
  );
}
