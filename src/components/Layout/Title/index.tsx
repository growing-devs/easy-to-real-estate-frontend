import { useStepStore } from '@/store/store';
import { TitleWrapper } from './style';

const Title = () => {
  const { step } = useStepStore();
  return (
    <TitleWrapper>
      <p>심사하기</p>
      {step === 2 ? (
        <div>
          <button type="button">PDF로 저장하기</button>
          <button type="button">심사 종료하기</button>
        </div>
      ) : null}
    </TitleWrapper>
  );
};

export default Title;
