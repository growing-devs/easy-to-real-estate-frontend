## pra 폴더

pra 폴더는 Property Report Analysis(부동산 등기부등본 분석 및 평가)의 약자로, pdf 분석에 필요한 페이지를 모아놓은 폴더입니다. 기획 변경으로 인해 해당 페이지들은 detailed 폴더로 이동되었으며, 폴더 및 컴포넌트 수정에 따른 깃 이슈가 많아 코드를 이전하지 않고 현재 폴더 구조를 유지하였습니다.

### praDetail 컴포넌트

praDetail 컴포넌트는 작은 박스로 구성된 매물 요약 페이지를 나타냅니다. 전역 상태에서 받아온 데이터를 분류하여 사용합니다.

### pdfPrice 컴포넌트

pdfPrice 컴포넌트는 시세 페이지를 나타냅니다. 해당 페이지에는 차트 컴포넌트가 사용됩니다. 전역 상태에서 받아온 데이터를 분류하여 사용하며, 테이블을 사용합니다.

### praUpload 컴포넌트

praUpload 컴포넌트는 PDF 업로드 페이지입니다. pdf 및 pdfUpload 컴포넌트를 사용합니다.