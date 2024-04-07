import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on EasyTask</span>
            <span>Buying on EasyTask</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>More From EasyTask</h2>
            <span>EasyTask Business</span>
            <span>EasyTask Pro</span>
            <span>EasyTask Logo Maker</span>
            <span>EasyTask Guides</span>
            <span>Get Inspired</span>
            <span>EasyTask Select</span>
            <span>ClearVoice</span>
            <span>EasyTask Workspace</span>
            <span>Learn</span>
            <span>Website Not Working</span>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>EasyTask</h2>
            <span>© EasyTask International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/twitter.png" alt="" />
              <img src="/facebook.png" alt="" />
              <img src="/linkedin.png" alt="" />
              <img src="/pinterest.png" alt="" />
              <img src="/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;