import {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom';

import './FlightDetails.css';
import '../../pages/Home/Home.css';


export const FlightDetails = () => {

    const [visible, setVisible] = useState(true);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

  return (
    <div className="detail__item">
            <div className="detail__content">
              <div className="detail__top__content" onClick={() => setVisible(!visible)}>
                <div className="detail__title">Flight Details</div>
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
              <div className="detail__air">
                <div className="air__name">
                  <span>Air France Aegean Airlines</span>
                </div>
                <div className="air__ticket">
                  <div className="price__ticket"><span>€250.80</span></div>
                  <span className="economy__class_text">MARINE ECONOMY</span>
                </div>
              </div>

                <div className="air__range air__range_first">
                  <div className="range__air_loc">Athens ATH,<span> 28 June</span></div>
                  <div className="range__air_loc range__air_loc_time"><span>21:50</span></div>
                </div>

                <div className="air__location">
                  <img className="icon__air" src="/images/dot.png" alt="dot" />
                  <div className="dashed__line"></div>
                  <img className="location__icon" src="/images/location.png" alt="location" />
                </div>

                <div className="air__plane">
                  <img src="/images/plane.svg" alt="plane" />
                  <span className="plane__time">16hours, 45mins</span>
                </div>

                <div className="air__range mt">
                  <div className="range__air_loc">Los Angeles Lax,<span> 29 June</span></div>
                  <div className="range__air_loc range__air_loc_time"><span>15:20</span></div>
                </div>

                <div className="air__weight">

                  <div className="suitcase__weight">
                    <img src="/images/suitcase.svg" alt="" />
                    <div className="suitcase__weight_text">
                      <div><span className="af__weight_flight">AF 2PC-23KG</span></div>
                      <div><span className="af__weight_flight"> AC 1PC-40KG</span></div>
                    </div>
                  </div>


                  <div className="suitcase__weight">
                  <img className="pare__icon" src="/images/pare.svg" alt="" />
                      <button className="color__blue btn__views" onClick={() => setVisible2(!visible2)}>Views Fare Rules</button>
                  </div>

              <div className={visible2 ? "overlay" : ""}>
                <div className={visible2 ? "watch__travel_info-visible" : "watch__travel_info"}>

                  <h3 className="popup__title popup__title_class">Selected Fare</h3>
                  <span onClick={() => setVisible2(!visible2)} className="close close_class">+</span>

                  <div className="contenet__class">
                    <div className="economy__class">
                      <div className="name__class"><span>Economy Flex</span></div>
                      <img src="/images/green__check.svg" alt="check" />
                    </div>
                    <div className="price__class">
                      <span className="color__blue price__rate">€1,450.80</span>
                      <span className="per__person grey__text2">PER PERSON</span>
                    </div>

                    <div className="service__class_list">

                      <div className="class__item">
                        <img src="/images/ban.svg" alt="ban" />
                        <div className="item__text">Partly Refundable</div>
                      </div>

                      <div className="class__item">
                        <img src="/images/grey__check.svg" alt="ban" />
                        <div className="item__text">Cancelation fee: USD 200</div>
                      </div>

                      <div className="class__item">
                        <img src="/images/grey__check.svg" alt="ban" />
                        <div className="item__text">Change fee: USD 50</div>
                      </div>

                      <div className="class__item">
                        <img src="/images/grey__check.svg" alt="ban" />
                        <div className="item__text">Standard seat</div>
                      </div>

                    </div>

                    <div className="class__weight">
                      <div className="class__suitcase">
                        <img className="suitcase__class_img" src="/images/suitcase.svg" alt="suitcase" />
                        <img className="suitcase__class_img" src="/images/suitcase.svg" alt="suitcase" />
                        <img className="suitcase__class_img" src="/images/suitcase.svg" alt="suitcase" />
                        <span className="af__class_text">AF - 3 PC / 23kg each</span>
                      </div>
                      <div className="class__suitcase">
                        <img className="suitcase__class_img" src="/images/suitcase.svg" alt="suitcase" />
                        <span className="af__class_text">AC - 1 PC / 40kg each</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                </div>

              <button onClick={() => setVisible3(!visible3)} className="btn__more">View more</button>

              <div className={visible3 ? "air__more-visible" : "air__more" }>
                <div className="air__fly">
                  <img src="/images/plane_fly.svg" alt="fly" />
                  <Link to="/about-flight" className="fly__text">Outbound Flight on Wed, 28 June</Link>
                </div>

                <div className="af">
                  <img src="images/af.jpg" alt="af" />
                </div>

                <div className="air__range air__range_af">
                  <div className="range__air_loc">El Venizelos Airport, Athens ATH</div>
                  <div className="range__air_loc"><span>21:50</span></div>
              </div>

              <div className="air__location">
                  <img className="icon__air" src="/images/dot.png" alt="dot" />
                  <div className="dashed__line"></div>
                  <img className="location__icon" src="/images/location.png" alt="location" />
                </div>

                <div className="air__plane">
                  <img src="/images/plane.svg" alt="plane" />
                  <span className="plane__time">3hours, 15mins</span>
                </div>

              <div className="air__range ml45">
                  <div className="range__air_loc range__air_loc_af">Paris Charles de Gaulle International Airport CDG +1</div>
                  <div className="range__air_loc l-20"><span>03:40</span></div>
              </div>

            <div className="rules">
              <li className="rule"><span>1 STOP</span><span>1 hour 35 minute</span><span>Stay Paris(CDG)</span></li>
              <div className="rule__red">Overnight Connection Long Connection</div>
            </div>

              <div className="canada">
                <img src="/images/canada.jpg" alt="canada flag" />
              </div>


              <div className="air__range air__range_canada">
                  <div className="range__air_loc">Paris Charles de Gaulle International Airport CDG +1</div>
                  <div className="range__air_loc range__air_loc_canada"><span>05:15</span></div>
              </div>

              <div className="air__location">
                  <img className="icon__air" src="/images/dot.png" alt="dot" />
                  <div className="dashed__line"></div>
                  <img className="location__icon" src="/images/location.png" alt="location" />
                </div>

                <div className="air__plane">
                  <img src="/images/plane.svg" alt="plane" />
                  <span className="plane__time">11hours, 40mins</span>
                </div>

              <div className="air__range air__range_canada ml45">
                  <div className="range__air_loc">Los Angeles International Airport (Lax)</div>
                  <div className="range__air_loc range__air_loc_canada2"><span>15:20</span></div>
              </div>

            </div>

              <div className="check__now">
                <div className="check__time">Check in opens in: <span>2</span>d <span>28</span>h <span>15</span>min</div>
                <input className="btn__check" value="Check in now" type="submit" />
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
