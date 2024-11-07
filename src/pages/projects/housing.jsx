import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";

const Housing = () => {
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
                cardTitle: "Apartments at Old Subzi Mandi",
                details: {
                    id: 1,
                    prjName: "Apartments at Old Subzi Mandi",
                    mainLoc: "Federal Government Employees Housing Foundation",
                    city: "Karachi, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design, Project Management",
                    amount: "1.0 Billion",
                }
            },
            {
                id: 2,
                cardTitle: "Apartments at Kemari Town",
                details: {
                    id: 2,
                    prjName: "Apartments at Kemari Town",
                    mainLoc: "Pakistan Housing Authority",
                    city: "Karachi, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design, Project Management",
                    amount: "12.0 Billion",
                }
            },
            {
                id: 3,
                cardTitle: "Low Cost Housing Units at Turbat",
                details: {
                    id: 3,
                    prjName: "Low Cost Housing Units at Turbat",
                    mainLoc: "Rotary International",
                    city: "Baluchistan, Pakistan",
                    workType: "Project Management",
                    amount: "50 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Zarrien Housing Scheme at Pasni",
                details: {
                    id: 4,
                    prjName: "Zarrien Housing Scheme at Pasni",
                    mainLoc: "DC Gwadar C&W Baluchistan through GSE Consortium",
                    city: "Pasni, Pakistan",
                    workType: "Master Planning, Designing, Construction & Project Management",
                    amount: "1.0 Billion",
                }
            },
            {
                id: 5,
                cardTitle: "Raza Ridge Housing Compound",
                details: {
                    id: 5,
                    prjName: "Raza Ridge Housing Compound",
                    mainLoc: "M/S. Technology & Resources",
                    city: "Rawalpindi, Pakistan",
                    workType: "Architectural & Engineering Design Supervision",
                    amount: "50 Million",
                }
            },
            {
                id: 6,
                cardTitle: "Apartments at Bath Island",
                details: {
                    id: 6,
                    prjName: "Apartments at Bath Island",
                    mainLoc: "Pakistan Housing Authority",
                    city: "Karachi, Pakistan",
                    workType: "Design, Supervision",
                    amount: "200 Million",
                }
            },
            {
                id: 7,
                cardTitle: "Housing Scheme for M/S. Ansari Sugar Mills at Matli, Hyderabad",
                details: {
                    id: 7,
                    prjName: "Housing Scheme for M/S. Ansari Sugar Mills at Matli, Hyderabad",
                    mainLoc: "M/S. Ansari Sugar Mills",
                    city: "Malti, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "25 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Development of Sunley Bungalows",
                details: {
                    id: 8,
                    prjName: "Development of Sunley Bungalows",
                    mainLoc: "Sunley Developers",
                    city: "Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design",
                    amount: "300 Million",
                }
            },
            {
                id: 9,
                cardTitle: "Construction of ArtisinResidential Colony at Mitthi",
                details: {
                    id: 9,
                    prjName: "Construction of ArtisinResidential Colony at Mitthi",
                    mainLoc: "Sindh Small Industries Development Corporation",
                    city: "Mitthi-Sindh, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design",
                    amount: "120 Million",
                }
            },
            {
                id: 10,
                cardTitle: "Sanghar Heights",
                details: {
                    id: 10,
                    prjName: "Sanghar Heights",
                    mainLoc: "AL Qasib Builders & Developers, Quetta",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design & Project Management",
                    amount: "250 Million",
                }
            },
            {
                id: 11,
                cardTitle: "Apartments at Milk Plant Premises",
                details: {
                    id: 11,
                    prjName: "Apartments at Milk Plant Premises",
                    mainLoc: "Pakistan Housing Authority",
                    city: "Karachi, Pakistan",
                    workType: "Design, Supervision",
                    amount: "350 Million",
                }
            },
            {
                id: 12,
                cardTitle: "Residential Complex at Sports City, Hyderabad",
                details: {
                    id: 12,
                    prjName: "Residential Complex at Sports City, Hyderabad",
                    mainLoc: "Continental Enterprises",
                    city: "Hyderabad, Pakistan",
                    workType: "Architectural, Engineering Design & Supervision",
                    amount: "4.5 Billion",
                }
            },
            {
                id: 13,
                cardTitle: "Kalmati Drive Housing Scheme adjacent to Coastal Highway",
                details: {
                    id: 13,
                    prjName: "Kalmati Drive Housing Scheme adjacent to Coastal Highway",
                    mainLoc: "Kalmati Builders",
                    city: "Gwadar, Pakistan",
                    workType: "Master planning, Engineering Designing & Project Management",
                    amount: "1.0 Billion",
                }
            },
            {
                id: 14,
                cardTitle: "Rest House for Sangar Housing Scheme",
                details: {
                    id: 14,
                    prjName: "Rest House for Sangar Housing Scheme",
                    mainLoc: "DC, Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Detailed Supervision",
                    amount: "20 Million",
                }
            },
            {
                id: 15,
                cardTitle: "New Town Housing Project",
                details: {
                    id: 15,
                    prjName: "New Town Housing Project",
                    mainLoc: "DC, Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Master planning, Designing, Construction & Project Management",
                    amount: "3.0 Billion",
                }
            },
            {
                id: 16,
                cardTitle: "Export Processing Zone",
                details: {
                    id: 16,
                    prjName: "Export Processing Zone",
                    mainLoc: "Export Processing Zone Authority",
                    city: "Gwadar, Pakistan",
                    workType: "Master planning, Designing & Project Management",
                    amount: "4.8 Billion",
                }
            },
            {
                id: 17,
                cardTitle: "Third Party Validation Of Housing Project",
                details: {
                    id: 17,
                    prjName: "Third Party Validation Of Housing Project",
                    mainLoc: "GDA",
                    city: "Gwadar, Pakistan",
                    workType: "Technical, Financial Legal Evaluation of the Projects",
                    amount: "N/A",
                }
            },
            {
                id: 18,
                cardTitle: "Balochistan Employees Corporative Housing Society",
                details: {
                    id: 18,
                    prjName: "Balochistan Employees Corporative Housing Society",
                    mainLoc: "DC, Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning Designing & Project Management",
                    amount: "330 Million",
                }
            },
            {
                id: 19,
                cardTitle: "Maanbar Housing Scheme, pishukan",
                details: {
                    id: 19,
                    prjName: "Maanbar Housing Scheme, pishukan",
                    mainLoc: "DC, Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning, Architectural ,Engineering Design& Project Management",
                    amount: "2.5 Billion",
                }
            },
            {
                id: 20,
                cardTitle: "Sangar Housing Project at 2500 Acres at Gwadar Baluchistan",
                details: {
                    id: 20,
                    prjName: "Sangar Housing Project at 2500 Acres at Gwadar Baluchistan",
                    mainLoc: "DC, Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning Designing & Project Management",
                    amount: "6.0 Billion",
                }
            },
            {
                id: 21,
                cardTitle: "Creek View and Creek Terraces",
                details: {
                    id: 21,
                    prjName: "Creek View and Creek Terraces",
                    mainLoc: "BF Property Malaysia Developers SPONCERD.H.A",
                    city: "Karachi, Pakistan",
                    workType: "Master Planning, Architectural & Engineering Design, Project Management",
                    amount: "20.0 Billion",
                }
            },
            {
                id: 22,
                cardTitle: "Apartments at Rashid Minhas Road",
                details: {
                    id: 22,
                    prjName: "Apartments at Rashid Minhas Road",
                    mainLoc: "Pakistan Housing Authority",
                    city: "Karachi, Pakistan",
                    workType: "Design, Supervision",
                    amount: "500 Million",
                }
            },
            {
                id: 23,
                cardTitle: "Prime Minister’s Housing Program Apartments at P.B.C. Land, Landhi",
                details: {
                    id: 23,
                    prjName: "Prime Minister’s Housing Program Apartments at P.B.C. Land, Landhi",
                    mainLoc: "Pakistan Housing Authority",
                    city: "Karachi, Pakistan",
                    workType: "Masster Planning, Architectural & Engineering Design, Design/ Supervision",
                    amount: "600 Million",
                }
            },
            {
                id: 24,
                cardTitle: "Fazaia Housing Scheme",
                details: {
                    id: 24,
                    prjName: "Fazaia Housing Scheme",
                    mainLoc: "Pakistan Air Force",
                    city: "Karachi, Pakistan",
                    workType: "Master Planning Architectural & Engineering Design, Project Management",
                    amount: "17 Billion",
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

export default Housing;
