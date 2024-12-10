import React from 'react'
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description = "I'm a MERN stack developer studying at Gaya College of Engineering. I enjoy creating web pages with user interaction . Actually i am still learning";

const skillsList = [
    "Web design",
  "User experience",
  "Inclusive design",
  "Focus group testing",
  "Knowledge of oops concepts",
];

const detailOrQuote = "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my development experience I continually look for new and better ways to make tech accessible by all.";


const About = () => {
  return (
    <section className='padding' id='about'>
        <img className='background' src={image} alt={imageAltText}/>
        <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
    
  )
}

export default About
