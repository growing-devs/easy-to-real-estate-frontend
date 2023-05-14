import EulTable11 from '@/components/Table/EulTable/EulTable11';
import EulTable12 from '@/components/Table/EulTable/EulTable12';
import Eultable13 from '@/components/Table/EulTable/EulTable13';
import Eultable2 from '@/components/Table/EulTable/EulTable2';

const PdfGap = () => {
  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ flexBasis: '50%', marginRight: '16.2px' }}>
          <p style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
            1-1. 근저당 정보
          </p>
          <EulTable11 />
        </div>
        <div style={{ flexBasis: '50%', marginRight: '16.2px' }}>
          <p style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
            1-2. 전세권 정보
          </p>
          <EulTable12 />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
          1-3. 근저당 상세 내용
        </p>
        <Eultable13 />
      </div>
      <div>
        <p style={{ marginBottom: '10px', fontSize: '14px', fontWeight: 'bold' }}>
          2. 소유권 이외의 권리에 관한 사항
        </p>
        <Eultable2 />
      </div>
    </div>
  );
};

export default PdfGap;
