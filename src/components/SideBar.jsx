import Avatar from "../img/heitor.jpg";
import SocialNetworks from "./SocialNetworks";

import "../styles/components/sidebar.sass";

function SideBar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Heitor Santos" />
      <p className="title">Desenvolvedor Junior</p>
      <SocialNetworks/>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default SideBar;
