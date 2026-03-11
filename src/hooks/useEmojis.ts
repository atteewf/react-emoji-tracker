import { useState, useEffect, useCallback } from "react";
import type { Emoji, LoadingState } from "../types/emoji";
import { fetchEmojis } from "../services/api";

interface UseEmojisReturn {
  emojis: Emoji[];
  loading: LoadingState;
  error: string | null;
  retry: () => void;
}

export function useEmojis(): UseEmojisReturn {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [loading, setLoading] = useState<LoadingState>("idle");
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(() => {
    setLoading("loading");
    setError(null);

    fetchEmojis()
      .then((data) => {
        setEmojis(data);
        setLoading("success");
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading("error");
      });
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { emojis, loading, error, retry: load };
}
