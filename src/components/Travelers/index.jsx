import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom';
import TextField from '@mui/material/TextField';


import './Travelers.css';
import '../../components.css';

export const Travelers = () => {

    const [isVisible, setIsVisible] = useState(true);

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

  return (
    <>
      <div className="detail__item traveler__item_block mb-100">
        <div className="detail__content">
          <div className="detail__top__content" onClick={() => setIsVisible(!isVisible)}>
            <div className="detail__title">Travelers</div>
            <button className={isVisible ? "btn__arrow__rotated" : "btn__arrow"} >
            <img className="arrow__img" src="/images/arrow_rotate.svg" alt="arrow_rotate" />
            </button>
          </div>
        <motion.div>
        <AnimatePresence>
    <motion.div
      key="question"
      className="rounded-tr-md relative z-20  rounded-br-md shadow-sm px-1 py-2 bg-blue-200 cursor-pointer font-open border-l-2 border-yellow-500"
      onClick={() => setIsVisible(!isVisible)}
    >
    </motion.div>

    {isVisible && (
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
        <div className={isVisible ? "all__details_visible" : "all__details"}>

          <div className="new__travelers">
            <Link to="">
              <div className="flight__btn max__width_req">Add Existing Travelers</div>
            </Link>

            <Link to="/new-traveler">
              <div className="flight__btn max__width_req mt-30">Add new Traveler</div>
            </Link>
          </div>


          <div className="passangers">
            <button className="btn__passanger"><span className="grey__text">Search Passenger</span></button>

            <button className="btn__passanger"><div className="select__nat"><span className="grey__text">Select Nationality</span></div></button>

            <label className="label__date">
              <img className="req__icon_plane req__icon_plane-relative" src="/images/grey__arrow_down.svg" alt="arrow" />
            </label>
          </div>

          <div className="selection__req_list">



        <div className={isActive ? "all__details_visible" : "all__details"}>
          <div className="selectted__passengers"><span>Selected Passengers</span></div>
        </div>

          <div className={isActive ? "select__item_active" : "select__item"}>
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id" />
                  <label onClick={() => setIsActive(!isActive)} className="label__checkbox" for="checkbox-id"></label>
                </div>

                <div className="traveler__info_req">
                  <div><span className="traveler__info_req-name">Nick Kostopoulos</span></div>
                  <div><span className="traveler__info_req-birth">Date of Birth: 29/12/1950</span></div>
                </div>
            </div>



            <div className={isActive2 ? "all__details_visible" : "all__details"}>
              <div className="selectted__passengers"><span>Selected Passengers</span></div>
            </div>

          <div className={isActive2 ? "select__item_active" : "select__item"}>
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id0002" />
                  <label onClick={() => setIsActive2(!isActive2)} className="label__checkbox" for="checkbox-id0002"></label>
                </div>

                <div className="traveler__info_req">
                  <div><span className="traveler__info_req-name">George Akiesssae</span></div>
                  <div><span className="traveler__info_req-birth">Date of Birth: 29/12/1950</span></div>
                </div>
            </div>

            <div className={isActive3 ? "all__details_visible" : "all__details"}>
              <div className="selectted__passengers"><span>Selected Passengers</span></div>
            </div>

          <div className={isActive3 ? "select__item_active" : "select__item"}>
                <div className="checkbox__traveler">
                  <input className="checkbox__input" type="checkbox" id="checkbox-id0003" />
                  <label onClick={() => setIsActive3(!isActive3)} className="label__checkbox" for="checkbox-id0003"></label>
                </div>

                <div className="traveler__info_req">
                  <div><span className="traveler__info_req-name">Alex Nigtrew</span></div>
                  <div><span className="traveler__info_req-birth">Date of Birth: 29/12/1950</span></div>
                </div>
            </div>
            

          </div>
            
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