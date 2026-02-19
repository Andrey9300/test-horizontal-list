import { TContent } from '@/store/features/content/content'

const API_URL =
  'https://eu.acc01.titanos.tv/v1/genres/1/contents?market=es&device=tv&locale=es&page=1&per_page=50&type=movie'

export const fetchContent = async () => {
  const response = await fetch(API_URL)
  const result: { collection: TContent[] } = await response.json()

  return result;
};
