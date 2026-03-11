import type { Emoji } from "../types/emoji";

interface EmojiCardProps {
  emoji: Emoji;
  isFavorite: boolean;
  onToggleFavorite: (slug: string) => void;
}

function EmojiCard({ emoji, isFavorite, onToggleFavorite }: EmojiCardProps) {
  return (
    <div className="emoji-card">
      <button
        className={`favorite-btn ${isFavorite ? "active" : ""}`}
        onClick={() => onToggleFavorite(emoji.slug)}
        title={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        ♥
      </button>
      <div className="emoji-character">{emoji.character}</div>
      <div className="emoji-name">{emoji.unicodeName}</div>
      <div className="emoji-group">{emoji.group}</div>
    </div>
  );
}

export default EmojiCard;
