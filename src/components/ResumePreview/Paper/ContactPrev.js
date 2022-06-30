import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ContactPrev() {
  const { content, control, contentTest } = useContext(ResumeContext);

  // If the "control" is TRUE - use "Test State" to show the example on the page
  let contentUse;
  if (control) {
    contentUse = contentTest;
  } else {
    contentUse = content;
  }

  let divider;
  if (Object.keys(contentUse.contact).length > 0) {
    divider = <hr className={classes.dividerRight} />;
  } else {
    divider = "";
  }

  let contactClass;
  if (Object.keys(contentUse.contact).length > 0){
    contactClass = classes.contactResume
  }
  else {
    contactClass = ''
  }


  return (
    <div>
      <div className={contactClass}>
        <div className={classes.contentHeader}>
          <h1 className={classes.h1Name}>{contentUse.contact.name}</h1>
          <p>
            {contentUse.contact.address}
            {" "}
            {contentUse.contact.city}{" "}{contentUse.contact.state}{" "}
            {contentUse.contact.zip}
            {" "}
            {contentUse.contact.phone}
            {" "}
            {contentUse.contact.email}
          </p>
          {divider}
          <p>{contentUse.contact.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPrev;
