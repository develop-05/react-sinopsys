import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';

import './GeneralInfo.css';
import '../../pages/Home/Home.css'

export const GeneralInfo = () => {
  const [visible, setVisible] = useState(true);

  function openBlcok() {
    return setVisible(!visible);
  }

  return (
    <>

    <div className="details">
    <div className="detail__item">
            <div className="detail__content">
              <div className="detail__top__content" onClick={openBlcok}>
                <div className="detail__title fz-18">General Info</div>
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

            <div className="proposal__list">

                <div className="proposal__item">
                  <div><span className="grey__text">Vessel name</span></div>
                  <div className="item__name"><span>MV ANTAEUS</span></div>
                </div>

                <div className="proposal__item">
                  <div ><span className="grey__text">Travel Request No</span></div>
                  <div className="item__name"><span>W623LN9Q0</span></div>
                </div>

              </div>

          <div className="proposal__list">

          <div className="proposal__item">
            <div><span className="grey__text">Status</span></div>
            <div className="item__name"><span>PENDING</span></div>
          </div>

          <div className="proposal__item">
            <div><span className="grey__text">Travel Advisor</span></div>
            <div className="item__name"><span>George Chatzantonis</span></div>
          </div>

        </div>
      </div>
          </motion.div>
        )}
              
            </AnimatePresence>
            </motion.div>
            </div>
          </div>

    </div>
    </>
  )
}
