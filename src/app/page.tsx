import Navbar from '../components/container/01_Navbar';
import Home from '../components/container/02_Home';
import About from '@/components/container/04_About';
import Banner from '@/components/container/03_Banner';

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Banner />
      <About />
    </>
  );
};

export default App;
