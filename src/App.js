import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProds from "./pages/MyProds";
import { theme } from "./theme/theme";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ABody } from "./components/shared";
import TopMenu from "./components/TopMenu";
import LeftSideBar from "./components/SideBars/LeftSideBar";

let mainTheme = createTheme(theme);
mainTheme = responsiveFontSizes(mainTheme);

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <TopMenu />
      <ABody>
        <Router>
          <LeftSideBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myprods" element={<MyProds />} />
          </Routes>
        </Router>
      </ABody>
    </ThemeProvider>
  );
}

export default App;
