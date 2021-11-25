import React, { useState, useEffect } from "react";
import leftVector from "../../images/leftVector.svg";
import middleVector from "../../images/middleVector.svg";
import rightVector from "../../images/rightVector.svg";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import BaseURL from "../../api/BaseURL"

export default function ProductB(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [openRes, setOpenRes] = useState(false);
    const [res, setRes] = useState({});
    // const [resSuccess, setResSuccess] = useState({});
    const [mateial_id, setMaterialID] = useState(props.material_id);
    const id = useSelector((state) => state.auth.userID);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const DeleteMaterial = (e) => {
        e.preventDefault()
        togglePopup()
        setTimeout(() => setOpenRes(true), 500)

        fetch(BaseURL + "api/material/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                deleted: mateial_id,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                data.success ? setRes({ success: true, message: data.message }) : setRes({ success: false, message: data.message })
            });
    }


    return (
        <>
            <div className="m-3">
                <button onClick={props.catcher} className="btn product-btn d-flex flex-column justify-content-around" onClick={togglePopup}>
                    <div className="d-flex position-relative justify-content-center z-index-fixer">
                        <div className="position-absolute d-flex justify-content-center align-items-center h-100 product-text ">
                            {props.title}
                        </div>
                        <img
                            src={rightVector}
                            className="position-absolute rightV mt-4 "
                            alt='rightVector'
                        ></img>
                        <img src={middleVector} className="middleV"></img>
                        <img
                            src={leftVector}
                            className="position-absolute leftV mt-3"
                            alt='leftVector'
                        ></img>
                    </div>

                    <div className="w-100 mt-1 text-product">
                        <span>ÖLÇÜ BİRİMİ: </span> <span>{props.unit} </span>
                        {//<br />
                            //<span>BİRİM FİYATI: </span> <span>{props.unit_per_price} </span>
                        }
                    </div>
                </button>

            </div>

            <Modal show={isOpen} onHide={togglePopup} centered size="sm">
                <Modal.Header className="bg-opacity-75 bg-primary user-select-none" closeButton>
                    <Modal.Title> {props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form>
                        <div className="d-flex flex-column justify-content-center mt-3">

                            <div className="text-center mb-3"> <span className="font-weight-bold"> ÖLÇÜ BİRİMİ:</span> {props.unit}  </div>

                            <div className="d-flex justify-content-center">
                                <button className="btn btn-danger" onClick={(e) => DeleteMaterial(e)}>Malzemeyi Sil</button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            <Modal show={openRes} onHide={() => {
                setOpenRes(false)
                window.location.reload(false);
            }} centered size="sm">
                <Modal.Header className={res.success ? "bg-opacity-75 bg-success" : "bg-opacity-75 bg-danger"} closeButton >
                    <Modal.Title>{!res.success ? "Hata" : "Başarılı!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {res.message}
                </Modal.Body>
            </Modal>

        </>

    );

}
