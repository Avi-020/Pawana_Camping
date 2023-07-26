
import React from "react";
import Image from "next/image";
// import styles from "../CSS/HomPage.module.css"


function HomePage() {
   
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand ms-4" href="#">
          SUNSHINE CAMPING
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Features
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
          </div>
        </div>
      </nav>











      <div
        className="main"
        style={{
          width: "100%",
          height: "50vw",
          backgroundImage: "url('/images/camping.png')",
          backgroundSize: "cover",
        }}
      >
        <h3 style={{ color: "white", paddingTop: "4vh", paddingLeft: "5vh" }}>
          SUNSHINE CAMPING
        </h3>
        <p style={{ color: "white", fontSize: "small", paddingLeft: "5vh" }}>
          Pawna Dam&sbquo; Near Hilton&sbquo; Kadav Maval&sbquo; Pune  410 406
        </p>
      </div>

      <div className="info">
        <div style={{ display: "flex" }}>
          <p className="container mt-4 ms-3">
            <b>
              Looking for an extreme lakeside camping experience&#63; Where you will
              be surrounded by serene nature and forts around the lake&#63; We are
              offering you the convenience to explore Pawna lake. Pawna lake the
              most alluring camping spot in Lonavala. It is 20 kilometers from
              Lonavala city center. 110 kilometers from Mumbai city&sbquo; and 58
              kilometers from Pune city. We are offering you the best experience
              at Pawna lake camping. We provide a tent stay&sbquo; unlimited dinner&sbquo;
              free snacks&sbquo; and delicious barbecue. Not only that&sbquo; but we provide
              live guitar music on specific day to soothe your evening. A
              campfire and adventure activities will add more fun to your trip.
            </b>
          </p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
