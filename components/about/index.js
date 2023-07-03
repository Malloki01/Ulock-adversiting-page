import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/huergo.png"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Jorge Huergo.</h1>
          <p className="p-text"><span>•</span> Systems Engineer</p>
          <p className="p-text"><span>•</span> I have worked on various projects using Next.js, React, and FastAPI. I am experienced in developing web applications and APIs using these technologies. </p>
          <p className="p-text"><span>•</span> I have a deep appreciation for open-source software and strongly support the principles of the free software movement.</p>
          <p className="p-text"><span>•</span> I enjoy creating images with AI.</p>

          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["Next.js, React, Javascript", "Selenium, Python", "Node.js", "SQL, PostgreSQL"].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/Programacion315' target="_blank" rel="noreferrer"
          >
            My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
