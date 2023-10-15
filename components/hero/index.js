import { AppWrap, MotionWrap } from "../wrapper";
import Image from "next/image";

//const FavTools = ["/next.png", "/python.png", "/react.png", "/visual.png"];

const Hero = () => {
  return (
    <div className="app__hero app__flex">
       {/* 
      <video className="video-bg" autoPlay muted loop>
        <source src="/VideoLocker.mp4" type="video/mp4" />
      </video> 
      */}

      <div className="head-text">
        <a className="C">C</a>
        <a className="A">a</a>
        <a className="G">g</a>
        <a className="E">e</a>
        <a className="S">s</a>
        <span> </span>
        <span className="hide-on-mobile">
          <a className="I">I</a>
          <a className="Q">Q</a>
        </span>

      </div>

      <div className="sub-text">&quot;There are no limits to the imagination&quot;</div>

      <div className="detail-text">
        <p>
            Más que un Casillero, tu Espacio Privado e Inteligente
        </p>
        <br />
        <p>
          Un producto creado por {" "}
          <span className="company">
            <a
              href="https://thecollectiveintelligencegroup.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="company"
            >
              Collective Intelligence Group
            </a>
          </span>
        </p>
      </div>
      {/* <div className="fav__techs">
        {FavTools.map((tool, index) => (
          <div className="fav__tech" key={index}>
            <Image src={tool} alt="tool" width={1080} height={1080} />
          </div>
        ))}
      </div> */}

      
    </div>
  );
};

export default AppWrap(MotionWrap(Hero, "home"), "home");
