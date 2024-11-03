import { useState } from "react";
import { Card } from "antd"; // Import Ant Design Card
import emp1 from "../assets/images/emp1.jpg";
import emp2 from "../assets/images/emp2.jpg";
import emp3 from "../assets/images/emp3.jpg";
import emp4 from "../assets/images/emp4.jpg";
import emp5 from "../assets/images/emp5.jpg";
import emp6 from "../assets/images/emp6.jpg";
import emp7 from "../assets/images/emp7.jpg";
import emp8 from "../assets/images/emp8.jpg";
import emp9 from "../assets/images/emp9.jpg";
import emp10 from "../assets/images/emp10.jpg";
import emp11 from "../assets/images/emp11.jpg";
import emp12 from "../assets/images/emp12.jpg";
import emp13 from "../assets/images/emp13.jpg";
import emp14 from "../assets/images/emp14.png";
import emp15 from "../assets/images/emp15.jpg";

const department = [
    { id: 1, depart: "Management" },
    { id: 2, depart: "Executive Team" },
    { id: 3, depart: "Core Team" },
];

const teamArray = [
    {
        id: 1,
        empName: "Hafeez Habibi",
        post: "Chairman",
        image: emp1,
        description: "Hafeez Habibi is a highly respected and experienced architect and urban planner with over four decades of professional experience. He remained associated with NESPAK and the Payette Association during the early years of his professional career while residing in Boston, USA. He has worked on a wide range of projects involving architecture and urban planning, both in Pakistan and internationally. Some of his notable projects include the Masterplan and design of the International Islamic University Islamabad (IIUI), the Rehabilitation of Dargah Sehwan Sharif, the Armed Forces Medical City (AFMC), upgradation of Downtown Saddar, Karachi, Pakistan Naval Academy - Manora, etc. In addition, he has worked on numerous housing schemes, including low-cost housing for 1200 units for the PHA in Karachi and eight fishermen colonies in Oman. Hafeez Habibi is known for his expertise and dedication to his work, and has made significant contributions to the field of architecture and urban planning.",
        modal: true,
        depart: "Management",
    },
    {
        id: 2,
        empName: "Kamil Hafeez",
        post: "CEO",
        image: emp2,
        description: "Kamil Hafeez is the CEO of Habibi Group. With a solid background in architecture and urbanism, Kamil brings a unique perspective and expertise to his role as CEO. He is an architect, validated by the Royal Institute of British Architects, holds a bachelor's degree in architecture and a master's degree from the Architectural Association School of Architecture. Kamil is known for his focus on innovation, research, and design, thinking in the modern environment. At Consultants Group, Kamil founded the Creative Design Lab, which is dedicated to enhancing creative designs through the use of cutting-edge techniques and research. The lab focuses on cost-effective approaches to architecture and design. In addition to his work at Habibi Group, Kamil has also spent time abroad learning about design management procedures and conducting joint research with local authorities, such as in Bogota, Colombia, where he worked to address problems with the city's transportation network. Kamil is a dedicated and experienced professional who brings a wealth of knowledge and proficiency to his role as CEO of Habibi Group.",
        modal: true,
        depart: "Management",
    },
    {
        id: 3,
        empName: "Sami Sajid",
        post: "Executive Director",
        image: emp3,
        description: "Sami Sajid is an experienced and accomplished business development professional with over 25 years of experience. With an academic background in Political Science, Sami has a comprehensive understanding of the principles and strategies necessary for successful business development. Throughout his career, Sami has established a consistent ability to identify and pursue new business opportunities, build and maintain relationships with clients and partners, and drive revenue growth for the organizations. Sami is a highly talented business development professional with a proven track record of success. He is a valuable asset to our organization, looking to expand and grow.",
        modal: true,
        depart: "Management",
    },
    {
        id: 4,
        empName: "Sohail Aslam",
        post: "Executive Director",
        image: emp4,
        modal: false,
        depart: "Executive Team",
    },
    {
        id: 5,
        empName: "Maj. ® Ahsan Siddiqui",
        post: "Executive Director",
        image: emp5,
        modal: false,
        depart: "Executive Team",
    },
    {
        id: 6,
        empName: "Tariq Saeed",
        post: "Director Engineering",
        image: emp6,
        modal: false,
        depart: "Executive Team",
    },
    {
        id: 7,
        empName: "Imran A. Khan",
        post: "Executive Director",
        image: emp7,
        modal: false,
        depart: "Executive Team",
    },
    {
        id: 8,
        empName: "Baber Saleem",
        post: "CFO",
        image: emp8,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 9,
        empName: "Danish Wali",
        post: "Company Secretary",
        image: emp9,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 10,
        empName: "Marium Sheerazi",
        post: "Head of Legal & Compliance",
        image: emp10,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 11,
        empName: "Jamil Ahmed Khan",
        post: "Project Manager",
        image: emp11,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 12,
        empName: "Sajjad Ali",
        post: "Senior Planner",
        image: emp12,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 13,
        empName: "Saif Uddin",
        post: "Senior Architect",
        image: emp13,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 14,
        empName: "Fariha Zuberi",
        post: "Senior Urban Planner",
        image: emp14,
        modal: false,
        depart: "Core Team",
    },
    {
        id: 15,
        empName: "Adil Nawaz",
        post: "Architect",
        image: emp15,
        modal: false,
        depart: "Core Team",
    },
];

