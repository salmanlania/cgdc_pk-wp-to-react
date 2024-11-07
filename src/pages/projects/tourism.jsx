import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Tourism = () => {
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
                cardTitle: "Beautification of Gwadar",
                details: {
                    id: 1,
                    prjName: "Beautification of Gwadar",
                    mainLoc: "Nazim District Gwadar",
                    city: "Gwadar, Pakistan",
                    workType: "Architectural and Engineering Design",
                    amount: "100 Million",
                }
            },
            {
                id: 2,
                cardTitle: "Renovation of National Sailing Centre",
                details: {
                    id: 2,
                    prjName: "Renovation of National Sailing Centre",
                    mainLoc: "National Sailing Centre",
                    city: "Karachi, Pakistan",
                    workType: "Architecture & Interior Design Top Supervision",
                    amount: "10.0 Million",
                }
            },
            {
                id: 3,
                cardTitle: "DargahJam Datarat Nawabshah",
                details: {
                    id: 3,
                    prjName: "DargahJam Datarat Nawabshah",
                    mainLoc: "M/S. Auqaf Dept Govt. of Sindh",
                    city: "Pakistan",
                    workType: "Architectural & Engineering Services",
                    amount: "10.5 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Green Acres",
                details: {
                    id: 4,
                    prjName: "Green Acres",
                    mainLoc: "Green Ridge(Pvt.) Ltd",
                    city: "Gharo, Pakistan",
                    workType: "Architectural & Engineering DesignProject management",
                    amount: "500 Million",
                }
            },
            {
                id: 5,
                cardTitle: "Sports Complex for Pakistan Air Force",
                details: {
                    id: 5,
                    prjName: "Sports Complex for Pakistan Air Force",
                    mainLoc: "Pakistan Air Force",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design Supervision",
                    amount: "100 Million",
                }
            },
            {
                id: 6,
                cardTitle: "PAF Creek Club Korangi Base",
                details: {
                    id: 6,
                    prjName: "PAF Creek Club Korangi Base",
                    mainLoc: "Pakistan Air Force",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design Supervision",
                    amount: "400 Million",
                }
            },
            {
                id: 7,
                cardTitle: "MarjanResort Hotel at SangarHousing Scheme Gwadar",
                details: {
                    id: 7,
                    prjName: "MarjanResort Hotel at SangarHousing Scheme Gwadar",
                    mainLoc: "Private (Owner: Mr. Hamid Hamza)",
                    city: "Gwadar- Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "100 Million",
                }
            },
            {
                id: 8,
                cardTitle: "Micro Case Study for Galyat",
                details: {
                    id: 8,
                    prjName: "Micro Case Study for Galyat",
                    mainLoc: "Sarhad Tourism Corporation",
                    city: "Sarhad, Pakistan",
                    workType: "Feasibility Study & Design",
                    amount: "20 Million",
                }
            },
            {
                id: 9,
                cardTitle: "Additional Facilities at Kund National Park",
                details: {
                    id: 9,
                    prjName: "Additional Facilities at Kund National Park",
                    mainLoc: "Sarhad Tourism Corporation",
                    city: "Sarhad, Pakistan",
                    workType: "Feasibility Study & Design Concept",
                    amount: "35 Million",
                }
            },
            {
                id: 10,
                cardTitle: "Development of National Park and Tourism Facilities at Mahudand, Swat",
                details: {
                    id: 10,
                    prjName: "Development of National Park and Tourism Facilities at Mahudand, Swat",
                    mainLoc: "Sarhad Tourism Corporation",
                    city: "Sarhad, Pakistan",
                    workType: "Feasibility Study & Design Concept",
                    amount: "50 Million",
                }
            },
            {
                id: 11,
                cardTitle: "Preparation Of Detailed Master Plan For Revival Of Surroundings Of Empress Market And Adjoining Area Of Saddar, Karachi",
                details: {
                    id: 11,
                    prjName: "Preparation Of Detailed Master Plan For Revival Of Surroundings Of Empress Market And Adjoining Area Of Saddar, Karachi",
                    mainLoc: "KMC",
                    city: "Pakistan",
                    workType: "",
                    amount: "9.8 Million",
                }
            },
            {
                id: 12,
                cardTitle: "Re-Development of Complex of Hazrat Lal Shahbaz Qalandarat Sehwan, Dadu",
                details: {
                    id: 12,
                    prjName: "Re-Development of Complex of Hazrat Lal Shahbaz Qalandarat Sehwan, Dadu",
                    mainLoc: "M/S. National Construction Company",
                    city: "Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "600 Million",
                }
            },
            {
                id: 13,
                cardTitle: "Water Front Development plan at Gwadar",
                details: {
                    id: 13,
                    prjName: "Water Front Development plan at Gwadar",
                    mainLoc: "Baluchistan Development Authority",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning, Feasibilities, Conceptual Design, etc.",
                    amount: "7.0 Billion",
                }
            },
            {
                id: 14,
                cardTitle: "Installation of Cable Car System in Islamabad (Proposal only)",
                details: {
                    id: 14,
                    prjName: "Installation of Cable Car System in Islamabad (Proposal only)",
                    mainLoc: "Capital Development Authority (CDA)",
                    city: "Islamabad, Pakistan",
                    workType: "Technical Proposal, Pre-Feasibility Report",
                    amount: "893.67 Million (as per January 2008 quote)",
                }
            },
            {
                id: 15,
                cardTitle: "installation of Chairlifts and Cable Cars in NeelaButt-Bhurban",
                details: {
                    id: 15,
                    prjName: "installation of Chairlifts and Cable Cars in NeelaButt-Bhurban",
                    mainLoc: "Azad Govt. of the State of Jammu & Kashmir, Muzaffarabad.",
                    city: "Neela Butt, Pakistan",
                    workType: "Feasibility Study",
                    amount: "7.0 Billion",
                }
            },
            {
                id: 16,
                cardTitle: "Installation of Chairlifts and Cable Cars in Azad Jammu & Kashmir Saran Pirchinnasi",
                details: {
                    id: 16,
                    prjName: "Installation of Chairlifts and Cable Cars in Azad Jammu & Kashmir Saran Pirchinnasi",
                    mainLoc: "Azad Govt. of the State of Jammu & Kashmir, Muzaffarabad",
                    city: "Azad Kashmir",
                    workType: "Feasibility Study Architectural Concepts",
                    amount: "1.5 Billion",
                }
            },
            {
                id: 17,
                cardTitle: "Commercial / Sport Complex, Canyon Views Development Islamabad",
                details: {
                    id: 17,
                    prjName: "Commercial / Sport Complex, Canyon Views Development Islamabad",
                    mainLoc: "EMMAR",
                    city: "Islamabad, Pakistan",
                    workType: "Master planning & Designing",
                    amount: "3.0 Billion",
                }
            },
            {
                id: 18,
                cardTitle: "Acacia 18 Hole Country & Golf Course at Malir along with 5 Star Hotel, Convention Centre and Shopping Mall",
                details: {
                    id: 18,
                    prjName: "Acacia 18 Hole Country & Golf Course at Malir along with 5 Star Hotel, Convention Centre and Shopping Mall",
                    mainLoc: "Head quarterscorps 5",
                    city: "Karachi, Pakistan",
                    workType: "Project & Construction Management, Complete infrastructure design& construction supervision",
                    amount: "1.20 Billion",
                }
            },
        ];
    }

    return (
        <>
            <Helmet>
                <title>Recreational Tourism - CGD Consulting - Engineering Excellence</title>
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

export default Tourism;
