import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";

import './CarDetails.css';

export const CarDetails = () => {

    const [visible, setVisible] = useState(true);

    return  (
        <div className="detail__item">
        <div className="detail__content">
          <div className="detail__top__content" onClick={() => setVisible(!visible)}>
            <div className="detail__title">Car Details</div>
            <button className={visible ? "btn__arrow__rotated" : "btn__arrow"} >
            <img className="arrow__img" src="/images/arrow_rotate.svg" alt="arrow_rotate" />
            </button>
          </div>
        <motion.div>
        <AnimatePresence>
    <motion.div
      key="question"
      className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
      onClick={() => setVisible(!visible)}
    >
    </motion.div>

    {visible && (
      <motion.div
        key="answer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{ opacity: 0 }}
        className="p-2 text-lg text-gray-700 border-l border-b border-gray-300"
      >
        <div className={visible ? "all__details_visible" : "all__details"}>
            <div className="car__price">
              <div className="blue__price grey__text2"><span className="car__price_span">€560 </span>5 day rental</div>
            </div>

            <div className="about__car">
              <span className="name__car">Hertz</span>
              <div className="mark__car">Toyota Aygo or similar</div>
              <span className="licences__car grey__text2">Group A - MDMR</span>
              <img className='about__car_img' src="/images/car.png" alt="car" />

              <div className="settings__car">
                <div className="set__car_item">
                  <img className="mr-5" src="/images/blue__user_icon.svg" alt="user icon" />
                  <span className="blue__text">Petrol</span>
                </div>
                <div className="set__car_item">
                  <img className="mr-5 car__manual" src="/images/speedometer.svg" alt="manual" />
                  <span className="blue__text ">Manual</span>
                </div>
              </div>
            </div>

              <div className="checks">
              <p className="check__in pick_up">Pick-up</p>
                <div className="detail__time max-w2"> <span className="span__tetx_z">Hertz Central, 29.07.2021, 10:45AM</span> </div>
                <div className="dotted__line"></div>

                <div className="mt-50"></div>

                <p className="check__in ml-50">Drop-off</p>
                <div className="detail__time max-w3 ml-50"> <span className="span__tetx_z">Hertz Athens Airport, 02.08.2021, 14:30AM</span> </div>
                <div className="dotted__line"></div>
              </div>

          </div>
      </motion.div>
    )}
          
        </AnimatePresence>
        </motion.div>
        </div>
      </div>
    )
}
