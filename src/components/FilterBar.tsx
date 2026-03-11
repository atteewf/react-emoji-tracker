interface FilterBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  selectedGroup: string | null;
  onGroupChange: (group: string | null) => void;
  groups: string[];
}

function FilterBar({
  query,
  onQueryChange,
  selectedGroup,
  onGroupChange,
  groups,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Rechercher un emoji..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />

      <button
        onClick={() => onGroupChange(null)}
        className={!selectedGroup ? "active" : ""}
      >
        Tous
      </button>

      {groups.map((group) => (
        <button
          key={group}
          onClick={() => onGroupChange(group === selectedGroup ? null : group)}
          className={selectedGroup === group ? "active" : ""}
        >
          {group}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