const OurTeam = () => {
    const [selectedDepartment, setSelectedDepartment] = useState("Management");
    const [filteredTeam, setFilteredTeam] = useState(teamArray.filter(member => member.depart === "Management"));
    const [selectedMember, setSelectedMember] = useState(null);

    const handleDepartmentClick = (depart) => {
        setSelectedDepartment(depart);
        const filtered = teamArray.filter(member => member.depart === depart);
        setFilteredTeam(filtered);
    };

    const handleCardClick = (member) => {
        if (member.modal) {
            setSelectedMember(member);
        }
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="mb-8 flex flex-col items-center justify-center">
                <div className="flex flex-wrap justify-center items-center space-x-2 b-4">
                    {department.map(dep => (
                        <button
                            key={dep.id}
                            className={`h-12 px-4 py-2 mb-2 border ${selectedDepartment === dep.depart ? 'bg-red-800 text-white' : 'border-zinc-700 text-zinc-700'} font-jost whitespace-nowrap flex items-center justify-center`}
                            onClick={() => handleDepartmentClick(dep.depart)}
                        >
                            {dep.depart}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center">
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${filteredTeam.length > 3 ? 'md:grid-cols-4' : filteredTeam.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-4 justify-items-center`}>
                    {filteredTeam.length > 0 ? (
                        filteredTeam.map(member => (
                            <div key={member.id} className="flex justify-center">
                                <Card
                                    hoverable
                                    onClick={() => handleCardClick(member)}
                                    className={`py-8 shadow-2xl transition duration-300 ease-in-out hover:bg-gradient-to-br hover:from-red-600 hover:to-red-800 hover:text-white ${member.modal ? "cursor-pointer" : "cursor-default"}`}
                                    style={{ width: 240 }}
                                    cover={
                                        <div className="flex justify-center items-center h-36" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 150 }}>
                                            <img
                                                src={member.image}
                                                alt={member.empName}
                                                className="w-36 h-36 rounded-full object-cover"
                                            />
                                        </div>
                                    }
                                >
                                    <h1 className="text-center font-semibold text-lg font-arimo">{member.empName}</h1>
                                    <p className="text-center text-sm text-zinc-400 hover:text-white font-arimo">{member.post}</p>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-zinc-500">No team members found.</div>
                    )}
                </div>
            </div>

            {selectedMember && (
                <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 w-full max-h-[90vh] overflow-y-auto mx-auto flex flex-wrap bg-white rounded-lg p-6 relative">
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl p-2"
                                onClick={closeModal}
                            >
                                &times;
                            </button>

                            <img
                                alt={selectedMember.empName}
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={selectedMember.image}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 font-jost">
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {selectedMember.empName}
                                </h1>
                                <h2 className="text-sm title-font text-gray-500 tracking-widest mb-5">
                                    {selectedMember.post}
                                </h2>
                                <p className="leading-relaxed text-sm font-light">
                                    {selectedMember.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}


        </div>
    );
};

export default OurTeam;
