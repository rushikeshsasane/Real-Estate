import React, { Component } from 'react';
import './GetStarted.css';

export default class GetStarted extends Component {
  render() {
    return (
      <div>
        <section className="g-wrapper">
            <div className="paddings innerWidth g-container">
                <div className="flexColCenter inner-container">
                <span className="primaryText">Get started with Homyz</span>
                <span className="secondaryText">
                     Subscribe and find super attractive price quotes from us.
                <br />
                     Find your residence soon
                </span>
                <button className="button" href>
                <a href="#">Get Started</a>
                </button>
                </div>
            </div>
        </section>
      </div>
    )
  }
}
