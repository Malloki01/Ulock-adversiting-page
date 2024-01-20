import { AppWrap, MotionWrap } from "../wrapper";
import { Carousel } from "@material-tailwind/react";

const Experiences = () => {
  const customImageStyle = {
    height: "80%",
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  };

  return (
    <>
      <div className="app__wrapper app__flex">
        <div className="app__experiences app__flex">
          <Carousel
            className="rounded-xl"
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
           <section className='FlexContainer'>
            <div>
            <img src="https://source.unsplash.com/03r2PBffuCk" alt="Mueble de madera marrón con espejo"/>
            </div>
            <div>
              <p>
              Lockers are a way to store our valuables,
              but there is no certainty that your items
              are secure in a conventional locker
              </p>
            </div>
        </section>
        <section className='FlexContainer'>
            <div></div>
            <div></div>
        </section>
        <section className='FlexContainer'>
            <div></div>
            <div></div>
        </section>
        <section className='FlexContainer'>
            <div></div>
            <div></div>
        </section>
        <section className='FlexContainer'>
            <div></div>
            <div></div>
        </section>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
