import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = ["/next.png", "/python.png", "/react.png", "/visual.png"];

const Hero = () => {
  return (
    <div className="app__hero app__flex">
      <div className="p-text">I am</div>
      <div className="head-text">
        <a className="j">j</a>
        <a className="o">o</a>
        <a className="r">r</a>
        <a className="g">g</a>
        <a className="e">e</a>
        <span> </span>
        <a className="h">H</a>
        <a className="u">u</a>
        <a className="e">e</a>
        <a className="r">r</a>
        <a className="g">g</a>
        <a className="o">o</a>
      </div>

      <div className="sub-text">"There are no limits to the imagination"</div>

      <div className="detail-text">
        <p>
          I am a <span>Systems Engineer</span> I am a Systems Engineer, I love
          programming. The languages I currently use the most are{" "}
          <span>Javascript</span> and <span>Python</span>.
        </p>
        <br />
        <p>
          I am currently working developing applications with Next.js at{" "}
          <span className="company">
            <a
              href="https://thecollectiveintelligencegroup.com/"
              target="_blank"
              className="company"
            >
              Collective Intelligence Group
            </a>
          </span>
        </p>
      </div>


      <div className="fav__techs">
        {FavTools.map((tool, index) => {
          return (
            <div className="fav__tech" key={index}>
              <img src={tool} alt="tool" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Hero, "home"), "home");

