import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Health = () => {
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
                cardTitle: "Repair & Renovation of Red Crescent Medical Centre at Grumandir Karachi",
                details: {
                    id: 1,
                    prjName: "Repair & Renovation of Red Crescent Medical Centre at Grumandir Karachi",
                    mainLoc: "Pakistan Red Crescent Society",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "20 Million",
                }
            },
            {
                id: 2,
                cardTitle: "Eye Hospital at Gwadar",
                details: {
                    id: 2,
                    prjName: "Eye Hospital at Gwadar",
                    mainLoc: "Mary Adelaide Foundation",
                    city: "Gwadar, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "20 Million",
                }
            },
            {
                id: 3,
                cardTitle: "Orangi Town Hilal-e-Ahmer",
                details: {
                    id: 3,
                    prjName: "Orangi Town Hilal-e-Ahmer",
                    mainLoc: "Red Cresent Society",
                    city: "Karachi, Pakistan",
                    workType: "",
                    amount: "100 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Islamic Mission Hospital Korangi",
                details: {
                    id: 4,
                    prjName: "Islamic Mission Hospital Korangi",
                    mainLoc: "",
                    city: "Karachi, Pakistan",
                    workType: "",
                    amount: "100 Million",
                }
            },
            {
                id: 5,
                cardTitle: "Belair Clinic (Extension of 50 bed) Hospital",
                details: {
                    id: 5,
                    prjName: "Belair Clinic (Extension of 50 bed) Hospital",
                    mainLoc: "Dr.F.Shaikh",
                    city: "Hyderabad, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "100 Million",
                }
            },
            {
                id: 6,
                cardTitle: "Proposed Socio- Medical Complex at Orangi - 5",
                details: {
                    id: 6,
                    prjName: "Proposed Socio-Medical Complex at Orangi-5",
                    mainLoc: "Pakistan Red Crescent Society",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "100 Million",
                }
            },
            {
                id: 7,
                cardTitle: "HRH Prince Fahad Bin Sultan Bin Abdul Aziz Al-Saud Welfare Hospital at Dalbandin",
                details: {
                    id: 7,
                    prjName: "HRH Prince Fahad Bin Sultan Bin Abdul Aziz Al-Saud Welfare Hospital at Dalbandin",
                    mainLoc: "HRH Prince Fahad Bin Sultan Bin Abdul Aziz Al-Saud, Governor of Tabuk, K.S.A",
                    city: "Dalbandin Baluchistan, Pakistan",
                    workType: "Turnkey Project",
                    amount: "200 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Expansion & modification of Hilal-e-Ahmer House Clifton",
                details: {
                    id: 8,
                    prjName: "Expansion & modification of Hilal-e-Ahmer House Clifton",
                    mainLoc: "Pakistan Red Crescent Society",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "1.0 Billion",
                }
            },
        ];
    }

    return (
        <>
            <Helmet>
                <title>Health Facility - CGD Consulting - Engineering Excellence</title>
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

export default Health;
