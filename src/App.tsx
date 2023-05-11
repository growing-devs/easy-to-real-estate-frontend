import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraDetail from './pages/Pra/PraDetail';
import PraPrice from './pages/Pra/PraPrice';

import Search from './pages/Search';
import News from './pages/News';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import Chart from './components/Chart';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pra" element={<Pra />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/praprice" element={<PraPrice />} />

        <Route path="/pra/detail" element={<PraDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
