function FilterBar({
  selectedType,
  setSelectedType
}) {
  return (
    <div className="filter-container">
      <select
        value={selectedType}
        onChange={(e) =>
          setSelectedType(e.target.value)
        }
      >
        <option value="All">All</option>

        <option value="Event">
          Event
        </option>

        <option value="Result">
          Result
        </option>

        <option value="Placement">
          Placement
        </option>
      </select>
    </div>
  );
}

export default FilterBar;