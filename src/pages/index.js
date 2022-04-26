import Acomplishments from '../components/Acomplishments/Acomplishments';

import Line from '../components/Roadmap/Line';
import Roadmap from '../components/Roadmap/Roadmap';

import { Layout } from '../layout/Layout';

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
