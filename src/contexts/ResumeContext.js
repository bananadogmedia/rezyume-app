import React, { createContext, useState, useEffect } from "react";
import testData from "../test_data";

export const ResumeContext = createContext();

const ResumeContextProvider = (props) => {
  
  // State of content as its being typed
  const [content, setContent] = useState(
    JSON.parse(localStorage.getItem("dataLocal")) || {
      contact: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    }
  );
  // State of Test Content 
  const [contentTest, setContentTest] = useState();
  // State of control buttons to load and remove test data
  const [control, setControl] = useState(false);

  // Update Data based on sections and submit handler on each form
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

  // Add Test Data and update control button
  function addTestData() {
    setControl(true);
    setContentTest(testData);
  }

  // Remove Test Data and update control button
  function removeTestData() {
    setControl(false);
    setContentTest({
      contact: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  }

  // Load local data using JSON
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
        removeTestData
      }}
    >
      {/* This refers to the children that this provider/components wraps. */}
      {props.children}
    </ResumeContext.Provider>
  );
};

export default ResumeContextProvider;
