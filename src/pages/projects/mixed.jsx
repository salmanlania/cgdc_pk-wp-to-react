import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Mixed = () => {
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
                cardTitle: "Hotel Crown Plaza",
                details: {
                    id: 1,
                    prjName: "Hotel Crown Plaza",
                    mainLoc: "Private Developer",
                    city: "Islamabad, Pakistan",
                    workType: "Architectural & Engineering Design",
                    amount: "250 Million",
                }
            },
            {
                id: 2,
                cardTitle: "UBL- Vault Branch at Karachi",
                details: {
                    id: 2,
                    prjName: "UBL-Vault Branch at Karachi",
                    mainLoc: "United Bank Limited",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design Top Supervision",
                    amount: "10.0 Million",
                }
            },
            {
                id: 3,
                cardTitle: "16 Storied Building at Sharjah",
                details: {
                    id: 3,
                    prjName: "16 Storied Building at Sharjah",
                    mainLoc: "Private",
                    city: "UAE",
                    workType: "Architectural & Engineering Design",
                    amount: "10.0 Million AED",
                }
            },
            {
                id: 4,
                cardTitle: "7 Storied Building at Sharjah",
                details: {
                    id: 4,
                    prjName: "7 Storied Building at Sharjah",
                    mainLoc: "Private",
                    city: "UAE",
                    workType: "Architectural & Engineering Design",
                    amount: "5.0 Million AED",
                }
            },
            {
                id: 5,
                cardTitle: "UBL Data Centre",
                details: {
                    id: 5,
                    prjName: "UBL Data Centre",
                    mainLoc: "United Bank Limited",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design",
                    amount: "10.0 Million",
                }
            },
            {
                id: 6,
                cardTitle: "UBL office Building at Rawalkot",
                details: {
                    id: 6,
                    prjName: "UBL office Building at Rawalkot",
                    mainLoc: "United Bank Limited",
                    city: "Kashmir, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "50 Million",
                }
            },
            {
                id: 7,
                cardTitle: "Beverly Centre, Office Commercial Complex A-17-Storey Building at Jinnah Avenue",
                details: {
                    id: 7,
                    prjName: "Beverly Centre, Office Commercial Complex A-17-Storey Building at Jinnah Avenue",
                    mainLoc: "M/ S.Land Mark",
                    city: "Islamabad, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "500 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Office/Commercial Complex (6-Storey Building) at Jinnah Avenue",
                details: {
                    id: 8,
                    prjName: "Office/Commercial Complex (6-Storey Building) at Jinnah Avenue",
                    mainLoc: "Mr. Mian Akram Farid",
                    city: "Islamabad, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "200 Million",
                }
            },
            {
                id: 9,
                cardTitle: "Commercial Building at Islamabad",
                details: {
                    id: 9,
                    prjName: "Commercial Building at Islamabad",
                    mainLoc: "M/ S.Chaudhry Naseer",
                    city: "Islamabad, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "300 Million",
                }
            },
            {
                id: 10,
                cardTitle: "Construction of Regional Offices of National Highway Authority in Karachi, and Quetta",
                details: {
                    id: 10,
                    prjName: "Construction of Regional Offices of National Highway Authority in Karachi, and Quetta",
                    mainLoc: "National Highway Authority",
                    city: "Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "80 Million",
                }
            },
            {
                id: 11,
                cardTitle: "Awami Markaz at Larkana",
                details: {
                    id: 11,
                    prjName: "Awami Markaz at Larkana",
                    mainLoc: "M/S. Civic Centres Co",
                    city: "Larkana, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "300 Million",
                }
            },
            {
                id: 12,
                cardTitle: "Construction of Community Centre & Mosque at Judicial Colony",
                details: {
                    id: 12,
                    prjName: "Construction of Community Centre & Mosque at Judicial Colony",
                    mainLoc: "Judicial Officers Cooperative Housing Society Limited",
                    city: "Hyderabad, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "60 Million",
                }
            },
            {
                id: 13,
                cardTitle: "Construction of Sindh Property Record Facilitation Center",
                details: {
                    id: 13,
                    prjName: "Construction of Sindh Property Record Facilitation Center",
                    mainLoc: "FEB Industries",
                    city: "Different Locations of Sindh",
                    workType: "Architectural & Engineering Design",
                    amount: "500 Million",
                }
            },
            {
                id: 14,
                cardTitle: "Lahore Tower a 45 storied Corporate Office Tower",
                details: {
                    id: 14,
                    prjName: "Lahore Tower a 45 storied Corporate Office Tower",
                    mainLoc: "Lahore Development Authority",
                    city: "Lahore, Pakistan",
                    workType: "Architectural & Engineering Design, Project Management",
                    amount: "5.0 Billion",
                }
            },
            {
                id: 15,
                cardTitle: "All Pakistan Newspaper Society",
                details: {
                    id: 15,
                    prjName: "All Pakistan Newspaper Society",
                    mainLoc: "APNS",
                    city: "Karachi, Pakistan",
                    workType: "s",
                    amount: "80 Million",
                }
            },
        ];
    }

    return (
        <>
            <Helmet>
                <title>Mixed Use Projects - CGD Consulting - Engineering Excellence</title>
            </Helmet>
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

export default Mixed;
