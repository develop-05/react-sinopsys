import {useState} from 'react'
import {Tabs2} from '../../components/Tabs/Tabs2';
import TextField from '@mui/material/TextField';


import './RadioShows.css';

export const RadioShows = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

  return (
    <>

    <h3 className="radio__shows_title">Need Accomodation</h3>
      <div className="radio__shows_content yes__no">
            <div className="">
              <input name="visa" className="radio__input" type="radio" id="visa" />
              <label onClick={() => setIsVisible(true)} className="label__radio" name="visa" for="visa"><span className="visa__ml grey__text">Yes</span></label>
            </div>

            <div className="">
              <input name="visa" className="radio__input" type="radio" id="visa2" />
              <label onClick={() => setIsVisible(false)} className="label__radio" name="visa" htmlFor="visa2"><span className="visa__ml grey__text">No</span></label>
            </div>
        </div>
        
      <div className={isVisible ? "all__details_visible" : "all__details"}>
        <div className="box__shadow">
          <div className="contet__margin ">

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DESTINATION"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="CHECK IN DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="CHECK OUT DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_calendar.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="AREA"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="BREAKFAST"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="HOTEL RATINGS"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="HOTEL RATINGS"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/euro.svg" alt="calendar" />
        </label>

        
        <div className="room__type">
            <h3 className="color__blue">Room Type</h3>

            <div className="grey__text"><span>Map Passengers</span></div>

        <TextField
          type="text"
          id="date"
          color="grey"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="SINGLE ROOM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#352B67",
          borderColor: "grey", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#352B67s"} }}
        />

        <TextField
          type="text"
          id="date"
          color="grey"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DOUBLE ROOM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#352B67",
          borderColor: "grey", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#352B67s"} }}
        />

        <TextField
          type="text"
          id="date"
          color="grey"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px', marginBottom: '20px'}}
          label="TRIPLE ROOM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#352B67",
          borderColor: "grey", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#352B67s"} }}
        />

        </div>

        </div>
      </div>
      </div>

        <h3 className="radio__shows_title">Need Transportation</h3>
      <div className="radio__shows_content radio__shows_content-last">
            <div className="">
              <input name="visa" className="radio__input" type="radio" id="visa01" />
              <label onClick={() => setIsVisible2(true)} className="label__radio" name="visa2" for="visa01"><span className="visa__ml grey__text">Yes</span></label>
            </div>

            <div className="">
              <input name="visa" className="radio__input" type="radio" id="visa02" />
              <label onClick={() => setIsVisible2(false)} className="label__radio" name="visa2" htmlFor="visa02"><span className="visa__ml grey__text">No</span></label>
            </div>


        </div>   

      <div className={isVisible2 ? "all__details_visible" : "all__details"}>
        <Tabs2 />
      </div>

    </>
  )
}