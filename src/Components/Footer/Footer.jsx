import React, { Component } from 'react'
import './Footer.css'
import logo2 from '../Images/logo2.png';
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

                {/* left side */}

                <div className="flexColStart f-left">
                    <img src={logo2} alt="" width={120} />
                    <span className="secondaryText">
                      Our vision is to make all people <br />
                      the best place to live for them.
                    </span>
                </div>

                <div className="flexColStart f-right">
                  <span className="primaryText">Information</span>
                  <span className="secondaryText">145 New York, FL 5467, USA</span>
                  <div className="flexCenter f-menu">
                  <span>Property</span>
                  <span>Services</span>
                  <span>Product</span>
                  <span>About Us</span>
                  </div>
                </div>
            </div>
        </section>
        {/* <section>
          <div className="paddings innerWidth flexCenter">
          <h1>This WebSite Is Created By @SaurabhWagh</h1>
          </div>
          <div className="paddings innerWidth flexCenter" style={{marginTop:-35, color:'skyblue'}}>
            <h2>Thank You For Visting</h2>
          </div>
        </section> */}
        <section>
          <div className="p-1 bg-dark fw-bold text-light">
            <h3 className="text-center name7"> © 2024 Rushikesh Sasane </h3>
          </div>
        </section>
      </div>
    )
  }
}
