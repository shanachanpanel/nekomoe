import { getBaseUrl } from "./getBaseUrl";

export const getFinishedAnime = async (page: string | number = 1) => {
  const populars = await fetch(`${getBaseUrl()}/samehadaku/ongoing?page=${page}`, {
    headers: { "content-type": "aplication/json" },
  });
  const json = populars.json();
  return json;
};
