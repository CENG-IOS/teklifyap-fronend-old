import React, { useEffect, useState } from "react";
import offerSVG from "../images/offer.svg";
import Offer from "../components/Offer";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import BaseURL from '../api/BaseURL'
import Modal from 'react-bootstrap/Modal';
import Waves from "../components/Waves";

export default function Offers() {
    const [offersInfo, setOffersInfo] = useState([]);
    const id = useSelector((state) => state.auth.userID);
    // const Theme = useSelector((state) => state.theme.theme);
    const [examine, setExamine] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [loading, setLoading] = useState(true);

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
        setTimeout(() => {
            fetch(BaseURL + `api/offer/getOffers`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            })
                .then((response) => response.json())
                .then((data) => {
                    setLoading(false)
                    if (data.data.length === 0)
                        setIsEmpty(true)
                    else
                        setOffersInfo(data.data)
                });
        }, 600);

    }, []);

    return (
        <>
            <div className="container-fluid p-0 position-relative">

                <div className="positive-relative">
                    <div className="inventory-img-top-section"></div>

                    <Waves />

                    <div className="d-flex justify-content-center">
                        <div className=" top-0 h3 user-select-none">
                            TEKLİFLERİM
                        </div>
                    </div>

                    <div className="container offers-section">
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
                        {loading &&
                            <Offer
                                m={getTableDatas}
                                key="placeholder"
                                offer_id="placeholder"
                                title="placeholder"
                                date="placeholder"
                                status="placeholder"
                            />}

                        {isEmpty &&
                            <div className="text-center bg-warning p-3 rounded-pill user-select-none font-weight-bold">
                                Görünüşe göre gösterilecek bir teklifiniz yok. Teklif yapmak için sağ üstteki tuşa basınız!
                            </div>
                        }

                    </div>
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
