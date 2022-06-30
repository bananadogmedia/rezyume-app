import Standard from "./components/ResumeEditor/Standard";
import Preview from "./components/ResumePreview/Preview";
import "./App.css";
import ResumeContextProvider from "./contexts/ResumeContext";
import { Route, Routes, Link } from "react-router-dom";
import myClasses from "./components/ResumeEditor/Left.module.css";
import logo from "./logo.png";
import thumbn from "./standard2.png";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Creates Global Theme for colors
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    secondary: {
      main: '#ff00ae',
      contrastText: '#fff',
    },
  },
});

// Creates the container for Templates
function Templates() {
  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/" style={{ textAlign: "left" }}>
          <img src={logo} alt="logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h2 className={myClasses.templatesH2}>Templates</h2>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            color="secondary"
            style={{
                minWidth: "100px",
                fontWeight: 700,
                fontSize: '1rem'
              }}
            component={Link}
            to="/standard/contact"
          >
            Standard
          </Button>
        </div>
      </div>
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="app">
      {/* BrowserRouter is wrapped in index.js. This also wraps the Theme Colors for Resume Context */}
      <ThemeProvider theme={theme}>
        <ResumeContextProvider>
            <Routes>
              <Route path="/" element={<Templates />} />
              <Route path="/standard/*" element={<Standard />}  />
            </Routes>
          <Preview />
        </ResumeContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;