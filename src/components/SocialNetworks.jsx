import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetwork.sass";

const socialnetwork = [
  { name: "linkedin", icon: <FaLinkedin /> },
  { name: "github", icon: <FaGithub /> },
  { name: "Instagram", icon: <FaInstagram /> },
];

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialnetwork.map((network) => (
        <a href="#" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
