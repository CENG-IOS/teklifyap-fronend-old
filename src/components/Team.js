import React from "react";
import team from "../images/team.svg";
import teamdescp from "../images/teamdescp.svg";

import role from "../images/roles.png";
import oe from "../images/oe.png";
import ic from "../images/ic.png";
import se from "../images/se.png";
import reactLOGO from "../images/react-logo.png";
import springBootLOGO from "../images/spring-boot.png";
import erDiagramLOGO from "../images/spring-boot.png";
import databseLOGO from "../images/spring-boot.png";
import mysqlLOGOfrom from "../images/Mysql_logo.png";
export const Team = () => {
  return (
    <div className="container-fluid p-0 m-0 position-relative">
      <img className="team" src={team} alt='team'></img>
      <div className="position-relative team-descp flex-wrap">
        <img className="team-descp-img" src={teamdescp} alt='team-descp-img'></img>
    
        <div className="container-fluid d-flex justify-content-center small-bg ">
          <div className="row position-relative p-0 m-0 names justify-content-around  ">


            <div className="col-md-2 d-flex flex-column align-items-center firstPerson ">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"><img src={ic} className='w-100 logo-circled'></img></div>

              <div className="text-center mt-5">
                <b>
                  İSHAK<br></br>ÇOBAN
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">FULL STACK</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
              <div><img src={reactLOGO} className='w-100'></img></div>
              <div><img src={springBootLOGO} className='w-100'></img></div>
            </div>
          </section>
            </div>

            <div className="col-md-2 d-flex flex-column align-items-center secondPerson">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"><img src={oe} className='w-100 logo-circled'></img></div>

              <div className="text-center mt-5 ">
                <b>
                  OĞUZHAN<br></br>ERÇELİK
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">FULL STACK</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
              <div><img src={reactLOGO} className='w-100'></img></div>
              <div><img src={springBootLOGO} className='w-100'></img></div>
            </div>
          </section>
            </div>

            <div className="col-md-2 d-flex flex-column align-items-center thirdPerson">
            <section className="scroll-container">
            <div className="js-scroll fade-in-bottom-top d-flex flex-column align-items-center">
              <div className="circle1"><img src={se} className='w-100 logo-circled'></img></div>

              <div className="text-center mt-5 ">
                <b>
                  SEVDA<br></br>ERGÜN
                </b>
              </div>

              <hr className="nameSurname-line"></hr>
              <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="role-descp position-absolute">BACKEND</div>
                <img className="roles" src={role} alt='role'></img>
              </div>
              <div><img src={mysqlLOGOfrom} className='w-100'></img></div>
            </div>
          </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
