import React, { useState, useEffect, useRef } from "react";
import leftVector from "../../images/leftVector.svg";
import middleVector from "../../images/middleVector.svg";
import rightVector from "../../images/rightVector.svg";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import BaseURL from "../../api/BaseURL"
import Placeholder from 'react-bootstrap/Placeholder'
import Form from 'react-bootstrap/Form'

export default function ProductB(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [openRes, setOpenRes] = useState(false);
    const [res, setRes] = useState({});
    const [isSure, setIsSure] = useState(false);
    const [mateial_id, setMaterialID] = useState(props.material_id);
    const id = useSelector((state) => state.auth.userID);
    const ppu = useRef(0);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    function openIsSure() {
        togglePopup()
        setIsSure(true)
    }

    const DeleteMaterial = () => {
        setIsSure(false)
        setTimeout(() => setOpenRes(true), 650)

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

    const updateMaterial = () => {

        fetch(BaseURL + "api/material/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                material_id: mateial_id,
                material_name: props.title,
                material_unit: props.unit,
                material_price_per_unit: ppu.current.value,
                material_is_verified: 1,
                user: {
                    user_id: id
                }
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsOpen(false)
                setOpenRes(true)
                setRes({
                    success: true,
                    message: data.message
                })
            });
    }


    return (
        <>
            <div className="m-3">
                <div onClick={props.catcher} className="btn product-btn d-flex flex-column justify-content-around round" onClick={props.title === "placeholder" ? null : togglePopup}>
                    <div className="d-flex position-relative justify-content-center z-index-fixer">
                        <div className="position-absolute d-flex justify-content-center align-items-center h-100 product-text ">
                            {props.title === "placeholder" ?
                                <Placeholder as="p" animation="glow">
                                    <Placeholder xs={6} style={{ width: 150 }} />
                                </Placeholder>
                                :
                                props.title}
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
                </div>
            </div>

            <Modal show={isOpen} onHide={togglePopup} centered size="sm">
                <Modal.Header className="bg-opacity-75 bg-primary user-select-none" closeButton>
                    <Modal.Title> {props.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="d-flex flex-column justify-content-center mt-3">
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label><b>ÖLÇÜ BİRİMİ:</b></Form.Label>
                                <Form.Control type="text" disabled defaultValue={props.unit} />
                            </Form.Group>
                        </Form>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label><b>BİRİM FİYATI:</b></Form.Label>
                                <Form.Control type="number" min="0" defaultValue={props.price_per_unit} ref={ppu} />
                            </Form.Group>
                        </Form>

                        {props.is_fixed ? <div className="text-center">"Bu silinemez bir malzemedir!"</div> : null}
                    </div>
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-evenly">
                    <button className="btn btn-success col-4" onClick={updateMaterial}>Kaydet</button>
                    {props.is_fixed ? null :
                        <button className="btn btn-danger col-4" onClick={openIsSure}>Sil</button>
                    }

                </Modal.Footer>
            </Modal>

            <Modal show={openRes} backdrop="static" onHide={() => window.location.reload(false)} centered size="sm">
                <Modal.Header className={res.success ? "bg-opacity-75 bg-success" : "bg-opacity-75 bg-danger"} closeButton >
                    <Modal.Title>{!res.success ? "Hata" : "Başarılı!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {res.message}
                </Modal.Body>
            </Modal>

            <Modal show={isSure} onHide={() => setIsSure(false)} centered size="sm">
                <Modal.Header className="bg-opacity-75 bg-warning" closeButton >
                    <Modal.Title>Emin misin?</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Mazemeyi silmen ilgili tekliflerde de silmene yol açar!
                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-evenly">
                    <button className="btn btn-success col-3" onClick={DeleteMaterial} >Evet</button>
                    <button className="btn btn-danger col-3" onClick={() => setIsSure(false)} >Hayır</button>
                </Modal.Footer>
            </Modal>

        </>

    );

}
