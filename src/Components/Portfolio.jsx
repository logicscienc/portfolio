import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
    {
        title: "WEATHER APP",
        description: "Tech stack: HTML5, Tailwind CSS, JavaScript.Build a weather app that fetches live weather data from a public API using Axios.Integrated responsive design for cross-device compatibility.Optimized for performance and quick data loading.",
        url: "https://github.com/logicscienc/WeatherXD",
    },
    {
        title: "PASSWORD GENERATOR",
        description: "Tech stack: HTML5, Tailwind CSS, JavaScript. Developed a website using JavaScript which helps in generating a password according to userchoice, and need.We can even copy that password to our desktop and it will also show you the strength of yourpassword, so that you can optimize it according to your convenient.",
        url: "https://github.com/logicscienc/password",
    },
    {
        title: "TIC TAC TOE",
        description: "Tech stack: HTML5, Tailwind CSS, JavaScript. It is just a normal website in which two peoples can play ",
        url:"https://github.com/logicscienc/tictactoe",
    },
    {

        title: 'Travel With Love',
        description: "I developed oly the ui .",
        url: "https://github.com/logicscienc/TravelWithLove",
    },
];

const Portfolio = () => {
    return (
      <section className="padding" id="portfolio">
        <h2 style={{ textAlign: "center" }}>Portfolio</h2>
        <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
          <div style={{ maxWidth: "40%", alignSelf: "center" }}>
            <img
              src={image}
              style={{ height: "90%", width: "100%", objectFit: "cover" }}
              alt={imageAltText}
            />
          </div>
          <div className="container">
            {projectList.map((project) => (
              <div className="box" key={project.title}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                </a>
                <p className="small">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default  Portfolio;