import { useParams } from 'react-router-dom';
import PraPrice from '../Pra/PraPrice';

const MarketPrice = () => {
  const { id } = useParams<{ id: string }>(); // 실제 id 값을 추출하여 할당
  console.log('MarketPrice', id);
  return (
    <div>
      <PraPrice />
    </div>
  );
};

export default MarketPrice;
