import {useState} from 'react'
import TextField from '@mui/material/TextField';
import '../../components.css';

import './Tabs.css'

export const Tabs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
    <>
    <div className="block__tabs">
        <button
          className={toggleState === 1 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          one Way
        </button>
        <button
          className={toggleState === 2 ? "tabs active__tabs active__tabs2" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Round trip
        </button>
        <button
          className={toggleState === 3 ? "tabs active__tabs active__tabs3" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Multi Flight
        </button>
      </div>


      <div className="content__tabs">
        <div className={toggleState === 1 ? "content  active__content" : "content"}>

<div onClick={() => setIsVisible2(!isVisible2)} className="btn__from_to">
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
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>


        </div>



      <div className={isVisible2 ? "overlay" : ""}>
        <div className={isVisible2 ? "watch__travel_info-visible watch__travel_info-visible_req" : "watch__travel_info"}>
        <h3 className="req__popup_title">SELECT BUDGET RANGE</h3>
        <span onClick={() => setIsVisible2(!isVisible2)} className="close__tab">+</span>

<div className="from__to_contnet">
        <TextField
          type="number"
          color="grey"
          id="date"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, display: "block", marginBottom: '35px'}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <span className="between__line"></span>

        <TextField
          type="number"
          color="grey"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, marginBottom: "50px"}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />


      <div className="from__to_btn">
        <input type="submit" className="cancel__blue outlined__btn" value="CANCEL" />
        <input type="submit" className="flight__btn bg__blue padding" value="SAVE" />
      </div>
    </div>
  </div>
</div>


        <div className="show__more_tab">
          <div className=" "><label htmlFor="more" className="more__tab mr-20 ">More</label></div>
          <button id="more" onClick={() => setIsVisible(!isVisible)}         
            className={isVisible ? "btn__arrow__rotated more__tab" : "btn__arrow more__tab"}>
            <img src="/images/arrow_rotate.svg" alt="arrow" />
          </button>
       </div>

       <div className={isVisible ? "all__details_visible mt-50" : "all__details"}>
        
        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="SEAT CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date" >
          <img className="req__icon_plane" src="/images/seat.svg" alt="calendar" />
        </label>

        <div className={isVisible3 ? "watch__travel_info-visible watch__travel_info-visible_req" : "watch__travel_info"}>

<div className="from__to_contnet">
        <TextField
          type="number"
          color="grey"
          id="date"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, display: "block", marginBottom: '35px'}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <TextField
          type="number"
          color="grey"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, marginBottom: "50px"}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />


      <div className="from__to_btn">
        <input type="submit" className="cancel__blue outlined__btn" value="CANCEL" />
        <input type="submit" className="flight__btn bg__blue padding" value="SAVE" />
      </div>
    </div>
  </div>
      


        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="BUDGET RANGE"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, 
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date">
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="ALLIANCE PREFERENCEs"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date">
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>
       </div>
        
        </div>
















        <div className={toggleState === 2 ? "content  active__content" : "content"} >
           
        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane mb-50" src="/images/grey_plane.svg" alt="calendar" />
        </label>


        <div className="show__more_tab">
          <div><label htmlFor="more" className="more__tab mr-20">More</label></div>
          <button id="more" onClick={() => setIsVisible(!isVisible)}         
            className={isVisible ? "btn__arrow__rotated more__tab" : "btn__arrow more__tab"}>
            <img src="/images/arrow_rotate.svg" alt="arrow" />
          </button>
       </div>

       <div className={isVisible ? "all__details_visible mt-50" : "all__details"}>
        
       <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="SEAT CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", bordeіr: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date" >
          <img className="req__icon_plane" src="/images/seat.svg" alt="calendar" />
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
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date">
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5,}}
          label="ALLIANCE PREFERENCEs"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date">
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>
       </div>

       <div className="color__blue return__tab"><span>Return</span></div>

       <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: "50px"}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none", backgroundColor: "#EDEDED",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF",  } }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: "40px"}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none", backgroundColor: "#EDEDED",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF",  } }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>
        
        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: "40px"}}
          label="SEAT CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date" >
          <img className="req__icon_plane" src="/images/seat.svg" alt="calendar" />
        </label>

        </div>

























        <div className={toggleState === 3 ? "content  active__content" : "content"} >
         
         <div className="color__blue"><span>First Flight</span></div>
        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: '30px'}}
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
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>


      <div className={isVisible3 ? "overlay" : ""}>
        <div className={isVisible3 ? "watch__travel_info-visible watch__travel_info-visible_req" : "watch__travel_info"}>
        <h3 className="req__popup_title">SELECT BUDGET RANGE</h3>
        <span onClick={() => setIsVisible3(!isVisible3)} className="close close_class close__margin">+</span>

