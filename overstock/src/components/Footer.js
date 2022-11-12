import React from 'react'

import "../CSS/footer.css"

function Footer() {
  return (
    <>
        <footer>
  <div className="footer-links">
    <div className="footer-wrapper">
      <div className="wrapper-links">
        <h3>MY ACCOUNT</h3>
        <a href="#">Orders &amp; Return</a>
        <a href="#">Email Preferances</a>
        <a href="#">Account Settings</a>
      </div>
      <div className="wrapper-links">
        <h3>LET US HELP</h3>
        <a href="#">Contact Customer Care</a>
        <a href="#">Shipping Information</a>
        <a href="#">Return Policy</a>
        <a href="#">International Help</a>
        <a href="#">Accessibility</a>
      </div>
      <div className="wrapper-links">
        <h3>COMPANY INFORMATION</h3>
        <a href="#">About Overstock</a>
        <a href="#">Contact Us</a>
        <a href="#">Careers</a>
        <a href="#">Investor Relations</a>
        <a href="#">Sell Your Products</a>
        <a href="#">Supply Chain Transparency</a>
      </div>
      <div className="wrapper-links">
        <h3>MORE WAYS TO SHOP</h3>
        <a href="#">Tips &amp; Ideas</a>
        <a href="#">Deals</a>
        <a href="#">Clearance</a>
        <a href="#">New Arrivals</a>
      </div>
    </div>
  </div>
  <div className="legal-container">
    <div className="bottom-legal">
      <div className="legal-left">
        <p>© Copyright 2022, Overstock.com®, Inc.</p>
        <p>799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446</p>
      </div>
      <div className="legal-right">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms &amp; Conditions</a>
        <a href="#">*Promotion Terms</a>
        {/* <p>Ships:</p> */}
          <div className="flag">
            <p>Ships:</p>
            <a href="#">
            <img src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="#" />
            </a>
          </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer;