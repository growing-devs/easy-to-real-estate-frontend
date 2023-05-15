import { EulTable11, EulTable12, EulTable13, EulTable2 } from '@/components/Table/EulTable';

const PdfGap = () => {
  return (
    <div>
      <div style={{ marginTop: '20px', width: '940px', display: 'flex', marginBottom: '32px' }}>
        <div style={{ marginRight: '8.1px' }}>
          <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
            1-1. 근저당 정보
          </p>
          <EulTable11 />
        </div>
        <div style={{ marginRight: '8.1px' }}>
          <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
            1-2. 전세권 정보
          </p>
          <EulTable12 />
        </div>
      </div>
      <div style={{ marginBottom: '24px' }}>
        <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
          1-3. 근저당 상세 내용
        </p>
        <EulTable13 />
      </div>
      <div>
        <p style={{ marginBottom: '24px', fontSize: '14px', fontWeight: 'bold' }}>
          2. 소유권 이외의 권리에 관한 사항
        </p>
        <EulTable2 />
      </div>
    </div>
  );
};

export default PdfGap;
