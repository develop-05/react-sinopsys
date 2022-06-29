import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion";
import TextField from '@mui/material/TextField';


import './GeneralInfoReq.css';
import '../../pages/Home/Home.css'

export const GeneralInfoReq = () => {
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
          placeholder="VESSEL NAME"
          sx={{width: 320, height: 60, borderRadius: 5}}
          id="outlined-basic"
          label="VESSEL NAME"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)" } }}
          InputLabelProps={{}}
        />
        <TextField
          placeholder="PORT OF CHANGE"
          sx={{width: 320, height: 60, borderRadius: 5, marginTop: '20px'}}
          id="outlined-basic"
          label="PORT OF CHANGE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)" } }}
          InputLabelProps={{}}
        />
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
