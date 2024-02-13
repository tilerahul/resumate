import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import BasicInfo from "./Section/BasicInfo";
import Achievement from "./Section/Achievement"
import Certification from './Section/Certification'
import Education from './Section/Education'
import Languages from './Section/Languages'
import Other from './Section/Other'
import Project from './Section/Project'
import Skills from './Section/Skills'
import WorkExperience from './Section/WorkExperience'

const Resume = () => {
  const [section, setSection] = useState("basicInfo");
  return (
    <>
      <div className="pt-16 flex gap-5">
        <div className="h-[100vh] bg-slate-100 p-10 pt-10 m-2">
          <ul className="flex gap-3 flex-col font-medium">
            <li onClick={()=>setSection("basicInfo")} className="cursor-pointer">Basic information</li>
            <li onClick={()=>setSection("workExperience")} className="cursor-pointer">Work Experience</li>
            <li onClick={()=>setSection("education")} className="cursor-pointer">Education</li>
            <li onClick={()=>setSection("skills")} className="cursor-pointer">Skills</li>
            <li onClick={()=>setSection("project")} className="cursor-pointer">Project</li>
            <li onClick={()=>setSection("achievement")} className="cursor-pointer">Achievement</li>
            <li onClick={()=>setSection("languages")} className="cursor-pointer">Languages</li>
            <li onClick={()=>setSection("certification")} className="cursor-pointer">Certification</li>
            <li onClick={()=>setSection("other")} className="cursor-pointer">Other</li>
          </ul>
        </div>
        <div className="w-2/5">
          <div className="pt-10">
            {
              section === 'basicInfo' && <BasicInfo/>
            }
            {
              section === 'achievement' && <Achievement/>
            }
            {
              section === 'workExperience' && <WorkExperience/>
            }
            {
              section === 'education' && <Education/>
            }
            {
              section === 'certification' && <Certification/>
            }
            {
              section === 'languages' && <Languages/>
            }
            {
              section === 'other' && <Other/>
            }
            {
              section === 'project' && <Project/>
            }
            {
              section === 'skills' && <Skills/>
            }
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Resume;
