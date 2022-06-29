import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import './DestinationDetails.css';
import '../../pages/Home/Home.css';

export const DetinationDetails = () => {
    const [visible, setVisible] = useState(true);

    function openBlcok() {
      return setVisible(!visible);
    }

  return (
    <div className="detail__item">
            <div className="detail__content">
              <div className="detail__top__content" onClick={openBlcok}>
                <div className="detail__title">Destination Details</div>
                <button className={visible ? "btn__arrow__rotated" : "btn__arrow"} >
                <img className="arrow__img" src="/images/arrow_rotate.svg" alt="arrow_rotate" />
                </button>
              </div>
            <motion.div>
            <AnimatePresence>
        <motion.div
          key="question"
          className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
          onClick={openBlcok}
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
                <div className="detail__location"><span>Los Angeles Lax,</span></div>
                <div className="ath">United States</div>
                <Link to="/" className="href__location">View on maps</Link>

                <div className="detail__time3"> <span className="span__text_z">25th August 2020, 04:50am</span> </div>
                <div className="dotted__line"></div>

                <div className="detail__location"><span>Travel Advisory</span></div>
                <div className="ath"> Athens ATH</div>
                <Link to="/" className="href__location">View details</Link>
                <div className="detail__weather">
                    <div className="weather__temparature">
                        <img src="/images/sun.svg" alt="sun" />
                        <div className="temparature">23°C / 72°F</div>
                        <span className="what__weather">Mostly Sunny</span>
                    </div>
                    <div className="humidity">Humidity: 84%</div>
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
