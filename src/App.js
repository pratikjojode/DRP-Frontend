import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Toaster } from "react-hot-toast"; // Import Toaster from react-hot-toast
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute";
import NotFound404 from "./components/Notfoundz404";
import InquiryPage from "./users/InquiryPage";
import Blogs from "./pages/Blogs";
import FormPopup from "./components/FormPopup";
import BlogDetails from "./pages/BlogDetails";
import OurCourses from "./users/OurCourses";
import CourseDetail from "./pages/CourseDetailPage";
import DrpIndiaEduHome from "./DRP_India_Abroad_Education/DrpIndiaEduHome";
import DrpEduServices from "./DRP_India_Abroad_Education/DrpEduServices";
import DrpCoaching from "./DRP_India_Abroad_Education/DrpCoaching";
import DrpUniversities from "./DRP_India_Abroad_Education/DrpUniversities";
import DrpContactUs from "./DRP_India_Abroad_Education/DrpContactUs";
import DrpAboutPage from "./DRP_India_Abroad_Education/DrpAboutPage";
import DrpCounselling from "./DRP_India_Abroad_Education/DrpCounselling";
import FeedbackPage from "./DRP_India_Abroad_Education/FeedbackPage";
import DrpCoutries from "./DRP_India_Abroad_Education/DrpCoutries";
import USA from "./DRP_India_Abroad_Education/USA";
import UK from "./DRP_India_Abroad_Education/UK";
import Canada from "./DRP_India_Abroad_Education/Canada";
import Australia from "./DRP_India_Abroad_Education/Australia";
import Germany from "./DRP_India_Abroad_Education/Germany";
import EducationLoan from "./DRP_India_Abroad_Education/EducationLoan";
import Insurance from "./DRP_India_Abroad_Education/Insurance";
import SimCards from "./DRP_India_Abroad_Education/SimCards";
import Forex from "./DRP_India_Abroad_Education/Forex";
import Accommodation from "./DRP_India_Abroad_Education/Accommodation";
import StudentVisa from "./DRP_India_Abroad_Education/StudentVisa";
import TravelTourism from "./DRP_India_Abroad_Education/TravelTourism";
import Immigration from "./DRP_India_Abroad_Education/Immigration";
import AirTicketBooking from "./DRP_India_Abroad_Education/AirTicketBooking";
import India from "./DRP_Services/India";
import Abroad from "./DRP_Services/Abroad";
import WebDev from "./DRP_Services/WebDev";
import AppDev from "./DRP_Services/AppDev";
import CloudSer from "./DRP_Services/CloudSer";
import Hardware from "./DRP_Services/Hardware";
import MSCIT from "./DRP_Services/MSCIT";
import ComputerProgramming from "./DRP_Services/ComputerProgramming";
import Graphic from "./DRP_Services/Graphic";
import HardwareCourses from "./DRP_Services/HardwareCourses";
import MarketingVideo from "./DRP_Services/MarketingVideo";
import AutoDeskCad from "./DRP_Services/AutoDeskCad";
import Company from "./AboutPages/Company";
import VissionAndMission from "./AboutPages/VissionAndMission";
import CoreValues from "./AboutPages/CoreValues";
import OurSkills from "./AboutPages/OurSkills";
import LeaderShip from "./AboutPages/LeaderShip";
import IndianHome from "./pages/IndianHome";
import BlogServices from "./DRP_Services/BlogServices";
import ContactHome from "./components/ContactHome";
import Europe from "./DRP_India_Abroad_Education/Europe";
import DummyTicket from "./DRP_Services/DummyTicket";
import DrpSoftwareSolHome from "./DrpSoftwareSolPvtLtd/DrpSoftwareSolHome";
import DrpSoftwareAbout from "./DrpSoftwareSolPvtLtd/DrpSoftwareAbout";
import SofwareDevelpmentSol from "./DrpSoftwareSolPvtLtd/SofwareDevelpmentSol";
import Internship from "./DrpSoftwareSolPvtLtd/Internship";
import Traning from "./DrpSoftwareSolPvtLtd/Traning";
import Projects from "./DrpSoftwareSolPvtLtd/Projects";
import EducatinalServices from "./DrpSoftwareSolPvtLtd/EducatinalServices";
import DrpSolContact from "./DrpSoftwareSolPvtLtd/DrpSolContact";
import ManaulTesting from "./DrpSoftwareSolPvtLtd/IT_Certifications/ManaulTesting";
import AutomationTesting from "./DrpSoftwareSolPvtLtd/IT_Certifications/AutomationTesting";
import Java from "./DrpSoftwareSolPvtLtd/IT_Certifications/Java";
import SalesForce from "./DrpSoftwareSolPvtLtd/IT_Certifications/SalesForce";
import DataScience from "./DrpSoftwareSolPvtLtd/IT_Certifications/DataScience";
import RestApi from "./DrpSoftwareSolPvtLtd/IT_Certifications/RestApi";
import NetDev from "./DrpSoftwareSolPvtLtd/IT_Certifications/NetDev";
import ReactJs from "./DrpSoftwareSolPvtLtd/IT_Certifications/ReactJs";
import Rpa from "./DrpSoftwareSolPvtLtd/IT_Certifications/Rpa";
import HardwareNetwoorking from "./DrpSoftwareSolPvtLtd/IT_Certifications/HardwareNetwoorking";
import DrpCompEducation from "./DrpComputerEducation/DrpCompEducation";
import DrpCompAbout from "./DrpComputerEducation/DrpCompAbout";
import DrpCompContact from "./DrpComputerEducation/DrpCompContact";
import TrendingCourses from "./DrpComputerEducation/TrendingCourses";
import ComputerProgrammingcomp from "./DrpComputerEducation/ComputerProgrammingcomp";
import NewCourses from "./DrpComputerEducation/NewCourses";
import HardwareCoursesComp from "./DrpComputerEducation/HardwareCoursesComp";
import GraphicDesighing from "./DrpComputerEducation/GraphicDesighing";
import MarketingVideoEdting from "./DrpComputerEducation/MarketingVideoEdting";
import AutodeskCadComp from "./DrpComputerEducation/AutodeskCadComp";
import ManualTestingComp from "./DrpComputerEducation/ManualTestingComp";
import AutomationTestingComp from "./DrpSoftwareSolPvtLtd/IT_Certifications/AutomationTestingComp";
import JavaFullStackDevelopmentComp from "./DrpSoftwareSolPvtLtd/IT_Certifications/JavaFullStackDevelopmentComp";
import SalesForceComp from "./DrpSoftwareSolPvtLtd/SalesForceComp";
import DataScienceComp from "./DrpComputerEducation/DataScienceComp";
import RESTAPITestingComp from "./DrpComputerEducation/RESTAPITestingComp";
import NetFullstackDevelopmentComp from "./DrpComputerEducation/NetFullstackDevelopmentComp";
import ReactJsComp from "./DrpComputerEducation/ReactJsComp";
import RpaComp from "./DrpComputerEducation/RpaComp";
import HardwareNetworkingComp from "./DrpComputerEducation/HardwareNetworkingComp";
import { Analytics } from "@vercel/analytics/react";
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);

    // Define tab titles based on routes
    const routeTitles = {
      "/": "Home - DRP",
      "/login": "Login - DRP",
      "/register": "Register - DRP",
      "/admin/dashboard": "Admin Panel - DRP",
      "/inquiry": "Inquiry - DRP",
      "/blogs": "Blogs - DRP",
      "/services/our-courses": "Our Courses - DRP",
      "/drpIndia&AbroadEducation": "DRP Education - DRP",
      "/contact": "Contact Us - DRP",
      "/about": "About Us - DRP",
      "/feedback": "Feedback - DRP",
      "/countries": "Countries - DRP",
      "/usa": "USA - DRP",
      "/uk": "UK - DRP",
      "/germany": "Germany - DRP",
      "/canada": "Canada - DRP",
      "/australia": "Australia - DRP",
      "/service1": "Education Loan - DRP",
      "/service2": "Insurance - DRP",
      "/service3": "Sim Cards - DRP",
      "/service4": "Forex - DRP",
      "/service5": "Accommodation - DRP",
      "/service6": "Student Visa - DRP",
      "/service7": "Travel & Tourism - DRP",
      "/service8": "Immigration - DRP",
      "/service9": "Air Ticket Booking - DRP",
      "/free-counseling": "Free Counseling - DRP",
    };

    document.title = routeTitles[pathname] || "DRP";
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <FormPopup />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound404 />} />
        <Route path="/inquiry" element={<InquiryPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services/our-courses" element={<OurCourses />} />
        <Route path="/services/course/:id" element={<CourseDetail />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/drpIndia&AbroadEducation" element={<DrpIndiaEduHome />} />
        <Route path="/drpeduServices" element={<DrpEduServices />} />
        <Route path="/drpCoaching" element={<DrpCoaching />} />
        <Route path="/drpuniversities" element={<DrpUniversities />} />
        <Route path="/contact" element={<DrpContactUs />} />
        <Route path="/about" element={<DrpAboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/countries" element={<DrpCoutries />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/uk" element={<UK />} />
        <Route path="/germany" element={<Germany />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/service1" element={<EducationLoan />} />
        <Route path="/service2" element={<Insurance />} />
        <Route path="/service3" element={<SimCards />} />
        <Route path="/service4" element={<Forex />} />
        <Route path="/service5" element={<Accommodation />} />
        <Route path="/service6" element={<StudentVisa />} />
        <Route path="/service7" element={<TravelTourism />} />
        <Route path="/service8" element={<Immigration />} />
        <Route path="/service9" element={<AirTicketBooking />} />
        <Route path="/service10" element={<DummyTicket />} />
        <Route path="/services/education/india" element={<India />} />
        <Route path="/services/education/abroad" element={<Abroad />} />
        <Route path="/services/training/mscit" element={<MSCIT />} />
        <Route path="/about/vision" element={<Company />} />
        <Route path="/about/mission" element={<VissionAndMission />} />
        <Route path="/about/core-values" element={<CoreValues />} />
        <Route path="/about/our-skills" element={<OurSkills />} />
        <Route path="/about/leadership-team" element={<LeaderShip />} />
        <Route path="/contactHome" element={<ContactHome />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/drpsoftwarecontact" element={<DrpSolContact />} />
        <Route path="/drpCompAbout" element={<DrpCompAbout />} />
        <Route
          path="/drpSoftwareSolutions&pvtltd"
          element={<DrpSoftwareSolHome />}
        />
        <Route path="/drpsoftwareabout" element={<DrpSoftwareAbout />} />
        <Route
          path="/softwaresol/SoftwareDevelopment"
          element={<SofwareDevelpmentSol />}
        />
        <Route path="/softwaresol/Training" element={<Traning />} />
        <Route path="/softwaresol/projects" element={<Projects />} />
        <Route path="/softwaresol/Internship" element={<Internship />} />
        <Route path="/softwaresol/educ" element={<EducatinalServices />} />
        <Route path="/softwaresol/SalesForce" element={<SalesForce />} />
        <Route path="/softwaresol/ManualTesting" element={<ManaulTesting />} />
        <Route path="/softwaresol/DataScience" element={<DataScience />} />
        <Route path="/softwaresol/RESTAPITesting" element={<RestApi />} />
        <Route path="/softwaresol/RPA" element={<Rpa />} />
        <Route
          path="/courses/Hardware-Course"
          element={<HardwareCoursesComp />}
        />
        <Route
          path="/courses/Graphic-Designing"
          element={<GraphicDesighing />}
        />
        <Route
          path="/courses/Marketing-Video-Editing"
          element={<MarketingVideoEdting />}
        />
        <Route path="/courses/AutoDesk-CAD" element={<AutodeskCadComp />} />
        <Route
          path="/softwaresol/NetFullstackDevelopment"
          element={<NetDev />}
        />
        <Route path="/softwaresol/ReactJsDevelopment" element={<ReactJs />} />
        <Route
          path="/softwaresol/JavaFullStackDevelopment"
          element={<Java />}
        />
        <Route
          path="/softwaresol/Hardware&Networking"
          element={<HardwareNetwoorking />}
        />
        <Route
          path="/softwaresol/AutomationTesting"
          element={<AutomationTesting />}
        />

        <Route
          path="/services/training/autodesk-cad"
          element={<AutoDeskCad />}
        />
        <Route path="/drpEduBlogs" element={<BlogServices />} />
        <Route path="/services/education/indiaHome" element={<IndianHome />} />
        <Route path="/drpComputerEducation" element={<DrpCompEducation />} />
        <Route
          path="/services/training/marketing-video-editing"
          element={<MarketingVideo />}
        />
        <Route
          path="/services/training/hardware-courses"
          element={<HardwareCourses />}
        />
        <Route
          path="/services/training/graphic-designing"
          element={<Graphic />}
        />
        <Route path="/courses/Trending-Courses" element={<TrendingCourses />} />
        <Route path="/courses/new-courses" element={<NewCourses />} />
        <Route
          path="/courses/Computer-Programming"
          element={<ComputerProgrammingcomp />}
        />
        <Route
          path="/services/training/computer-programming"
          element={<ComputerProgramming />}
        />
        <Route
          path="/services/it-services/hardware-networking"
          element={<Hardware />}
        />
        <Route
          path="/services/it-services/cloud-services"
          element={<CloudSer />}
        />
        <Route path="/drpcompContact" element={<DrpCompContact />} />
        <Route
          path="/services/it-services/app-development"
          element={<AppDev />}
        />
        <Route
          path="/services/it-services/web-development"
          element={<WebDev />}
        />
        <Route path="/free-counseling" element={<DrpCounselling />} />
        <Route
          path="/admin/dashboard"
          element={<PrivateRoute element={AdminDashboard} />}
        />

        {/* it servcves comp */}
        <Route
          path="/compTraning/ManualTesting"
          element={<ManualTestingComp />}
        />
        <Route
          path="/compTraning/AutomationTesting"
          element={<AutomationTestingComp />}
        />
        <Route
          path="/compTraning/JavaFullStackDevelopment"
          element={<JavaFullStackDevelopmentComp />}
        />
        <Route path="/compTraning/SalesForce" element={<SalesForceComp />} />
        <Route path="/compTraning/DataScience" element={<DataScienceComp />} />
        <Route
          path="/compTraning/NetFullstackDevelopment"
          element={<NetFullstackDevelopmentComp />}
        />
        <Route
          path="/compTraning/ReactJsDevelopment"
          element={<ReactJsComp />}
        />
        <Route path="/compTraning/RPA" element={<RpaComp />} />
        <Route
          path="/compTraning/Hardware&Networking"
          element={<HardwareNetworkingComp />}
        />
        <Route
          path="/compTraning/RESTAPITesting"
          element={<RESTAPITestingComp />}
        />
      </Routes>

      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
          style: {
            fontSize: "16px",
          },
        }}
      />
    </Router>
  );
};

export default App;
