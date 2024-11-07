import { Col, Row } from "antd";
import { useLocation } from "react-router-dom";
import staticImg from "../../assets/images/projects/static.png";
import { useState } from 'react';
import { Modal } from 'antd';
import "../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faMapLocationDot, faMoneyCheckDollar, faScrewdriverWrench, faUser } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

const Industry = () => {
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
                cardTitle: "Textile Processing Plant /Office Building for M/S. Universal Chemicals at Karachi",
                details: {
                    id: 1,
                    prjName: "Textile Processing Plant /Office Building for M/S. Universal Chemicals at Karachi",
                    mainLoc: "Dr. Arshad Vohra",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "40 Million",
                }
            },
            {
                id: 2,
                cardTitle: "Textile Factory for M/S. Moon Light Industries",
                details: {
                    id: 2,
                    prjName: "Textile Factory for M/S. Moon Light Industries",
                    mainLoc: "Dr. Arshad Vohra",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering DesignTop Supervision",
                    amount: "50 Million",
                }
            },
            {
                id: 3,
                cardTitle: "Rehabilitation of Factory Building at Site, Karachi",
                details: {
                    id: 3,
                    prjName: "Rehabilitation of Factory Building at Site, Karachi",
                    mainLoc: "National Pesticide",
                    city: "Karachi, Pakistan",
                    workType: "Architectural & Engineering Design",
                    amount: "40 Million",
                }
            },
            {
                id: 4,
                cardTitle: "Pasdec Project at Gaddani",
                details: {
                    id: 4,
                    prjName: "Pasdec Project at Gaddani",
                    mainLoc: "Pakistan Stone Development Corporation",
                    city: "Gaddani, Pakistan",
                    workType: "Master Planning & Detailed Engineering Design",
                    amount: "50 Million",
                }
            },
            {
                id: 5,
                cardTitle: "Gwadar Industrial Estate",
                details: {
                    id: 5,
                    prjName: "Gwadar Industrial Estate",
                    mainLoc: "Government of Baluchistan",
                    city: "Gwadar, Pakistan",
                    workType: "Master Planning, Engineering Design & Project Management",
                    amount: "5.0 Billion",
                }
            },
        ];
    }

    return (
        <>
            <Helmet>
                <title>Industrial Projects - CGD Consulting - Engineering Excellence</title>
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

export default Industry;
