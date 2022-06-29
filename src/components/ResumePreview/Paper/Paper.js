import React from "react";
import ContactPrev from "./ContactPrev";
import ProfessionalPrev from "./ProfessionalPrev";
import EducationPrev from "./EducationPrev";
import AdditionalSkillsPrev from "./AdditionalSkillsPrev";

function Paper() {
  return (
    <div className="">
      <div size="A4" className="page">
        <ContactPrev />
        <ProfessionalPrev />
        <EducationPrev />
        <AdditionalSkillsPrev />
      </div>
    </div>
  );
}

export default Paper;
