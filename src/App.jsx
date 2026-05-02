import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IndoWestern from './pages/IndoWestern';
import Western from './pages/Western';
import Traditional from './pages/Traditional';
import ReadyMade from './pages/ReadyMade';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Opening from './pages/Opening';
import GownSaree from './pages/GownSaree';
import Sarees from './pages/Sarees';
import Lehengas from './pages/Lehengas';
import BridalLehenga from './pages/BridalLehenga';
import TraditionalCroptops from './pages/TraditionalCroptops';
import WesternCroptops from './pages/WesternCroptops';
import KurthiSets from './pages/KurthiSets';
import Anarkalis from './pages/Anarkalis';
import SalwarKamis from './pages/SalwarKamis';
import GagraCholi from './pages/GagraCholi';
import IndianGowns from './pages/indiangowns';
import JacketLehenga from './pages/JacketLehenga';
import DhotiCropTop from './pages/DhotiCropTop';
import IndoWesternFrocks from './pages/IndoWesternFrocks';
import ShararaPeplum from './pages/ShararaPeplum';
import CorsetLehenga from './pages/CorsetLehenga';
import AsymmetricKurtas from './pages/AsymmetricKurtas';
import Bodycons from './pages/Bodycons';
import Sportswear from './pages/Sportswear';
import MaxiDresses from './pages/MaxiDresses';
import Blazers from './pages/Blazers';
import MaxiSkirts from './pages/MaxiSkirts';
import Formals from './pages/Formals';
import KoreanDresses from './pages/KoreanDresses';
import PeplumPantsuit from './pages/PeplumPantsuit';
import FullPage from './pages/FullPage';
import Contact from './pages/Contact';
import Customised from './pages/Customised';
import Measurements from './pages/Measurements';
import SearchResults from './pages/SearchResults';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import './index.css';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/Navbar/Navbar';
import Appointment from './pages/Appointment';
import OrderSuccess from './pages/OrderSuccess';
import ReadyMadeItem1 from './pages/ReadyMadeItem1';
import ReadyMadeItem2 from './pages/ReadyMadeItem2';
import ReadyMadeItem3 from './pages/ReadyMadeItem3';
import ReadyMadeItem4 from './pages/ReadyMadeItem4';
import ReadyMadeItem5 from './pages/ReadyMadeItem5';
import ReadyMadeItem6 from './pages/ReadyMadeItem6';
import ReadyMadeItem7 from './pages/ReadyMadeItem7';
import ReadyMadeItem8 from './pages/ReadyMadeItem8';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div>
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Opening />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/indowestern" element={<IndoWestern />} />
            <Route path="/western" element={<Western />} />
            <Route path="/traditional" element={<Traditional />} />
            <Route path="/readymade" element={<ReadyMade />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/customised" element={<Customised />} />
            <Route path="/measurements" element={<Measurements />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/gownsaree" element={<GownSaree />} />
            <Route path="/sarees" element={<Sarees />} />
            <Route path="/lehengas" element={<Lehengas />} />
            <Route path="/bridal-lehenga" element={<BridalLehenga />} />
            <Route path="/traditional-croptops" element={<TraditionalCroptops />} />
            <Route path="/western-croptops" element={<WesternCroptops />} />
            <Route path="/kurthisets" element={<KurthiSets />} />
            <Route path="/anarkalis" element={<Anarkalis />} />
            <Route path="/salwarkamis" element={<SalwarKamis />} />
            <Route path="/gagracholi" element={<GagraCholi />} />
            <Route path="/indiangowns" element={<IndianGowns />} />
            <Route path="/jacket-lehenga" element={<JacketLehenga />} />
            <Route path="/dhoti-croptop" element={<DhotiCropTop />} />
            <Route path="/indowestern-frocks" element={<IndoWesternFrocks />} />
            <Route path="/sharara-peplum" element={<ShararaPeplum />} />
            <Route path="/corset-lehenga" element={<CorsetLehenga />} />
            <Route path="/asymmetric-kurtas" element={<AsymmetricKurtas />} />
            <Route path="/peplum-pantsuit" element={<PeplumPantsuit />} />
            <Route path="/bodycon" element={<Bodycons />} />
            <Route path="/sportswear" element={<Sportswear />} />
            <Route path="/maxidress" element={<MaxiDresses />} />
            <Route path="/blazers" element={<Blazers />} />
            <Route path="/maxiskirts" element={<MaxiSkirts />} />
            <Route path="/formals" element={<Formals />} />
            <Route path="/koreanwear" element={<KoreanDresses />} />
            <Route path="/fullpage" element={<FullPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/readymade-item-1" element={<ReadyMadeItem1 />} />
            <Route path="/readymade-item-2" element={<ReadyMadeItem2 />} />
            <Route path="/readymade-item-3" element={<ReadyMadeItem3 />} />
            <Route path="/readymade-item-4" element={<ReadyMadeItem4 />} />
            <Route path="/readymade-item-5" element={<ReadyMadeItem5 />} />
            <Route path="/readymade-item-6" element={<ReadyMadeItem6 />} />
            <Route path="/readymade-item-7" element={<ReadyMadeItem7 />} />
            <Route path="/readymade-item-8" element={<ReadyMadeItem8 />} />
          </Routes>
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
