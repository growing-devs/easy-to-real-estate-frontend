import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraDetail from './pages/Pra/PraDetail';

import Simple from './pages/Simple';
import News from './pages/News';
import Support from './pages/Support';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pra" element={<Pra />} />
        <Route path="/pra/detail" element={<PraDetail />} />

        <Route path="/simple" element={<Simple />} />
        <Route path="/news" element={<News />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
