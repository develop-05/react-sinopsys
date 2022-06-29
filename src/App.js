import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/Home';
import {OfferCrew} from './pages/OfferCrew';
import {OfferCorporate} from './pages/OfferCorporate';
import {AboutFlight} from './pages/AboutFlight';
import {Login} from './pages/Register/Login';
import {Signup} from './pages/Register/Signup';
import {RememberPassword} from './pages/Register/ResetPass';
import {Dashboard} from './pages/Dashboard'
import {Offers} from './pages/TabPages/Offers';
import {Ticketed} from './pages/TabPages/Ticketed';
import {Pending} from './pages/TabPages/Pending';
import {RequestCrew} from './pages/Request/RequestCrew';
import {RequestCorporate} from './pages/Request/RequestCorporate';
import {NewFlightGroup} from './pages/NewFlightGroup';
import {NewTraveler} from './pages/NewTraveler';
import {NewTraveler2} from './pages/NewTraveler/NewTraveler2';
import {Overview} from './pages/Overview';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/offer-crew" element={<OfferCrew />} />
        <Route path="/offer-corporate" element={<OfferCorporate />} />
        <Route path="/about-flight" element={<AboutFlight />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/remember-password" element={<RememberPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/ticketed" element={<Ticketed />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/request-crew" element={<RequestCrew />} />
        <Route path="/request-corporate" element={<RequestCorporate />} />
        <Route path="/new-flight-group" element={<NewFlightGroup />} />
        <Route path="/new-traveler" element={<NewTraveler />} />
        <Route path="/new-traveler2" element={<NewTraveler2 />} />
        <Route path="/overview" element={<Overview />} />

        
      </Routes>
    </BrowserRouter>
  );
}