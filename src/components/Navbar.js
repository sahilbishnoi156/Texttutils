import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
    return(
          <div className={`navbar justify-content-center py-1 px-3 bg-${props.mode} d-flex justify-content-between`}>
          <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className={`nav-link active text-${props.txtMode}`} aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${props.txtMode}`} to="/projects">Projects</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${props.txtMode}`} to="/login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link text-${props.txtMode}`} to="/textconverter">Text convertor</Link>
      </li>
    </ul>
    <button className={`btn btn-light bg-transparent border border-${props.txtMode} border-1 p-2 py-0 text-${props.txtMode} nav-link`} onClick={props.toggleMode}>{(props.mode)==="dark"?"Light":"Dark"}</button>
          </div>
    );
};
