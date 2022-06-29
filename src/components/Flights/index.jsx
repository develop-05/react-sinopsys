import {useState} from 'react'
import {Tabs} from '../Tabs';
import { motion, AnimatePresence } from "framer-motion";

import './Flights.css';

export const Flights = () => {
    const [visible, setVisible] = useState(true);
    
  return (
    <>
    <div className="detail__item flight__req_block">
            <div className="detail__content">
              <div className="detail__top__content" onClick={() => setVisible(!visible)}>
                <div className="detail__title">Flights</div>
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
              <Tabs />
            </div>
          </motion.div>
        )}
            </AnimatePresence>
            </motion.div>
            </div>
          </div>
    </>
  )
}