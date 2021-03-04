import React from "react";
import Nav from "./Nav";
import Side from "./Side";
import Main from "./Main";
import Footer from "./Footer";

const Back = () => {
  return (
    <>
      <div className="row mt-2">
        <div className="col">
          <Nav />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-4">
          <Side />
        </div>
        <div className="col-8">
          <Main />
        </div>
      </div>

      <div className="row">
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Back;
