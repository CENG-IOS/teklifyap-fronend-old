import React, { Component } from "react";
import footer from "../images/footer.svg";
import logo from "../images/logo.svg";
import googlePlay from "../images/googlePlay.png";
import icon from "../images/linkedin.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0 position-relative">
        <img className="footer-bg" src={footer} alt="footer-bg"></img>

        <div className="square position-relative"></div>

        <div className="row position-relative p-0 m-0">
          <div className="col-2"></div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            {/* <img className="logo" src={logo} alt='logo'></img> */}
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center gplay">
            {/* <img className="gPlay w-75" src={googlePlay} alt='gPlay'></img> */}
          </div>
          <div className="col-2"></div>
        </div>
        <div className="footer-bottom">
          <div className="position-relative d-flex flex-column justify-content-center descp-wrapper">
            <div className="w-75 footer-descp ">
              &emsp;&emsp;Bizlere istediğinizi sorabilirsiniz.
            </div>
          </div>
          <div className="position-relative text-center find-us mt-4 ">
            FIND US
          </div>
          <div className="position-relative d-flex justify-content-center mt-2 ">
            <div className="w-25 d-flex justify-content-around mb-3">
            <a href="https://www.linkedin.com/in/ishak-%C3%A7oban-b8b027227/" target="_blank"><img className="icon" src={icon} alt="icon"></img></a>
            <a href="https://www.linkedin.com/in/o%C4%9Fuzhan-er%C3%A7elik-62a006174/" target="_blank"><img className="icon" src={icon} alt="icon"></img></a>
            <a href="https://www.linkedin.com/in/sevda-erg%C3%BCn-449b9a174/"  target="_blank"><img className="icon" src={icon} alt="icon"></img></a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
