import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Pra from './pages/Pra/PraUpload';
import PraDetail from './pages/Pra/PraDetail';
import MyReviews from './pages/MyReviews';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Chart from './components/Pdf/Chart';
import Review from './pages/Review';
import { PdfSummary, PdfGap, PdfEul, MarketPrice, Location } from './pages/Detailed';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/pra" element={<Pra />} />
        <Route path="/chart" element={<Chart />} />
        <Route element={<Review />}>
          <Route path="/summary" element={<PdfSummary />} />
          <Route path="/gap" element={<PdfGap />} />
          <Route path="/eul" element={<PdfEul />} />
          <Route path="/marketprice" element={<MarketPrice />} />
          <Route path="/location" element={<Location />} />
        </Route>
        <Route path="/pra/detail" element={<PraDetail />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
