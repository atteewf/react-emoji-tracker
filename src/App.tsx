import { useState, useEffect } from "react";
import { useEmojis } from "./hooks/useEmojis";
import EmojiList from "./components/EmojiList";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [query, setQuery] = useState<string>("");
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState<boolean>(false);
  const ITEMS_PER_PAGE = 24;
  const { emojis, loading, error, retry } = useEmojis();
  const groups = [...new Set(emojis.map((e) => e.group))];

  // 1. D'abord filteredEmojis
  const filteredEmojis = emojis
    .filter((e) => e.unicodeName.toLowerCase().includes(query.toLowerCase()))
    .filter((e) => (selectedGroup ? e.group === selectedGroup : true))
    .filter((e) => (showFavoritesOnly ? favorites.has(e.slug) : true));
  // 2. Ensuite totalPages et paginatedEmojis qui dépendent de filteredEmojis
  const totalPages = Math.ceil(filteredEmojis.length / ITEMS_PER_PAGE);
  const paginatedEmojis = filteredEmojis.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  // 3. Remet à la page 1 quand on filtre
  useEffect(() => {
    setCurrentPage(1);
  }, [query, selectedGroup]);

  const toggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(slug) ? next.delete(slug) : next.add(slug);
      return next;
    });
  };

  return (
    <div className="app">
      <h1>Emoji Tracker 🎯</h1>

      {error ? (
        <ErrorMessage message={error} onRetry={retry} />
      ) : (
        <>
          <button
            className={`favorites-toggle ${showFavoritesOnly ? "active" : ""}`}
            onClick={() => setShowFavoritesOnly((v) => !v)}
          >
            ♥ Favoris {favorites.size > 0 && `(${favorites.size})`}
          </button>

          <FilterBar
            query={query}
            onQueryChange={setQuery}
            selectedGroup={selectedGroup}
            onGroupChange={setSelectedGroup}
            groups={groups}
          />

          <EmojiList
            emojis={paginatedEmojis}
            loading={loading}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
