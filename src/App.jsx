import './App.css'
import AboutUs from './pages/AboutUs/AboutUs';
import HomePage from './pages/HomePage'
import KAYL from './pages/AboutUs/KAYL'
import { Routes, Route } from "react-router-dom";
import Objectives from './pages/AboutUs/Objectives';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import InsurancePlans from './pages/InsurancePlans/InsurancePlans';
import WholeLifePlans from './pages/WholeLifePlans/WholeLifePlans';
import MoneyBackPlans from './pages/MoneyBackPlans/MoneyBackPlans';
import TermAssurancePlans from './pages/TermAssurancePlans/TermAssurancePlans';
import History_ from './pages/AboutUs/History';
import Products from './pages/Products/Products';
import About from './pages/About/About';
import GroupBusiness from './pages/GroupBusiness/GroupBusiness';
import NotFound from './components/NotFound/NotFound';
import CommonContactForm from './components/ContactUs/ContactForm';

function App() {

  return (
   <>
    <div>
      <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/history" element={<History_ />} />
        <Route path="/about/know-about-your-policy" element={<KAYL />} />
        <Route path='/about/objectives' element={<Objectives />} />
        <Route path="/contact" element={<CommonContactForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/insurance-plans" element={<InsurancePlans />} />
        <Route path="/products/endowment-plans" element={<InsurancePlans />} />
        <Route path="/products/whole-life-plans" element={<WholeLifePlans />} />
        <Route path="/products/money-back-plans" element={<MoneyBackPlans />} />
        <Route path="/products/term-assurance-plans" element={<TermAssurancePlans />} />
        <Route path="/group-business" element={<GroupBusiness />} />
        <Route path="*" element={<NotFound />} />
      </Routes >
      <Footer />
    </div>
   </>
  )
}

export default App
