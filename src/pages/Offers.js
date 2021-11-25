import React, { useEffect, useState } from "react";
import offerSVG from "../images/offer.svg";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BaseURL from '../api/BaseURL'
import Modal from 'react-bootstrap/Modal';

export default function Offers() {
    const [offersInfo, setOffersInfo] = useState([]);
    const id = useSelector((state) => state.auth.userID);
    const Theme = useSelector((state) => state.theme.theme);
    const [examine, setExamine] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const toggleExamine = () => {
        setExamine(!examine)
    }
    let values = {
        id: id.toString()
    };

    function getTableDatas(data) {
        setTableData(data)
        setTitle(data[0].offer.offer_title)
        setDate(data[0].offer.offer_date.split("T")[0])
        toggleExamine()
    }

    useEffect(() => {
        fetch(BaseURL + `api/offer/getOffers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
        })
            .then((response) => response.json())
            .then((data) => {
                setOffersInfo(data.data)
            });
    }, []);

    return (
        <>
            <div className="container-fluid p-0">
                <div className="d-flex justify-content-center position-relative">
                    <div className="position-absolute text-white h3 user-select-none pt-md-4 pt-3">
                        TEKLİFLERİM
                    </div>
                </div>

                <img src={offerSVG} alt="offer"></img>

                <div className="container-lg mt-5">
                    <Offer title="Teklif Başlığı" date="Tarih" header="true" />
                    {offersInfo.map((item) =>
                        <Offer
                            m={getTableDatas}
                            key={item.offer_id}
                            offer_id={item.offer_id}
                            title={item.offer_title}
                            date={item.offer_date.slice(0, 10)}
                            status={item.offer_status}
                        />
                    )}

                </div>
            </div>
            <Footer />

            <Modal show={examine} onHide={toggleExamine} centered size="lg">
                <Modal.Header className="bg-opacity-75 bg-primary" closeButton>
                    <Modal.Title className="user-select-none">
                        {title} <span className="h6">{date} </span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Malzemenin İsmi</th>
                                <th>Birim Fiyatı</th>
                                <th>Ölçü Birimi</th>
                                <th>Birim Miktarı</th>
                                <th>Tutar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((item, index) =>
                                <tr key={index}>
                                    <td className="text-center"> {index + 1} </td>
                                    <td>{item.material.material_name}</td>
                                    <td>{item.offer_material_price_per_unit} </td>
                                    <td>{item.material.material_unit}</td>
                                    <td>{item.offer_material_unit_quantity} </td>
                                    <td>{item.offer_material_unit_quantity * item.offer_material_price_per_unit} </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
        </>
    );
}
