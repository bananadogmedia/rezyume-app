import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationPrev() {
  const { content, control, contentTest } = useContext(ResumeContext);

  // If the "control" is TRUE - use "Test State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentTest;
  } else {
    contentUse = content;
  }

  // If no data, Title will not be displayed
  let title;
  if (Object.keys(contentUse.education).length === 0) {
    title = "";
  } else {
    title = (
      <h3>
        <strong>Education</strong>
      </h3>
    );
  }

  let bulletEducation;
  if (!contentUse.education.additional) {
    bulletEducation = "";
  } else {
    bulletEducation = (
      <ul>
        <li>{contentUse.education.additional}</li>
      </ul>
    );
  }

  return (
    <div className={classes.professionalResume}>
      <div className="">
        {title}
        <p>
          <strong>{contentUse.education.school} </strong>{" "}
          {contentUse.education.city}
        </p>
        <p>
          {contentUse.education.major} {contentUse.education.gradYear}
        </p>
        {bulletEducation}
      </div>
    </div>
  );
}

export default EducationPrev;
