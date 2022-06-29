import React, { createContext, useState, useEffect } from "react";
import testData from "../test_data";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || {
      contact: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    }
  );

  const [contentTest, setContentTest] = useState();

  const [control, setControl] = useState(false);

  function updateContactData(data) {
    setContent({ ...content, contact: data });
  }

  function updateProfessionalData(data) {
    setContent({ ...content, professional: data });
  }

  function updateEducationData(data) {
    setContent({ ...content, education: data });
  }

  function updateAdditionalData(data) {
    setContent({ ...content, additional: Object.values(data) }); 
  }

  function addTestData() {
    setControl(true);
    setContentTest(testData);
  }

  function removeTestData() {
    setControl(false);
    setContentTest({
      contact: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  }
  useEffect(() => {
    localStorage.setItem("dataLocal", JSON.stringify(content));
  }, [content]);

  return (
    <ResumeContext.Provider
      value={{
        content,
        control,
        contentTest,
        setContent,
        updateContactData,
        updateProfessionalData,
        updateEducationData,
        updateAdditionalData,
        addTestData,
        removeTestData,
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
