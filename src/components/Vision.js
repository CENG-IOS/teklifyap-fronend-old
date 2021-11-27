import React from "react";
import vision from "../images/vision.svg";
import shapeSmall from "../images/shapeSmall.svg";
import shapeBig from "../images/shapeBig.svg";
import shapeMedium from "../images/shapeMiddle.svg";
export const Vision = () => {
  return (
    <div className="container-fluid p-0 m-0 position-relative mt-5">
      <img className="vision-img" src={vision} alt="vision-img"></img>
      <div className="square3 position-relative "></div>

      <div className="position-relative p-0 m-0 about-img ">
        <div className="container d-flex justify-content-center align-items-center">
          <section className="scroll-container">
            <div className="js-scroll fade-in-bottom">
              <div className="position-relative d-flex flex-column justify-content-center align-items-center vision-descp ps-5 px-5">
                <h3>SIRADA NE VAR?</h3>
                &emsp;&emsp;TeklifYap aslında tamamlanmış bir proje de olsa
                kullanıcılarımız adına daha fazla fonksiyonellik, onların iş
                hayatlarını daha da kolaylaştırmak adına bazı güncellemeler
                getirmeyi düşünüyoruz. Örneğin bir sonraki versiyonda
                kullanıcılarımıza tekliflerini pdf şeklinde indirebilme imkanı.
                Bu onlar adına tekliflerini sunabilme adına büyük kolaylık
                sağlayacaktır.
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="row position-relative m-0">
        <div className="col-6 left-shapes">
          <section className="scroll-container">
            <div className="js-scroll bigShape">
              <img
                className="position-absolute bottom-0 shapeBig"
                src={shapeBig}
                alt="shapeBig"
              ></img>
            </div>
          </section>

          <section className="scroll-container">
            <div className="js-scroll smallShape">
              <img
                className="position-absolute bottom-0 shapeMedium"
                src={shapeMedium}
                alt="shapeMedium"
              ></img>
            </div>
          </section>

          <section className="scroll-container">
            <div className="js-scroll bigShape">
              <img
                className="position-absolute shapeSmall bottom-0"
                src={shapeSmall}
                alt="shapeSmall"
              ></img>
            </div>
          </section>
        </div>
        <div className="col-6 d-flex justify-content-end right-shapes">
          <section className="scroll-container">
            <div className="js-scroll bigShape">
              <img
                className="position-absolute bottom-0 shapeBig2 "
                src={shapeBig}
                alt="shapeBig"
              ></img>

              <img
                className="position-absolute bottom-0 shapeMedium2"
                src={shapeMedium}
                alt="shapeMedium"
              ></img>
              <img
                className="shapeSmall2 bottom-0"
                src={shapeSmall}
                alt="shapeSmall"
              ></img>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
