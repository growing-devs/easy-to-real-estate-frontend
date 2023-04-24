import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PdfUpload';
import Simple from './pages/Simple';
import News from './pages/News';
import Support from './pages/Support';
import NotFound from './pages/NotFound';
import Kakaomap from './pages/kakaomap';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pra" element={<Pra />} />
        <Route path="/simple" element={<Simple />} />
        <Route path="/news" element={<News />} />
        <Route path="/map" element={<Kakaomap />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
