import { useStepStore, useTitleStore } from '@/store/store';
import { TitleWrapper } from './style';

const Title = () => {
  const { step } = useStepStore();
  const { currentTitle } = useTitleStore();

  return (
    <TitleWrapper>
      <p>{currentTitle}</p>
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
