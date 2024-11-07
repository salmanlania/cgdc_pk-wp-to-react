import { Col, Row } from "antd";
import project1 from "../assets/images/projects/project1.jpg";
import project2 from "../assets/images/projects/project2.jpg";
import project3 from "../assets/images/projects/project3.jpg";
import project4 from "../assets/images/projects/project4.jpg";
import project5 from "../assets/images/projects/project5.jpg";
import project6 from "../assets/images/projects/project6.jpg";
import project7 from "../assets/images/projects/project7.jpg";
import project8 from "../assets/images/projects/project8.jpg";
// import staticImg from "../assets/images/projects/static.png";
import "../App.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet";

const Project = () => {

    const projectArr = [
        // Housing and urban design start
        {
            id: 1,
            page: "housing-and-urban-design",
            prjType: "Housing and urban design",
            prjImg: project1,
            cards: [
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
            ],
        },
        // Housing and urban design end

        // Infrastructure start
        {
            id: 2,
            page: "infrastructure",
            prjType: "Infrastructure",
            prjImg: project2,
            cards: [
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
            ]
        },
        // Infrastructure end

        // Health Facility start
        {
            id: 3,
            page: "health-facility",
            prjType: "Health Facility",
            prjImg: project3,
            cards: [
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
            ]
        },
        // Health Facility end

        // Institutinal Buildings start
        {
            id: 4,
            page: "institutinal-buildings",
            prjType: "Institutinal Buildings",
            prjImg: project4,
            cards: [
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
            ]
        },
        // Institutinal Buildings end

        // Industrial Projects start
        {
            id: 5,
            page: "industrial-projects",
            prjType: "Industrial Projects",
            prjImg: project5,
            cards: [
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
            ]
        },
        // Industrial Projects end

        // Mixed Use Projects start
        {
            id: 6,
            page: "mixed-use-projects",
            prjType: "Mixed Use Projects",
            prjImg: project6,
            cards: [
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
            ]
        },
        // Mixed Use Projects end

        // Recreational Tourism start
        {
            id: 7,
            page: "recreational-tourism",
            prjType: "Recreational Tourism",
            prjImg: project7,
            cards: [
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
            ]
        },
        // Recreational Tourism end

        // Water and Power start
        {
            id: 8,
            page: "water-and-power",
            prjType: "Water and Power",
            prjImg: project8,
            cards: [
                {
                    id: 1,
                    cardTitle: "Installation of 0.2 MGD Desalination Plant at Sangar Housing Project Gwadar",
                    details: {
                        id: 1,
                        prjName: "Installation of 0.2 MGD Desalination Plant at Sangar Housing Project Gwadar",
                        mainLoc: "DC Gwadar",
                        city: "Gwadar, Pakistan",
                        workType: "Design & Project Management",
                        amount: "58 Million",
                    }
                },
                {
                    id: 2,
                    cardTitle: "Installation of 0.2 MGD Desalination Plant at Gwadar Industrial Estate",
                    details: {
                        id: 2,
                        prjName: "Installation of 0.2 MGD Desalination Plant at Gwadar Industrial Estate",
                        mainLoc: "Gwadar Industrial Estate Development Authority",
                        city: "Gwadar, Pakistan",
                        workType: "Design & Project Management",
                        amount: "58 Million",
                    }
                },
                {
                    id: 3,
                    cardTitle: "Construction of Sub Station, Installation of Transformer& Laying of LT&HT Cables",
                    details: {
                        id: 3,
                        prjName: "Construction of Sub Station, Installation of Transformer& Laying of LT&HT Cables",
                        mainLoc: "Gwadar Industrial Estate Development Authority",
                        city: "Gwadar, Pakistan",
                        workType: "Detailed Design & Supervision",
                        amount: "50 Million",
                    }
                },
                {
                    id: 4,
                    cardTitle: "Laying of Underground Cables & Installation of Transformer at Sangar Housing Project",
                    details: {
                        id: 4,
                        prjName: "Laying of Underground Cables & Installation of Transformer at Sangar Housing Project",
                        mainLoc: "DC Gwadar",
                        city: "Gwadar, Pakistan",
                        workType: "Detailed Design & Supervision",
                        amount: "200 Million",
                    }
                },
            ]
        },
        // Water and Power end
    ]
    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: true,
        });
    }, []);
    return (
        <>
            <Helmet>
                <title>Projects - CGD Consulting - Engineering Excellence</title>
            </Helmet>
            <div className="overflow-hidden mx-3 mb-16">
                <h1 className="extra-bold text-3xl font-arimo uppercase font-black ms-7 text-zinc-600 my-8">
                    <b>Projects</b>
                </h1>
                <Row gutter={[20, 20]}>
                    {projectArr.map((project) => (
                        <Col key={project.id} xs={24} sm={12} md={8} lg={6}>
                            <Link to={`/project/${project.page}`} state={{ cardData: project.cards }}>
                                <div className="project-card relative overflow-hidden group" data-aos="fade-up">
                                    <img src={project.prjImg} alt={project.prjType} className="w-full h-full object-cover" />
                                    {/* Overlay */}
                                    <div className="project-overlay uppercase font-jost font-bold text-white">
                                        <span className="border-l-4 border-white pl-2">{project.prjType}</span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div >
        </>
    );
}


export default Project;