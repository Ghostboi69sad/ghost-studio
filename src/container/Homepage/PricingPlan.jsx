import React, { Fragment } from "react";
import Navbar from "../../component/Navbar/Navbar";
import Footer from "../../component/footer/Footer";

const PricingPlan = () => {
  return (
    <Fragment>
      <div className="overflow-hidden bg__gray-1">
        <div className="bg__purple position-relative">
          <Navbar />
          <section className="position-relative">
            <div className="container">
              <h1 className="color__white bold font__size--50 text__50-1024 text__50-sm text__50-mm text__50-xs lh__5 text-center mb-5">
                Choose Your Plan
              </h1>
            </div>
          </section>
        </div>

        <section className="py-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-5 mb-4 mb-lg-0">
                <div className="wrapper__card-pricing bg__white p-4 rounded shadow">
                  <h3 className="bold font__size--28 text__28-1024 mb-3">Monthly Plan</h3>
                  <h2 className="bold font__size--42 text__40-1024 mb-4">$19<span className="font__size--20 text__20-1024">/month</span></h2>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 1</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 2</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 3</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 4</li>
                  </ul>
                  <button className="btn btn__purple color__white w-100">Choose Plan</button>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="wrapper__card-pricing bg__white p-4 rounded shadow">
                  <h3 className="bold font__size--28 text__28-1024 mb-3">Annual Plan</h3>
                  <h2 className="bold font__size--42 text__40-1024 mb-4">$190<span className="font__size--20 text__20-1024">/year</span></h2>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 1</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 2</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 3</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 4</li>
                    <li className="mb-2"><i className="fas fa-check mr-2 color__purple"></i> Feature 5</li>
                  </ul>
                  <button className="btn btn__purple color__white w-100">Choose Plan</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
};

export default PricingPlan;
