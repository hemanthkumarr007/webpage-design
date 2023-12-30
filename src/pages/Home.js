import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Home.css";
import Basic from "../components/Basic";
import Footer from "../components/Footer";
//import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dialog from "../components/Dialog";
function Home() {
  return (
    <div>
      <body>
        <Basic></Basic>
        <div className="container-fluid header p-5">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md p-5 mt-lg-5">
              <h1 className="container display-5 mb-5">
                Cultivating wellness through the medicinal embrace of botanical
                allies.
              </h1>
              <p className="content">
                The BNPura Lake blog is a treasure trove of information about
                the wonders of nature. Among the many natural wonders discussed
                on this blog are the medicinal plants found in and around the
                lake. These plants are known to have therapeutic properties
                which can be used to help us recover from a variety of ailments.
                One of the most interesting medicinal plants found in the area
                is the Arjuna Tree. This tree is known for its ability to help
                treat heart diseases and improve cardiovascular health. The
                leaves of this tree are rich in antioxidants which help to keep
                the heart healthy.
              </p>
            </div>
          </div>
        </div>

        <div className="container-xxl py-0">
          <div className="container">
            <div className="row g-0 gx-5 align-items-end">
              <div className="col-lg-8">
                <div
                  className="text-start mx-auto mb-5 wow slideInLeft"
                  data-wow-delay="0.1s ease-in-out"
                >
                  <h1
                    className="mb-2"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Plants Listing
                  </h1>
                  <p
                    style={{
                      fontWeight: "350",
                      fontSize: "1.3rem",
                    }}
                  >
                    Embracing the ancient wisdom of Ayurveda, where healing
                    blossoms in the heart of medicinal plants.
                  </p>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div id="tab-1">
                <div className="row g-4">
                  <div className="rectangle">
                    <div className="contents">
                      <h4>
                        <Dialog></Dialog>
                      </h4>
                      <p>Brief Intro</p>
                    </div>
                  </div>
                  <div className="rectangle">
                    <div className="contents">
                      <h4>
                        <Dialog></Dialog>
                      </h4>
                      <p>Brief Intro</p>
                    </div>
                  </div>
                  <div className="rectangle">
                    <div className="contents">
                      <h4>
                        <Dialog></Dialog>
                      </h4>
                      <p>Brief Intro</p>
                    </div>
                  </div>
                  <div className="rectangle">
                    <div className="contents">
                      <h4>
                        <Dialog></Dialog>
                      </h4>
                      <p>Brief Intro</p>
                    </div>
                  </div>
                  <div className="rectangle">
                    <div className="contents">
                      <h4>
                        <Dialog></Dialog>
                      </h4>
                      <p>Brief Intro</p>
                    </div>
                  </div>
                  <div className="col-12 text-center" data-wow-delay="0.1s">
                    <Link
                      className="btn btn-success py-3 px-5"
                      to="/Categories"
                    >
                      Browse More Plants
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </body>
    </div>
  );
}
export default Home;
