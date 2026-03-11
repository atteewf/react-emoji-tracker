import type { Emoji, LoadingState } from "../types/emoji";
import EmojiCard from "./EmojiCard";

interface EmojiListProps {
  emojis: Emoji[];
  loading: LoadingState;
  favorites: Set<string>;
  onToggleFavorite: (slug: string) => void;
}

function EmojiList({
  emojis,
  loading,
  favorites,
  onToggleFavorite,
}: EmojiListProps) {
  if (loading === "loading") {
    return <div>Chargement...</div>;
  }

  if (loading === "error") {
    return <div>Une erreur est survenue</div>;
  }

  if (emojis.length === 0) {
    return <div>Aucun emoji trouvé</div>;
  }

  return (
    <div className="emoji-list">
      {emojis.map((emoji) => (
        <EmojiCard
          key={emoji.slug}
          emoji={emoji}
          isFavorite={favorites.has(emoji.slug)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
}

export default EmojiList;
