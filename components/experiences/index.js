import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  {
    title: "Full Stack Developer",
    company: "SicYa Software",
    duration: "May 2022 - December 2022",
    desc: "I worked as a Full Stack Developer at SicYa Software, a software development company. During my time there, I contributed to the development of web applications using React.js and Python. I was involved in designing and implementing various features, ensuring efficient functionality and user-friendly interfaces.",
    tags: ["React.js", "Python"]
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    duration: "March 2021 - April 2022",
    desc: "As a Frontend Developer at Tech Solutions, I specialized in building user interfaces for web applications. I collaborated with the design team to implement responsive and visually appealing layouts. My role also involved optimizing website performance for better user experience.",
    tags: ["React.js", "HTML", "CSS"]
  }
];

const Experiences = () => {
  return (
    <div className="app__experiences">
      <div className="flex__row">
        <div className="app__experiences__list">
          <h2>Experiences</h2>
          {ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">
              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>
              <div className="app__experiences__item__company">
                {item.company}
              </div>
              <div className="app__experiences__item__duration">
                {item.duration}
              </div>
              <div className="app__experiences__item__description">
                {item.desc}
              </div>
              <div className="app__experiences__item__tags">
                {item.tags.map((tag, index) => (
                  <div key={index} className="app__experiences__item__tag">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="app__experiences__video">
          <video className="video-bg" autoPlay muted loop>
            <source src="/Locker.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
