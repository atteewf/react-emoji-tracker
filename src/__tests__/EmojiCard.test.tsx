import { render, screen, fireEvent } from "@testing-library/react";
import EmojiCard from "../components/EmojiCard";

const mockEmoji = {
  slug: "grinning-face",
  character: "😀",
  unicodeName: "grinning face",
  codePoint: "1F600",
  group: "smileys-emotion",
  subGroup: "face-smiling",
};

describe("EmojiCard", () => {
  it("affiche le caractère de l'emoji", () => {
    render(
      <EmojiCard
        emoji={mockEmoji}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />,
    );
    expect(screen.getByText("😀")).toBeInTheDocument();
  });

  it("affiche le nom de l'emoji", () => {
    render(
      <EmojiCard
        emoji={mockEmoji}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />,
    );
    expect(screen.getByText("grinning face")).toBeInTheDocument();
  });

  it("appelle onToggleFavorite au clic sur le bouton favori", () => {
    const mockToggle = vi.fn();
    render(
      <EmojiCard
        emoji={mockEmoji}
        isFavorite={false}
        onToggleFavorite={mockToggle}
      />,
    );
    fireEvent.click(screen.getByTitle("Ajouter aux favoris"));
    expect(mockToggle).toHaveBeenCalledWith("grinning-face");
  });

  it("affiche le bouton favori comme actif quand isFavorite est true", () => {
    render(
      <EmojiCard
        emoji={mockEmoji}
        isFavorite={true}
        onToggleFavorite={() => {}}
      />,
    );
    expect(screen.getByTitle("Retirer des favoris")).toBeInTheDocument();
  });
});
