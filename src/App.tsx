import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraPrice from './pages/Pra/PraPrice';

import MyReviews from './pages/MyReviews';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import { PdfSummary, PdfGap, PdfEul, MarketPrice, Location } from './pages/Detailed';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="pra" element={<Pra />} />
        <Route path="review/:id/pdfsummary" element={<PdfSummary />} />
        <Route path="review/:id/gap" element={<PdfGap />} />
        <Route path="review/:id/eul" element={<PdfEul />} />
        <Route path="review/:id/marketprice" element={<MarketPrice />} />
        <Route path="review/:id/location" element={<Location />} />

        <Route path="/praprice" element={<PraPrice />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
