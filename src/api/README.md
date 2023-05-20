ApartDataApi : 국토교통부 아파트 정보를 가져오는 api
카카오APi 에 의존하기에 해당 부분 참고하여 가공

KakaoAPi : 카카오 api 주소검색을 위한 api 해당 주소지를 받고
주소지의 법정동 코드 및 기타 주소정보가 추출됨

UploadAPi : pdf upload 통신을 위한 axios 인스턴스
기능은 통신실패시 반복기능 , 사용자취소 , 기타 등등의 이유로 캔슬토큰으로
axios 통신을 중단시킬수있는 기능 포함