import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraDetail from './pages/Pra/PraDetail';
import MyReviews from './pages/MyReviews';
import Search from './pages/Search';
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
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/search" element={<Search />} />
        <Route path="/support" element={<Support />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
