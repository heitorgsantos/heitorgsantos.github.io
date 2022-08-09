import Avatar from "../img/heitor.jpg";

import "../styles/components/sidebar.sass";

function SideBar() {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Heitor Santos" />
      <p className="title">Desenvolvedor Junior</p>
      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  );
}

export default SideBar;
