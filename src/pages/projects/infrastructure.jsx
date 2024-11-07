import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";

const Infrastructure = () => {
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
                cardTitle: "Lyari Expressway Project 17 K. M. 6 Lane Expressway",
                details: {
                    id: 1,
                    prjName: "Lyari Expressway Project 17 K. M. 6 Lane Expressway",
                    mainLoc: "K.M.C for CALL Central Asian Links Limited",
                    city: "Pakistan",
                    workType: "Engineering Design and Detail Project Management & BOT Negotiations(Project Shelved)",
                    amount: "4.0 Billion",
                }
            },
            {
                id: 2,
                cardTitle: "Extension of 500 Meters Runway at Dalbandin Airport",
                details: {
                    id: 2,
                    prjName: "Extension of 500 Meters Runway at Dalbandin Airport",
                    mainLoc: "HRH Prince Fahad Bin Sultan Bin Abdul Aziz Al-Saud, Governor of Tabuk, KSA",
                    city: "Pakistan",
                    workType: "Turnkey",
                    amount: "60 Million",
                }
            },
            {
                id: 3,
                cardTitle: "Basima Nag Road Project C &W, Balochistan",
                details: {
                    id: 3,
                    prjName: "Basima Nag Road Project C &W, Balochistan",
                    mainLoc: "JBIC-RRCP",
                    city: "Baluchistan, Pakistan",
                    workType: "Project Management",
                    amount: "70 Million",
                }
            },
            {
                id: 4,
                cardTitle: "New Town Housing Project dual carriageway Roads and Installation of street lights",
                details: {
                    id: 4,
                    prjName: "New Town Housing Project dual carriageway Roads and Installation of street lights",
                    mainLoc: "New Town Housing Project",
                    city: "Gwadar, Pakistan",
                    workType: "Engineering Design Detailed Supervision",
                    amount: "90 Million",
                }
            },
            {
                id: 5,
                cardTitle: "Up Gradation & Extension of Dalbandin Airport",
                details: {
                    id: 5,
                    prjName: "Up Gradation & Extension of Dalbandin Airport",
                    mainLoc: "HRH Prince Fahad Bin Sultan Bin Abdul Aziz Al-Saud, Governor of Tabuk, KSA",
                    city: "KSA",
                    workType: "Architectural and Engineering Design Top Supervision",
                    amount: "1.0 Billion",
                }
            },
            {
                id: 6,
                cardTitle: "Zarien Housing Scheme 100 Km Road network including Sewerage & water supply system",
                details: {
                    id: 6,
                    prjName: "Zarien Housing Scheme 100 Km Road network including Sewerage & water supply system",
                    mainLoc: "DC Gwadar",
                    city: "Pasni, Pakistan",
                    workType: "Engineering Design Detailed Supervision",
                    amount: "100 Million",
                }
            },
            {
                id: 7,
                cardTitle: "Sangar Housing Project 180 Km Road Network including Sewerage & Water Supply System",
                details: {
                    id: 7,
                    prjName: "Sangar Housing Project 180 Km Road Network including Sewerage & Water Supply System",
                    mainLoc: "Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Engineering Design Detailed Supervision",
                    amount: "250 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Gwadar Industrial Estate Road Network",
                details: {
                    id: 8,
                    prjName: "Gwadar Industrial Estate Road Network",
                    mainLoc: "Gwadar Industrial Estate",
                    city: "Gwadar, Pakistan",
                    workType: "Engineering Design Detailed Supervision",
                    amount: "250 Million",
                }
            },
            {
                id: 9,
                cardTitle: "Uplift & Beautification of Naushera",
                details: {
                    id: 9,
                    prjName: "Uplift & Beautification of Naushera",
                    mainLoc: "Local Government, KPK",
                    city: "Nawshera, KPK, Pakistan",
                    workType: "EMaster Planning, Design & Supervision",
                    amount: "400 Million",
                }
            },
            {
                id: 10,
                cardTitle: "Modernization of Gaddani ship breaking & Recycling industry (MOGSBRI) & Development of allied facilities",
                details: {
                    id: 10,
                    prjName: "Modernization of Gaddani ship breaking & Recycling industry (MOGSBRI) & Development of allied facilities",
                    mainLoc: "Balochistan Development Authority",
                    city: "Gaddani Balochistan, Pakistan",
                    workType: "Master Planning, Engineering Design & Top Supervision",
                    amount: "10.0 Billion",
                }
            },
            {
                id: 11,
                cardTitle: "Karachi Neighbourhood Improvement Project",
                details: {
                    id: 11,
                    prjName: "Karachi Neighbourhood Improvement Project",
                    mainLoc: "Directorate of Urban Policy and Strategic Planning, (UPSP), Govt. of Sindh (GOS)",
                    city: "Pakistan",
                    workType: "Master Planning, Engineering Design",
                    amount: "10.0 Billion",
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

export default Infrastructure;
