import { AppWrap, MotionWrap } from "../wrapper";
import Image from "next/image";

//const FavTools = ["/next.png", "/python.png", "/react.png", "/visual.png"];

const Hero = () => {
  return (
    <>
      <div className="app__wrapper app__flex">
        <div className="app__hero app__flex">
          <div className="app__hero-text">
            <section className="layout">
              <div className="Column marginRight">
                <p>
                More than a Locker, <br/>
                your Private and  <br/>
                Intelligent Space (phrase) <br/>
                </p>
              </div>
              <div className="Column marginLeft">
                <img 
               src="/casillero-electronico-bg.png"
                alt="casillero"
                width={500}
                height={500}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Hero, "home"), "home");
