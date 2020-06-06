import React from "react";
import { Link } from "react-router-dom";
import { GoogleAuth } from "./GoogleAuth";

export const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streem
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Stream List
        </Link>
      </div>
      <div className="">
        <GoogleAuth />
      </div>
    </div>
  );
};
