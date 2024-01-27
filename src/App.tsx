import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";
import { AboutMeSection } from "./components/AboutMeSection/AboutMeSection.tsx";
import { MyProjectSection } from "./components/MyProjectsSection/MyProjectsSection.tsx";

const App = () => {
    return (
        <div>
            <Navabar/>
            <MainSection/>
            <AboutMeSection/>
            <MyProjectSection/>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default App;