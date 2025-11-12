import Navbar from '../components/container/01_Navbar';
import Home from '../components/container/02_Home';
import Banner from '@/components/container/03_Banner';
import About from '@/components/container/04_About';
import Skill from '@/components/container/05_Skill';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <About />
      <Skill />
    </>
  );
};

export default App;
