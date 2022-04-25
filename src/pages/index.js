import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Line from '../components/Roadmap/Line';
import Roadmap from '../components/Roadmap/Roadmap';

import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
        {/* <Hero /> */}
        {/* <BgAnimation /> */}
      {/* </Section> */}
   
      <Acomplishments />
      <Roadmap/>
      <Line/>
    </Layout>
  );
};

export default Home;
