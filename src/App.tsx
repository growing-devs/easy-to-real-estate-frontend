import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraPrice from './pages/Pra/PraPrice';

import MyReviews from './pages/MyReviews';
import NotFound from './pages/NotFound';
import { PdfSummary, PdfGap, PdfEul, MarketPrice, Location } from './pages/Detailed';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="pra" element={<Pra />} />
        <Route path="pra/:id/pdfsummary" element={<PdfSummary />} />
        <Route path="pra/:id/gap" element={<PdfGap />} />
        <Route path="pra/:id/eul" element={<PdfEul />} />
        <Route path="pra/:id/marketprice" element={<MarketPrice />} />
        <Route path="pra/:id/location" element={<Location />} />

        <Route path="/praprice" element={<PraPrice />} />
        <Route path="/myreviews" element={<MyReviews />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
