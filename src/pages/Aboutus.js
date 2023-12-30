import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Categories.css";
import Footer from "../components/Footer";
import Basic from "../components/Basic";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
//import PlantModal from "../components/PlantModal";
//import UserModal from "../components/UserModal";
//import Dialog from "../components/Dialog";
//import { Link } from "react-router-dom";
//import { FaSearch } from "react-icons/fa";

//import Search from "../components/Search";
function Categories() {
  return (
    <body
      style={{ minHeight: "200vh", display: "flex", flexDirection: "column" }}
    >
      <>
        <Basic></Basic>
        <div className="containers">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <u>ABOUT US</u>
              </h1>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          <Footer></Footer>
        </div>
      </>
    </body>
  );
}

export default Categories;
