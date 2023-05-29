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
      title: "Full Stack Developer",
      company: "Collective Intelligence Group",
      duration: "February 2023 - Present",
      desc: "As a Full Stack Developer at Collective Intelligence Group, I am responsible for developing robust and scalable web applications using Next.js, Node.js, and Spring. I actively contribute to the design and implementation of various features, ensuring high performance and efficient functionality. Additionally, I work with PostgreSQL to manage and optimize database operations. My experience at Collective Intelligence Group has allowed me to enhance my skills in full-stack development, collaboration, and problem-solving.",
      tags: ["Next.js", "Node.js", "Spring", "PostgreSQL"]
      }
];

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
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
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
