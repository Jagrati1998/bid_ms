// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import AuctionList from "./components/AuctionList"
// import LoginPage from './components/LoginPage';
// import SignUp from './components/SignUP';
// import AuctionItem from './components/AuctionItem'
// import Footer from './components/Footer';
// import Header from "./components/Header"

// function App() {
//   return (
//     <div className=" min-h-screen">
//       <Header/>
//       <HeroSection />
//       <AuctionList/> 
//       {/* <AuctionItem/> */}
//       <Footer/>
//       {/* <SignUp/> */}
//       {/* <Navbar />
//       <HeroSection />
//       <AuctionList/> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/WelcomePage";
import HeroSection from "./components/HeroSection"
import SignUp from "./components/SignUP";
import AuctionItem from "./components/AuctionItem";
import LoginPage from "./components/Login"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'; // Optional: Import any global CSS or Tailwind setup

const AppRoutes = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Main content */}
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/sign-up" element={< SignUp/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/auction" element={<AuctionItem/>}/>
          <Route path="*" element={<Header />} /> {/* Catch-all for 404s */}
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
