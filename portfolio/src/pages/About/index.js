import React from 'react';
import AboutMe from '../../assets/images/AboutMe.jpg';

function About() {
    const quickInfo = [
        { title: "Certificate", subtitle: "Full Stack Web Development" },
        { title: "San Diego", subtitle: "Based in California" },
        { title: "Experience", subtitle: "Front and Back End Development and Marketing!"},
    ];
    const quickSkills = ["Git", "HTML + CSS", "JavaScript + jQuery", "Node.js", "Marketing", "...And More!"];
    return(
        <section id="about" className="about-me">
            <div className="quick-info">
                <div className="self-image">
                    <img src={AboutMe} loading="lazy" alt="Laura Jazmin" />
                </div>
                {quickInfo.map((info, i) => (
                    <div className="info-box" id={`info-${i + 1}`} key={`info-${i + 1}`}>
                    <h4>{info.title}</h4>
                    <p>{info.subtitle}</p>
                    </div>
                ))}
            </div>
            <div className="main-content">
                <h3>My name is Jazmin Anderson</h3>
                <p>
                    I am a San Diego-based independent web developer. All of my final coding is mobile responsive. I also have over 3 years experience in Marketing. I really enjoy combining the technical aspects of coding with the artistic aspects of Marketing. I'm highly adaptable to what needs to be done and can quickly learn anything that needs to be learned for a job.
                </p>
                <p>
                    I am currently working at Hanabusa IVF as a Marketing Coordinator, and ready to jumpstart my career in the tech field. I am an amazing team player and ready to become and important asset to your company.
                </p>
                <ul className="quick-skills">
                    {quickSkills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </div>
            <div className="quick-info">
                <p className="about-text">
                    Check out more on my resume tab.
                </p>
            </div>
        </section>
    );
}

export default About;