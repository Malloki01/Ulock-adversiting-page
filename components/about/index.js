import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/CandadoQR2.png"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">Conoce más sobre CagesIQ</h1>
          <p className="p-text"><span>•</span> Hay una variedad de diseños disponibles de casilleros electrónicos</p>
          <p className="p-text"><span>•</span> Permite un control de acceso desde un ordenador</p>
          <p className="p-text"><span>•</span> Proporcionan un nivel adicional de seguridad en comparación con los sistemas de llave tradicionales</p>

          <p className='p-text-head'>Al implementar el servicio de casilleros electrónicos permite 👇</p>

          <div className="preferred__skills">
            {
              ["Mayor seguridad", "Mayor control", "Configuración Flexible", "Ahorro de tiempo y espacio"].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>


        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
