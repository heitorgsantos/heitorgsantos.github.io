import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import TecnologiesContainer from "./TecnologiesContainer";

import "../styles/components/mainContent.sass";


function MainContent() {
  return <main id="main-content">
    <AboutContainer />
    <TecnologiesContainer/>
    <ProjectsContainer/>
    </main>;
}

export default MainContent;
