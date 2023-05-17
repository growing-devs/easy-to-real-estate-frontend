import axios from 'axios';

export const KakaoApi = async (query: string): Promise<any | null> => {
  const KAKAO_API_KEY = '28ce8dd52640ba98833867ca4dad1c61';
  const KAKAO_API_URL = 'https://dapi.kakao.com/v2/local/search/address.json';

  try {
    const response = await axios({
      method: 'GET',
      url: `${KAKAO_API_URL}?query=${query}`,
      headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
    });

    console.log('kakaoApi page 법정동 API 요청에 성공:', response.data);
    return response.data.documents[0];
  } catch (error) {
    console.error('kakaoApi page API 요청에 실패하였습니다:', error);
    return null;
  }
};
