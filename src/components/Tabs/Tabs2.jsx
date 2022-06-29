import { useState } from "react";
import TextField from '@mui/material/TextField';

import './Tabs.css';

export const Tabs2 =  () => {

  const [isVisible, setIsVisible] = useState(false);
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
    <div className="general__tabs2">
      <div className="block__tabs block__tabs2">
        <button
          className={toggleState === 1 ? "tabs active__tabs01" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          car
        </button>
        <button
          className={toggleState === 2 ? "tabs active__tabs active__tabs02" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Transfer
        </button>
        <button
          className={toggleState === 3 ? "tabs active__tabs active__tabs03" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Rail
        </button>
      </div>

      <div className={toggleState === 1 ? "content contet__margin  active__content" : "content"}>
        
        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="PICK UP DATE"
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
          label="PICK UP TIME"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>


        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DROP OFF DATE"
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
          label="DROP OFF DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="CAR CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>


        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="BUDGET RANGE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TRANSMISSION"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

      </div>

        <div className={toggleState === 2 ? "content contet__margin  active__content" : "content"}>
          
        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="PICK UP TIME"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>


        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DROP OFF DATE"
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
          label="DROP OFF DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="CAR CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>


        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="BUDGET RANGE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TRANSMISSION"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

        </div>

        <div className={toggleState === 3 ? "content contet__margin  active__content" : "content"}>
        
        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="PICK UP TIME"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>


        <TextField
          type="date"
          color="grey"
          id="date"
          focused

          placeholder="04/02/2022"
          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '20px'}}
          label="DROP OFF DATE"
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
          label="DROP OFF DATE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" htmlFor='date' >
          <img className="req__icon" src="/images/blue_clock.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="CAR CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>


        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="BUDGET RANGE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TRANSMISSION"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>
        
        </div>
      </div>
    </>
  );
}
