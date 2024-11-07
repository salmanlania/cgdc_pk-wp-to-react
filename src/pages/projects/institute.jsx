import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";

const Institute = () => {
    let { state } = useLocation();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null); // Track selected card for modal content

    const showModal = (card) => {
        setSelectedCard(card); // Set the selected card's data
        setIsModalOpen(true); // Open the modal
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setSelectedCard(null); // Reset selected card when modal closes
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedCard(null); // Reset selected card when modal closes
    };

    let cardData = state?.cardData;

    if (!cardData) {
        cardData = [
            {
                id: 1,
                cardTitle: "Government Girls College, Gwadar.",
                details: {
                    id: 1,
                    prjName: "Government Girls College, Gwadar.",
                    mainLoc: "DC Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Design & Project Management",
                    amount: "20 Million",
                }
            },
            {
                id: 2,
                cardTitle: "Rotary School Rawalakot",
                details: {
                    id: 2,
                    prjName: "Rotary School Rawalakot",
                    mainLoc: "Rotary International",
                    city: "Rawalakot, Azad Kashmir",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "N/A",
                }
            },
            {
                id: 3,
                cardTitle: "Rotary Schools At Karachi, Ziarat, Turbat Etc.",
                details: {
                    id: 3,
                    prjName: "Rotary Schools At Karachi, Ziarat, Turbat Etc.",
                    mainLoc: "Rotary International",
                    city: "Pakistan",
                    workType: "Design & Project Management",
                    amount: "10 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Rotary School Jalalabad",
                details: {
                    id: 4,
                    prjName: "Rotary School Jalalabad",
                    mainLoc: "Rotary International",
                    city: "Jalalabad, Afghanistan",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "0.5 Million USD",
                }
            },
            {
                id: 5,
                cardTitle: "City School Larkana",
                details: {
                    id: 5,
                    prjName: "City School Larkana",
                    mainLoc: "Civic Centre Company(Pvt) ltd.",
                    city: "Larkana, Pakistan",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "200 Million",
                }
            },
            {
                id: 6,
                cardTitle: "Army Public School",
                details: {
                    id: 6,
                    prjName: "Army Public School",
                    mainLoc: "Pakistan Army",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "50 Million",
                }
            },
            {
                id: 7,
                cardTitle: "Gwadar Public School",
                details: {
                    id: 7,
                    prjName: "Gwadar Public School",
                    mainLoc: "DC Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "18 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Aga Khan School at Osh Kyrgyzstan",
                details: {
                    id: 8,
                    prjName: "Aga Khan School at Osh Kyrgyzstan",
                    mainLoc: "Aga Khan Education Service, Kyrgyzstan",
                    city: "Kyrgyzstan",
                    workType: "Design & Project Management",
                    amount: "2.0 Million USD",
                }
            },
            {
                id: 9,
                cardTitle: "Construction of School at Diyyat-Tolagi",
                details: {
                    id: 9,
                    prjName: "Construction of School at Diyyat-Tolagi",
                    mainLoc: "Rotary International",
                    city: "Construction of School at Diyyat-Tolagi",
                    workType: "Architectural & Engineering Design Top supervision",
                    amount: "10.0 Million",
                }
            },
            {
                id: 10,
                cardTitle: "Education institute/ School at Various Location",
                details: {
                    id: 10,
                    prjName: "Education institute/ School at Various Location",
                    mainLoc: "Rotary International",
                    city: "Pakistan / Afghanistan",
                    workType: "Design & Project Management",
                    amount: "100 Million",
                }
            },
            {
                id: 11,
                cardTitle: "Pakistan Naval Academy",
                details: {
                    id: 11,
                    prjName: "Pakistan Naval Academy",
                    mainLoc: "Pakistan Navy",
                    city: "Karachi, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design, Project Management",
                    amount: "2.0 Billion",
                }
            },
        ];
    }

    return (
        <>
            {cardData ? (
                <div className="overflow-hidden mx-1 mb-16 mt-1">
                    <Row gutter={[11, 11]}>
                        {cardData.map((card, index) => (
                            <Col key={index} xs={24} sm={12} md={8} lg={8}>
                                <button onClick={() => showModal(card)}>
                                    <div className="project-card relative overflow-hidden group cursor-pointer">
                                        <img src={staticImg} alt={card.details.prjName} className="w-full h-full object-cover" />
                                        {/* Overlay */}
                                        <div className="project-overlay uppercase font-jost  text-white">
                                            <p className="px-12">
                                                <span className="first-span text-center border-l-4 border-white pl-2 block">{card.details.prjName}</span>
                                                <br />
                                                <span className="second-span border-none text-center block tracking-wide">
                                                    {card.details.city}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </Col>
                        ))}
                    </Row>

                    <Modal open={isModalOpen} onOk={handleOk} footer={null} onCancel={handleCancel}>
                        {selectedCard && (
                            <div className="mx-6 my-8 text-white">
                                <h1 className="lg:text-2xl text-xl font-arimo uppercase font-black lg:my-4 my-3">
                                    <b>Project Details</b>
                                </h1>
                                <div className="flex lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faHouseChimney} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.prjName}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faUser} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.mainLoc}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faMapLocationDot} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.city}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faScrewdriverWrench} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.workType}
                                    </p>
                                </div>
                                <br />
                                <div className="flex  lg:my-4 my-2 items-center">
                                    <span className="lg:text-3xl text-xl me-7 items-center"><FontAwesomeIcon icon={faMoneyCheckDollar} /></span>
                                    <p className="lg:text-base text-sm text-start">
                                        {selectedCard.details.amount}
                                    </p>
                                </div>
                            </div>
                        )}
                    </Modal>
                </div >
            ) : (
                <p>No data available</p>
            )}
        </>
    );
};

export default Institute;
