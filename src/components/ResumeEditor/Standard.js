import React, { useContext } from "react";
import Contact from "./Contact";
import Professional from "./Professional";
import Education from "./Education";
import AdditionalSkills from "./AdditionalSkills";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import myClasses from "./Left.module.css";
import logo from "../../logo.png";
import { ResumeContext } from "../../contexts/ResumeContext";
import { fontWeight } from "@mui/system";

// Left component with sub menu
function Standard() {
  const { control, addTestData, removeTestData } = useContext(ResumeContext);

  // Adds Test Data to Preview
  function useTestData(e) {
    e.preventDefault();
    addTestData();
  }

  // Removes Test Data from Preview
  function clearTestData(e) {
    e.preventDefault();
    removeTestData();
  }

  // Component controlled buttons
  let expData;
  if (control) {
    expData = (
      <Button
        color="secondary"
        onClick={clearTestData}
        variant="contained"
        className=''
        style={{ marginRight: 20, height: "auto", background: 'linear-gradient(to right bottom, #ff00ae, #3e9aff)' }}
      >
        remove example
      </Button>
    );
  } else {
    expData = (
      <Button
        color="primary"
        onClick={useTestData}
        variant="contained"
        className=''
        style={{ marginRight: 20, height: "auto", background: 'linear-gradient(to right bottom, #3e9aff, #ff00ae)'  }}
      >
        example
      </Button>
    );
  }

  // Routed buttons that create sub menu while Standard persists
  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <div styles={{ flexGrow: 2 }}>
          <Link to="/" style={{ display: "inline" }}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div styles={{ flexGrow: 1 }}>{expData}</div>
      </div>

      <div className="left-body">
          <div className={myClasses.topLeft}>
            <Button
              color='secondary'
              style={{
                minWidth: "100px",
                fontWeight: 700,
                fontSize: '1rem'
              }}
              component={Link}
              to="/standard/contact"
            >
              Contact
            </Button>
            <Button
              color='secondary'
              style={{
                minWidth: "100px",
                fontWeight: 700,
                fontSize: '1rem'
              }}
              component={Link}
              to="/standard/professional"
            >
              Experience
            </Button>
            <Button
              color='secondary'
              style={{
                minWidth: "100px",
                fontWeight: 700,
                fontSize: '1rem'
              }}
              component={Link}
              to="/standard/education"
            >
              Education
            </Button>
            <Button
              color='secondary'
              style={{
                minWidth: "100px",
                fontWeight: 700,
                fontSize: '1rem'
              }}
              component={Link}
              to="/standard/additional"
            >
              Skills
            </Button>
          </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
              <Routes>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/professional" element={<Professional />} />
                <Route path="/education" element={<Education />} />
                <Route path="/additional" element={<AdditionalSkills />} />
              </Routes>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Standard;
