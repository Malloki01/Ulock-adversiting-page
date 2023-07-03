import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  {
    title: "Light bulb machine learning ",
    desc: "Smart locker application created with Collective Intelligence Group.",
    coverUrl: "/machine.png",
    githubLink: "https://github.com/Programacion315/Light_bulb_machine_learning",
    demoLink: "https://github.com/Programacion315/Light_bulb_machine_learning",
    tags: ["HTML", "CSS", "JS"],
  },
  {
    title: "Burgers Don Chucuni",
    desc: "novelty burger shop with lots of animations, has a shopping cart and role for customer and admin",
    coverUrl: "/chucuni.png",
    githubLink: "https://github.com/Programacion315/Burgers_Don_Chucuni",
    demoLink: "https://github.com/Programacion315/Burgers_Don_Chucuni",
    tags: ["React"],
  },
  {
    title: "Virtual assistant Browser",
    desc: "A great bowser will be dancing in the lower right, when it starts it will tell a joke.",
    coverUrl: "/bowser.png",
    githubLink: "https://github.com/Programacion315/Bowser_joke_teller",
    demoLink: "https://github.com/Programacion315/Bowser_joke_teller",
    tags: ["Python"],
  },
  {
    title: "Web scraping food information",
    desc: "Extract the food information from the page https://www.tabladecalorias.net/",
    coverUrl: "/food.png",
    githubLink: "https://github.com/Programacion315/Web_scraping_food_information",
    demoLink: "https://github.com/Programacion315/Web_scraping_food_information",
    tags: ["Selenium", "Beautiful Soup "],
  }
];

const Projects = () => {

  return (
    <>
      <h2> My Projects </h2>

      <div className="project__works">
        {
          projects.map((project, index) => {
            return (
              <div key={index} className="project__work">
                <div className="project__work__img">
                  <Image src={project.coverUrl}
                    alt={project.title}
                    layout="fill"
                    priority
                  />
                </div>
                <div className="project__work__details">
                  <h3 className="project__work__title">{project.title}</h3>
                  <p className="project__work__desc">{project.desc}</p>

                  <a className="text-btn" href={project.githubLink} target="_blank" rel="noreferrer">
                    <BsGithub />
                    <span>GitHub repo</span>
                  </a>

                  <div className="project__work__tags">
                    {
                      project.tags.map((tag, index) => {
                        return (
                          <div key={index} className="project__work__tag">
                            <span><BsFillCheckCircleFill /></span>
                            <p className="p-text">{tag}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  <a className="outlined-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                    Repo
                  </a>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__projects"), "projects");
