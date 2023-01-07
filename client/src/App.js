
import './App.css';
import Navbar from './components1/Navbar/Navbar';
import {BrowserRouter,Routes,Route, Router,Switch}from "react-router-dom"
import Home from './components1/Home/Home';
import About from './components1/About/About';
import LoginSignUp from './components1/Login/AllLogReg';
import { useContext } from "react";

import Footer from './components1/footer/Footer';
import Teacher from './teachersInfo/Teacher';
import SingleTeacher from './teachersInfo/SingleTeacher';
import ShareTeacher from './teachersInfo/SharedProduct';
import ShareOfficer from './officersInfo/SharedOfficer';
import Officer from './officersInfo/Officer';
import SingleOfficer from './officersInfo/SingleOfficer';
import CivilTeacher from './Dep__Techer__Student/Civil/Teacher/CivilTeachers';
import SingleCivilTecher from './Dep__Techer__Student/Civil/Teacher/Single_civ_tec';
import ShareCivTec from './Dep__Techer__Student/Civil/Teacher/Shared_civil_tec';
import ShareCivStu from './Dep__Techer__Student/Civil/Student/Shared_civil_stu';
import CivilStudent from './Dep__Techer__Student/Civil/Student/CivilStudents';
import SingleCivStudent from './Dep__Techer__Student/Civil/Student/Single_civ_stu';
import ShareElcTec from './Dep__Techer__Student/Electrical/Teacher/Shared_Electrical_tec';
import ElectricalTecher from './Dep__Techer__Student/Electrical/Teacher/ElectricalTeachers';
import SingleElectricalTecher from './Dep__Techer__Student/Electrical/Teacher/Single_Elc_tec';
import ShareElcStu from './Dep__Techer__Student/Electrical/Student/Shared_Elc_stu';
import ElectricalStudent from './Dep__Techer__Student/Electrical/Student/ElectricalStudents';
import SingleElcStudent from './Dep__Techer__Student/Electrical/Student/Single_Elc_stu';
import ShareCmtTec from './Dep__Techer__Student/Computer/Teacher/Shared_cmt_tec';
import ComputerTeacher from './Dep__Techer__Student/Computer/Teacher/ComputerTeachers';
import SingleCmtTecher from './Dep__Techer__Student/Computer/Teacher/Single_cmt_tec';
import ShareCmtStu from './Dep__Techer__Student/Computer/Student/Shared_cmt_stu';
import ComputerStudent from './Dep__Techer__Student/Computer/Student/ComputerStudents';
import SingleCmtStudent from './Dep__Techer__Student/Computer/Student/Single_cmt_stu';
import ShareElectroStu from './Dep__Techer__Student/Electronics/Student/Shared_electro_stu';
import ElectronicsStudent from './Dep__Techer__Student/Electronics/Student/ElectronicsStudents';
import SingleElectroStudent from './Dep__Techer__Student/Electronics/Student/Single_electro_stu';
import ShareElectroTec from './Dep__Techer__Student/Electronics/Teacher/Shared_electro_tec';
import ElectronicsTeacher from './Dep__Techer__Student/Electronics/Teacher/ElectronicsTeachers';
import SingleElectroTecher from './Dep__Techer__Student/Electronics/Teacher/Single_electro_tec';
import ShareEnvTec from './Dep__Techer__Student/Environment/Teacher/Shared_Env_tec';
import EnvironmentTeacher from './Dep__Techer__Student/Environment/Teacher/EnvironmentTeachers';
import SingleEnvTecher from './Dep__Techer__Student/Environment/Teacher/Single_Env_tec';
import ShareEnvStu from './Dep__Techer__Student/Environment/Student/Shared_Env_stu';
import EnvironmentStudent from './Dep__Techer__Student/Environment/Student/EnvironmentStudents';
import SingleEnvStudent from './Dep__Techer__Student/Environment/Student/Single_Env_stu';

function App() {
   
  return (
    <>
     
      <BrowserRouter>
     <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="/teachers" element={<ShareTeacher />}>
            <Route index element={<Teacher />} />
            <Route path=":productId" element={<SingleTeacher />} />
          </Route>
          <Route path="/officers" element={<ShareOfficer />}>
            <Route index element={<Officer />} />
            <Route path=":productId" element={<SingleOfficer />} />
          </Route>
          {/* Civil Teacher Route Start*/}
          <Route path="/civil/teachers" element={<ShareCivTec />}>
            <Route index element={<CivilTeacher />} />
            <Route path=":productId" element={<SingleCivilTecher />} />
          </Route>
          {/* Civil Teacher Route End*/}
          {/* Civil Student Route Start*/}
          <Route path="/civil/students" element={<ShareCivStu />}>
            <Route index element={<CivilStudent />} />
            <Route path=":productId" element={<SingleCivStudent />} />
          </Route>
          {/* Civil  Student Route End*/}
          {/* electrical Teacher Route Start*/}
          <Route path="/electrical/teachers" element={<ShareElcTec />}>
            <Route index element={<ElectricalTecher />} />
            <Route path=":productId" element={<SingleElectricalTecher />} />
          </Route>
          {/* electrical Teacher Route End*/}
          {/* electrical Student Route Start*/}
          <Route path="/electrical/students" element={<ShareElcStu />}>
            <Route index element={<ElectricalStudent />} />
            <Route path=":productId" element={<SingleElcStudent />} />
          </Route>
          {/* electrical  Student Route End*/}
          {/* computer Teacher Route Start*/}
          <Route path="/computer/teachers" element={<ShareCmtTec />}>
            <Route index element={<ComputerTeacher />} />
            <Route path=":productId" element={<SingleCmtTecher />} />
          </Route>
          {/* computer Teacher Route End*/}
          {/* computer Student Route Start*/}
          <Route path="/computer/students" element={<ShareCmtStu />}>
            <Route index element={<ComputerStudent />} />
            <Route path=":productId" element={<SingleCmtStudent />} />
          </Route>
          {/* computer  Student Route End*/}
          {/* electronics Teacher Route Start*/}
          <Route path="/electronics/teachers" element={<ShareElectroTec />}>
            <Route index element={<ElectronicsTeacher />} />
            <Route path=":productId" element={<SingleElectroTecher />} />
          </Route>
          {/* electronics Teacher Route End*/}
          {/* electronics Student Route Start*/}
          <Route path="/electronics/students" element={<ShareElectroStu />}>
            <Route index element={<ElectronicsStudent />} />
            <Route path=":productId" element={<SingleElectroStudent />} />
          </Route>
          {/* electronics  Student Route End*/}
          {/* environment Teacher Route Start*/}
          <Route path="/environment/teachers" element={<ShareEnvTec />}>
            <Route index element={<EnvironmentTeacher />} />
            <Route path=":productId" element={<SingleEnvTecher />} />
          </Route>
          {/* environment Teacher Route End*/}
          {/* environment Student Route Start*/}
          <Route path="/environment/students" element={<ShareEnvStu />}>
            <Route index element={<EnvironmentStudent />} />
            <Route path=":productId" element={<SingleEnvStudent />} />
          </Route>
          {/* environment  Student Route End*/}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
