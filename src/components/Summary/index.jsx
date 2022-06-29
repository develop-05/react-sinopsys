import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

import './Summary.css';
import'./Slider.css';
import '../../pages/Home/Home.css'

export const Summary = () => {
  const [visible, setVisible] = useState(true);

  const settings = {
    className: "slider__active",
    centerMode: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.05,
    slidesToScroll: 1,
  };

  function openBlcok() {
    return setVisible(!visible);
  }

  return (
    <>
    <div className="details">
          <div className="detail__item">
            <div className="detail__content">
              <div className="detail__top__content" onClick={openBlcok}>
                <div className="detail__title fz-18">Summary</div>
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
                <div className="summary">
                    <div className="summary__block">
                      <span className="summary__text">Select Group and see the offers that our traveler advisor suggest to you</span>
                    </div>


      <div className="slider">
        <Slider {...settings}>

      <Link to="/request-crew">
        <div className="slider__item">
            <div className="summary__item_content">
            <h3 className="summary__title">Flight 1</h3>
            <div className="summary__offers">2 <span className="summary__text">Offers for</span> 3 Travelers  /<img className="db-i" src="/images/person.svg" alt="person" /></div>
          </div>
        </div>
      </Link>
    
      <Link to="/request-crew">
        <div className="slider__item">
            <div className="summary__item_content">
            <h3 className="summary__title">Flight 2</h3>
            <div className="summary__offers">2 <span className="summary__text">Offers for</span> 3 Travelers  /<img className="db-i" src="/images/person.svg" alt="person" /></div>
          </div>
        </div>
      </Link>

      <Link to="/request-crew">
        <div className="slider__item">
            <div className="summary__item_content">
            <h3 className="summary__title">Flight 3</h3>
            <div className="summary__offers">2 <span className="summary__text">Offers for</span> 3 Travelers  /<img className="db-i" src="/images/person.svg" alt="person" /></div>
          </div>
        </div>
      </Link>

        </Slider>
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
