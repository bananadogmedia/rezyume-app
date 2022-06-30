import React, { useContext } from "react";
import Paper from "./Paper/Paper";
import { styled, ThemeProvider, createTheme } from "@mui/system";
import { green, pink, blue, white } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import ClearIcon from "@mui/icons-material/Clear";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";
import { ResumeContext } from "../../contexts/ResumeContext";

// Preview renders the Paper component as well as the 2 buttons to Delete Data and Print/Save to PDF
export default function Preview() {
  const { setContent} = useContext(ResumeContext);

  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      contact: {},
      professional: { desc1: ["", "", ""], desc2: ["", "", ""] },
      education: {},
      additional: [],
    });
  };
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
      <div className="right">
        <div className="buttons">
          <Link href="#" onClick={handleDeleteDate}>
            <Tooltip title="Delete All Data" placement="right">
              <Avatar className="delete-all">
                <ClearIcon />
              </Avatar>
            </Tooltip>
          </Link>
          <Link href="#" onClick={handleSaveToPDF}>
            <Tooltip title="Save to PDF" placement="right">
              <Avatar className="save-pdf">
                <PictureAsPdfIcon />
              </Avatar>
            </Tooltip>
          </Link>
        </div>
        <Paper />
      </div>
  );
}
