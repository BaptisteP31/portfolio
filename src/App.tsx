import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";
import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection.tsx";
import { MyProjectSection } from "./components/MyProjectsSection/MyProjectsSection.tsx";
import { StrictMode } from "react";

const App = () => {
    return (
        <div>
            <StrictMode>
                <Navabar />
                <MainSection />
                <AboutMeSection />
                <MyProjectSection />
            </StrictMode>
        </div>
    );
}

export default App;