<div className="from__to_contnet">
        <TextField
          type="number"
          color="grey"
          id="date"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, display: "block", marginBottom: '35px'}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <TextField
          type="number"
          color="grey"
          focused

          sx={{width: "160px", height: 60, borderRadius: 5, marginBottom: "50px"}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "#c1bfcf", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />


      <div className="from__to_btn">
        <input type="submit" className="cancel__blue outlined__btn" value="CANCEL" />
        <input type="submit" className="flight__btn bg__blue padding" value="SAVE" />
      </div>
    </div>
  </div>
</div>


        <div className="show__more_tab">
          <div><label htmlFor="more" className="more__tab mr-20">More</label></div>
          <button id="more" onClick={() => setIsVisible(!isVisible)}         
            className={isVisible ? "btn__arrow__rotated more__tab" : "btn__arrow more__tab"}>
            <img src="/images/arrow_rotate.svg" alt="arrow" />
          </button>
       </div>

       <div className={isVisible ? "all__details_visible mt-50" : "all__details"}>
        
       <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="SEAT CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date" >
          <img className="req__icon_plane" src="/images/seat.svg" alt="calendar" />
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
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date">
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5,}}
          label="ALLIANCE PREFERENCEs"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date">
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

          </div>


          <div className="color__blue return__tab"><span>Second Flight</span></div>
        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: "40px"}}
          label="FROM"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF",  } }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>


        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5, marginTop: "40px"}}
          label="TO"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF",  } }}
        />

        <label className="label__date" >
          <img className="req__icon_plane" src="/images/grey_plane.svg" alt="calendar" />
        </label>

        <div className="show__more_tab">
          <div><label htmlFor="more" className="more__tab mr-20">More</label></div>
          <button id="more" onClick={() => setIsVisible(!isVisible)}         
            className={isVisible ? "btn__arrow__rotated more__tab" : "btn__arrow more__tab"}>
            <img src="/images/arrow_rotate.svg" alt="arrow" />
          </button>
       </div>

       <div className={isVisible ? "all__details_visible mt-50" : "all__details"}>
        
       <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5}}
          label="SEAT CATEGORY"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date" >
          <img className="req__icon_plane" src="/images/seat.svg" alt="calendar" />
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
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />

        <label className="label__date">
          <img className="req__icon_plane" src="/images/euro.svg" alt="calendar" />
        </label>

        <TextField
          type="text"
          color="grey"
          id="date"
          focused

          sx={{width: "100%", height: 60, borderRadius: 5,}}
          label="ALLIANCE PREFERENCEs"
          variant="outlined"
          InputProps={{style: { borderRadius: 10, color: "#c1bfcf",
          borderColor: "none", border: "none",
          boxShadow: "0px 1px 4px rgba(s78, 45, 241, 0.25)",} }}
          InputLabelProps={{ style: { color: "#C1BFCF"} }}
        />
         <label className="label__date">
          <img className="req__icon_plane" src="/images/grey__arrow_down.svg" alt="calendar" />
        </label>

          </div>

          <div className="reutrn__tab">
            <button className="btn__add_new">
                <img className="btn__add_new-img" src="/images/blue__plus.svg" alt="plus" />
                <span className="color__blue add__flight">Add Flight</span>
            </button>
          </div>

        </div>
      </div>

    </>
    )
}