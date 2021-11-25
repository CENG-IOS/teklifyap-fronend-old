import React, { useState } from "react";
import { useSelector } from "react-redux";
import BaseURL from '../api/BaseURL'
import Buttons from "../components/Buttons/Buttons";
import Modal from 'react-bootstrap/Modal';

export default function Offer(props) {
    const [isSmall, setIsSmall] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [isHeader, setIsHeader] = useState(props.header);
    const Theme = useSelector((state) => state.theme.theme);
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const positiveHandler = (e) => {
        e.preventDefault()
        let status = "true"
        fetch(BaseURL + `api/offer/updateStatus/${props.offer_id}/${status}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());

        setStatus("true");
        togglePopup();
    };

    const negatiffHandler = (e) => {
        e.preventDefault()
        let status = "false"
        fetch(BaseURL + `api/offer/updateStatus/${props.offer_id}/${status}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        }).then((response) => response.json());

        setStatus("false");
        togglePopup();
    };

    const examineFunction = () => {
        fetch(BaseURL + `api/offerMaterial/getMaterialsByOffer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: props.offer_id
            })
        })
            .then((response) => response.json())
            .then((data) => {
                props.m(data.data)
            })
    }

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 675) {
                setIsSmall(false);
            } else {
                setIsSmall(true);
            }
        }

        window.addEventListener("resize", handleResize);
    }, [isSmall]);

    return (
        <>
            {isHeader ? (
                <div className="d-flex flex-row bg-secondary p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3">
                    <div className="d-flex align-items-center col-7 text-white">
                        {props.title}
                    </div>
                    <div
                        className={
                            !isSmall
                                ? "d-flex align-items-center col-2 ms-3 text-white"
                                : "d-none"
                        }
                    >
                        {props.date}
                    </div>
                </div>
            ) : !isSmall ? (
                <div
                    className={
                        status === "true"
                            ? "d-flex flex-row bg-opacity-75 bg-success text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3"
                            : !Theme ? "d-flex flex-row bg-opacity-75 bg-danger text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3" : "d-flex flex-row bg-opacity-50 bg-danger text-white p-3 ps-sm-5 px-sm-4 rounded-pill mb-3"
                    }
                >
                    <div className="d-flex align-items-center col-7">{props.title}</div>
                    <div className="d-flex align-items-center col-2 ms-3">
                        {props.date}
                    </div>
                    <div className={"d-flex justify-content-evenly col-3"}>
                        <Buttons title="İncele" clicked={examineFunction} />
                        <Buttons title="Ayarla" clicked={togglePopup} />
                    </div>
                </div>
            ) : (
                <div
                    className={
                        status === "true"
                            ? "d-flex flex-row bg-opacity-75 text-white bg-success p-4 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3"
                            : !Theme ? "d-flex flex-row bg-opacity-75 bg-danger text-white p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3" : "d-flex flex-row bg-opacity-50 bg-danger text-white p-3 ps-5 ps-sm-5 px-sm-4 rounded-pill mb-3"
                    }
                >
                    <div className="d-flex align-items-center col-7">{props.title}</div>
                    <div className={"d-flex flex-row d-flex justify-content-evenly col-5 ms-sm-3"}>
                        <Buttons clicked={examineFunction} title="İncele" />
                        <Buttons title="Ayarla" />

                    </div>
                </div>
            )}

            <Modal show={isOpen} onHide={togglePopup} centered>
                <Modal.Header className="bg-opacity-75 bg-primary" closeButton>
                    <Modal.Title className="user-select-none">
                        {props.title}  <span className="h6">{props.date}</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="d-flex flex-column justify-content-center text-product">
                        <button
                            className="btn btn-success"
                            onClick={positiveHandler}
                        >
                            Teklifi olumlu yap
                        </button>
                        <button
                            className="btn btn-success mt-2"
                            onClick={negatiffHandler}
                        >
                            Teklifi olumsuz yap
                        </button>
                        <button
                            className="btn btn-danger mt-2"
                            onClick={() => alert("silindi")}
                        >
                            Sil
                        </button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}
