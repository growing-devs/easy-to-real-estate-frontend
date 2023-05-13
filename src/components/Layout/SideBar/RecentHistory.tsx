import { MouseEvent } from 'react';
import { NavLink } from 'react-router-dom';
import { useStepStore } from '@/store/store';
import { RecentHistoryContainer } from './style';

const RecentHistoryItem = ({ idNum }: { idNum: number }) => {
  const { setStep } = useStepStore();
  const handleDelete = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('삭제');
  };
  return (
    <NavLink
      to={`/review/${idNum}/pdfsummary`}
      className="recentHistoryItem"
      onClick={() => {
        setStep(2);
      }}
    >
      <span> 등기부등본 {idNum}.pdf</span>
      <button type="button" onClick={handleDelete}>
        X
      </button>
    </NavLink>
  );
};

const RecentHistory = () => {
  return (
    <RecentHistoryContainer>
      <p>최근 조회내역</p>
      <p>등기부 파일명으로 표시됩니다</p>
      <RecentHistoryItem idNum={1} />
      <RecentHistoryItem idNum={2} />
      <RecentHistoryItem idNum={3} />
    </RecentHistoryContainer>
  );
};

export default RecentHistory;
