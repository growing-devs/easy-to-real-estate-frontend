import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraDetail from './pages/Pra/PraDetail';
import PraPrice from './pages/Pra/PraPrice';

import MyReviews from './pages/MyReviews';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Chart from './components/Chart';
import ReviewLayout from './components/ReviewLayout';
import { PdfSummary, PdfGap, PdfEul, MarketPrice, Location } from './pages/Detailed';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/pra" element={<Pra />} />
        <Route element={<ReviewLayout />}>
          <Route path="pra/summary" element={<PdfSummary />} />
          <Route path="pra/gap" element={<PdfGap />} />
          <Route path="pra/eul" element={<PdfEul />} />
          <Route path="pra/marketprice" element={<MarketPrice />} />
          <Route path="pra/location" element={<Location />} />
        </Route>
        <Route path="/praprice" element={<PraPrice />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
