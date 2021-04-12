import React from "react";
import GitHub from "../../assets/logo/GitHub.png";

import "./Footer.scss";

const developers = [
  {
    name: "Viktoryia Ventskute",
    link: "https://github.com/Ventskute",
  },
  {
    name: "Andrew Murashko",
    link: "https://github.com/Andrewmurashko",
  },
  {
    name: "Aleksei Kupchinskii",
    link: "https://github.com/AlekseiBY",
  },
  {
    name: "Tatsiana Slapik",
    link: "https://github.com/TatsianaSlapik",
  },
];

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <ul>
            {developers.map((el, i) => (
              <li key={i}>
                <a href={el.link} target="_blank">
                  {el.name}
                  <img src={GitHub} alt="GitHub" className="github_logo" />
                </a>
              </li>
            ))}
          </ul>
          <a className="rss" href="https://rs.school/react/" target="_blank">
            <span className="rss-year">'21</span>
          </a>
        </div>
      </footer>
    </>
  );
}
