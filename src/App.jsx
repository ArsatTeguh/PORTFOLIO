import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import { useMediaQuery } from './Components/lib/useReponsive';

const Laptop = React.lazy(() => import('./Components/3d_models'));
const Home = React.lazy(() => import('./Components/Home/Home'));
const Person = React.lazy(() => import('./Components/person'));
const Footer = React.lazy(() => import('./Components/footer/footer'));
const Skils = React.lazy(() => import('./Components/piramida/skils'));
import ProjectNew from './Components/projectNew/project';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { matches } = useMediaQuery('(max-width: 768px)');
  return (
    <div className="relative overflow-hidden">
      <div class="loader">
        <span className="font-[Poppins] font-[500] text-xl laptop:text-2xl ">
          Sedang Memuat Content
        </span>
        <div class="progress"></div>
      </div>

      <div className="relative">
        <Home />
        <Person />
        <Skils />
        {!matches && <Laptop />}
      </div>

      <ProjectNew />
      <Footer />
    </div>
  );
}

export default App;
