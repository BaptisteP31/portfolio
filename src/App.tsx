import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";
import { Separator } from "./components/Separator/Separator.tsx";
import { BasicSection } from "./components/BasicSection/BasicSection.tsx";

const App = () => {
    return (
        <div>
            <Navabar/>
            <MainSection/>
            <Separator/>
            <BasicSection leftComponent={<p>Left component</p>} rightComponent={<p>Right component</p>}/>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default App;