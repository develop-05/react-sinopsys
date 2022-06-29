import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import TextField from '@mui/material/TextField';


import './GeneralInfoReq.css';
import '../../pages/Home/Home.css'

export const GeneralInfoCorporate = () => {
  const [visible, setVisible] = useState(true);

  function openBlcok() {
    return setVisible(!visible);
  }

  return (
    <>

    <div className="details mt-70">
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
                  <div className="item__name"><span>Ethos Vessel</span></div>
                </div>

                <div className="proposal__item">
                  <div ><span className="grey__text">Travel Request No</span></div>
                  <div className="item__name"><span>W623LN9Q0</span></div>
                </div>

              </div>

          <div className="proposal__list">

          <div className="proposal__item">
            <div><span className="grey__text">Status</span></div>
            <div className="item__name"><span>New Request</span></div>
          </div>

          <div className="proposal__item proposal__item4">
            <div><span className="grey__text">Travel Advisor</span></div>
            <div className="item__name"><span>N/A</span></div>
          </div>

        </div>
      </div>

      <div className="inputs__req">
        <TextField
          placeholder="Trip Name"
          sx={{width: 320, height: 60, borderRadius: 5}}
          id="outlined-basic"
          label="Trip Name"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)" } }}
          InputLabelProps={{}}
        />

        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DEPARTURE DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <div className="reverse__icon">
            <img src="/images/reverse.svg" alt="reverse" />
        </div>

        <TextField
          type="date"
          color="grey"
          id="date02"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="RETURN DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date02' >
          <img className="req__icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>


       
      </div>

      
          </motion.div>
        )}
              
            </AnimatePresence>
            </motion.div>
            </div>
          </div>

    </div>

    {/* <div className="fixed__req">
      <div className="traveler__block">
        <div className="traveler__icon_block">
          <img className="req__traveler_icon" src="/images/traveler.svg" alt="traveler" />
          <div className="count__travelers">2<span> Travelers selected</span></div>
        </div>

        <div>
          <input type="submit" className="btn__send_req-over" value="SEND REQUEST"/>
        </div>
      </div>
    </div> */}
    </>
  )
}
