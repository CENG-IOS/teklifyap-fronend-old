import React, { useEffect, useState } from "react";
import Buttons from "../components/Buttons/Buttons";
import { useSelector } from "react-redux";
import Modal from 'react-bootstrap/Modal';
import BaseURL from '../api/BaseURL'
import Placeholder from 'react-bootstrap/Placeholder'
import Avatar from '@mui/material/Avatar';

const Profile = () => {
    const [info, setInfo] = useState({});
    const [dataSuccess, setSuccess] = useState(false);
    const id = useSelector((state) => state.auth.userID);
    const Theme = useSelector((state) => state.theme.theme);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [loading, setLoading] = useState(false);
    const [firstLetters, setFirstLettters] = useState("");
    const [rndColor, setRndColor] = useState("");

    let values = {
        user_id: id,
    };

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const handleClose = () => {
        setIsOpen2(false)
        setTimeout(() => {
            setSuccess(!dataSuccess)
        }, 500)
    }

    function dateConverter() {
        const date = new Date(info.user_creation_date)
        const year = date.getFullYear()
        const month = date.toLocaleString('default', { month: 'long' });
        return {
            year: year,
            month: month
        }
    }

    function submitHandler(e) {
        e.preventDefault();
        let date = new Date(document.getElementById("date").value)
        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset * 60 * 1000))

        let newUser = {
            user_id: id,
            user_name: document.getElementById("name").value,
            user_surname: document.getElementById("surname").value,
            user_email: document.getElementById("email").value,
            user_password: document.getElementById("pass").value,
            user_creation_date: date.toISOString().split('T')[0]
        }

        fetch(BaseURL + `api/user/updateInformation`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    setSuccess(true)
                } else {
                    setSuccess(false)
                }
                setInfo(data.data)
            });


        togglePopup()
        setTimeout(() => {
            setIsOpen2(true)
        }, 300)
    }

    useEffect(() => {
        const colors = ["#6664A3", "#ED9CBF", "#9B7FC0", "#FFD9D6", "#F1BD80"]
        setRndColor(colors[Math.floor(Math.random() * colors.length)])
        fetch(BaseURL + `api/user/userProfile`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((response) => response.json())
            .then((data) => {
                setInfo(data.data)
                setFirstLettters(data.data.user_name.charAt(0) + data.data.user_surname.charAt(0))
                setLoading(true)
            });
    }, [])


    return (
        <React.Fragment>

            <div className="container position-relative ">
                <div className="d-flex justify-content-center ">
                    <div className={!Theme ?
                        loading ? "profile-wrapper mt-3 mb-4 p-5 pt-4 bg-opacity-75 bg-secondary text-white round" : "col-11 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 mt-3 mb-4 p-5 pt-4 bg-opacity-75 bg-secondary round"
                        :
                        loading ? "profile-wrapper mt-3 mb-4 p-5 pt-4  bg-light text-dark round" : "col-11 col-sm-10 col-md-7 col-lg-6 col-xl-5 col-xxl-4 mt-3 mb-4 p-5 pt-4 bg-light text-dark round"
                    }>
                        {loading ?
                            <div className="user-select-none text-center mt-3 h2 m-0">{info.user_name + ' ' + info.user_surname}</div>
                            :
                            <div className="user-select-none text-center mt-3 h2 m-0">
                                <Placeholder as="p" animation="glow">
                                    <Placeholder xs={12} size="lg" />
                                </Placeholder>
                            </div>
                        }

                        <div className="d-flex justify-content-center my-4">
                            <Avatar sx={{ backgroundColor: rndColor, width: 140, height: 140 }}>
                                <div className="h1 m-0">
                                    {loading ?
                                        firstLetters
                                        :
                                        <Placeholder style={{ width: "30px" }} as="div" animation="glow">
                                            <Placeholder xs={12} />
                                        </Placeholder>
                                    }
                                </div>
                            </Avatar>
                        </div>

                        <div className="d-flex flex-row mt-3 mb-3">
                            <div className="d-flex justify-content-center flex-column col-3 ms-5">
                                <label
                                    className="profile-info profile-info-label"
                                    htmlFor="remember"
                                >
                                    Email:
                                </label>

                                <label
                                    className="profile-info profile-info-label"
                                    htmlFor="remember"
                                >
                                    Şifre:
                                </label>
                            </div>

                            <div className="d-flex flex-column col-8">
                                {loading ?
                                    <>
                                        <div className="d-inline profile-info"> {info.user_email}</div>
                                        <div className="d-inline profile-info">*********</div>
                                    </> :
                                    <>
                                        <div className="d-inline profile-info">
                                            <Placeholder as="p" animation="glow">
                                                <Placeholder xs={12} size="lg" />
                                            </Placeholder>
                                        </div>

                                        <div className="d-inline profile-info">
                                            <Placeholder as="p" animation="glow">
                                                <Placeholder xs={12} size="lg" />
                                            </Placeholder>
                                        </div>
                                    </>
                                }
                            </div>
                        </div>

                        {loading ?
                            <div className="d-inline profile-info ">Kullanıcı <b>{dateConverter().year}</b>  yılının <b>{dateConverter().month.toLowerCase()}</b> ayında kaydoldu.</div>
                            :
                            <div className="d-inline profile-info ">
                                <Placeholder as="p" animation="glow">
                                    <Placeholder xs={12} size="lg" />
                                </Placeholder>
                            </div>

                        }

                        {loading ?
                            <div className="d-flex justify-content-end p-0 mt-4">
                                <Buttons clicked={togglePopup} title="Bilgilerimi Düzenle"></Buttons>
                            </div>
                            :
                            <div className="d-flex justify-content-end p-0 mt-4">
                                <Placeholder.Button xs={6} aria-hidden="true" bg="warning"/>
                            </div>
                        }

                    </div>
                </div>
            </div>

            <Modal show={isOpen} onHide={togglePopup} centered>
                <Modal.Header className="bg-opacity-75 bg-primary" closeButton>
                    <Modal.Title className="user-select-none">Bilgi Güncelleme</Modal.Title>
                </Modal.Header>

                <Modal.Body className="user-select-none">
                    <div className="d-flex flex-column">
                        <form action="POST" onSubmit={submitHandler}>

                            <div className="input-group mt-4">
                                <div className="input-group-prepend col-4">
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Ad :</label>
                                </div>
                                <input id="name" required type="text" className="form-control" defaultValue={info.user_name} />
                            </div>

                            <div className="input-group  mt-2">
                                <div className="input-group-prepend col-4">
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Soyad :</label>
                                </div>
                                <input id="surname" required type="text" className="form-control" defaultValue={info.user_surname} />
                            </div>

                            <div className="input-group mt-2">
                                <div className="input-group-prepend col-4">
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Email :</label>
                                </div>
                                <input id="email" required type="email" className="form-control" defaultValue={info.user_email} />
                            </div>

                            <div className="input-group mt-2">
                                <div className="input-group-prepend col-4">
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Şifre :</label>
                                </div>
                                <input id="pass" required type="password" className="form-control" />
                            </div>

                            <div className="input-group mt-2">
                                <div className="input-group-prepend col-4" >
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Şifre onayla :</label>
                                </div>
                                <input id="passConfirm" required type="password" className="form-control" />
                            </div>

                            <div className="input-group mt-2">
                                <div className="input-group-prepend col-4">
                                    <label className="input-group-text profile-info-label" htmlFor="remember" >Kayıt tarihi:</label>
                                </div>
                                <input id="date" type="text" className="form-control" disabled value={new Date(info.user_creation_date).toLocaleDateString()} />
                            </div>

                            <div className="d-flex justify-content-end mt-2">
                                <Buttons title="Gönder" />
                            </div>

                        </form>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={isOpen2} onHide={handleClose} centered size="sm">
                <Modal.Header className={dataSuccess ? "bg-opacity-75 bg-success" : "bg-opacity-75 bg-danger"} closeButton>
                    <Modal.Title className="user-select-none">{dataSuccess ? "Başarılı!" : "Opss Hata!"}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {dataSuccess ? "Bilgileriniz güncellendi!" : "Lütfen daha sonra tekrar deneyiniz!"}
                </Modal.Body>
            </Modal>

        </React.Fragment>
    );
};
export default Profile;
