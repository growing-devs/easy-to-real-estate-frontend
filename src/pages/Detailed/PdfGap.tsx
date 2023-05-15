import { Gaptable1, Gaptable2 } from '@/components/Table/GapTable';

const PdfGap = () => {
  return (
    <div>
      <div style={{ marginTop: '20px', marginBottom: '24px' }}>
        <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
          1. 최근 변동 내역
        </p>
        <Gaptable1 />
      </div>
      <div>
        <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
          2. 최근 소유권 사항
        </p>
        <Gaptable2 />
      </div>
    </div>
  );
};

export default PdfGap;
