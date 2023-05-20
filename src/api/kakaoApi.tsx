import axios from 'axios';
import { KAKAO_API_KEY, KAKAO_API_URL } from '../utils/constants';

export const KakaoApi = async (query: string): Promise<any | null> => {
  try {
    const response = await axios({
      method: 'GET',
      url: `${KAKAO_API_URL}?query=${query}`,
      headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
    });

    return response.data.documents[0];
  } catch (error) {
    return null;
  }
};
