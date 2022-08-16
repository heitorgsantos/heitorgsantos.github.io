import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetwork.sass";

const socialnetwork = [
  {
    name: "linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/heitorg33/",
  },
  {
    name: "github",
    icon: <FaGithub />,
    url: " https://github.com/heitorgsantos",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/heitorgsantos/",
  },
];

function SocialNetworks() {
  return (
    <section id="social-networks">
      {socialnetwork.map((network) => (
        <a
          href={network.url}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
}

export default SocialNetworks;
