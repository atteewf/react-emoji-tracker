import { Emoji } from "../types/emoji";

const BASE_URL = "https://emoji-api.com/emojis";
const API_KEY = import.meta.env.VITE_EMOJI_API_KEY;
export async function fetchEmojis(): Promise<Emoji[]> {
  const response = await fetch(`${BASE_URL}?access_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }

  const data: Emoji[] = await response.json();

  return data.map((emoji) => ({
    ...emoji,
    unicodeName: emoji.unicodeName.replace(/E\d+\.\d+\s/g, ""),
  }));
}

export async function searchEmojis(query: string): Promise<Emoji[]> {
  const response = await fetch(
    `${BASE_URL}?search=${query}&access_key=${API_KEY}`,
  );

  if (!response.ok) {
    throw new Error(`Erreur API: ${response.status}`);
  }

  return response.json() as Promise<Emoji[]>;
}
