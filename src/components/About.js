import React from "react";
import aboutus from "../images/aboutus.svg";
import logo from "../images/logo.svg";
import circles from "../images/circles.svg";

export const About = () => {
  return (
    <div className="container-fluid p-0 m-0 position-relative mt-5">
      <img className="aboutus-img" src={aboutus} alt="aboutus-img"></img>
      <div className="square2 position-relative "></div>

      <section className="scroll-container">
        <div className="js-scroll fade-in-bottom">
          <div className="row about-top position-relative d-flex justify-content-center align-items-center p-0 m-0 js-scroll">
            <div className="col-3">
              <hr className="w-100 about-lines"></hr>
            </div>

            <div className="col-3 col-sm-3 col-md-1  d-flex justify-content-center align-items-center ">
              <img className="w-100" src={circles} alt="circles"></img>
            </div>

            <div className="col-3">
              <hr className="w-100 about-lines"></hr>
            </div>
          </div>
        </div>
      </section>

      <div className="row position-relative p-0 m-0 about-img pb-5">
        <div className="col-1"></div>

        <div className="col-md-5 my-3 d-flex justify-content-center align-items-center ">
          <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-left">
              <div className="position-relative d-flex flex-column justify-content-center align-items-center about-descp px-5 px-sm-0">
                <h3>BİZ KİMİZ?</h3>
                &emsp;&emsp; Biz kendini geliştirmek için her türlü çabayı sarf
                eden ve çabalayan üç genciz. Henüz üniversite öğrencisiyiz ve
                Eskişehir Teknik Üniversitesinde Bilgisayar Mühendisliği
                okuyoruz. Okul projeleri vasıtası ile bir araya geldik ve ekip
                olarak uyumumuzu, proje yapma isteğimizi fark ettikten sonra
                arkadaşlığımızı iş anlamında da ilerlettik ve kendi çapımızda
                projeler yapmaya başladık. Bu ilk büyük projemiz olmasına rağmen
                çok güzel bir iş çıkardığımızı ve bundan sonraki projelerde de
                aynı dinamik ile güzel işler yapacağımızı düşünüyoruz.
              </div>
            </div>
          </section>
        </div>

        <div className="col-md-5">
          <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-right">
              <div className="d-flex justify-content-center align-items-center">
                <img src={logo} alt="logo"></img>
              </div>
            </div>
          </section>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
};
