export default function TodosViewForm({
  sortDirection,
  setSortDirection,
  sortField,
  setSortField,
}) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.preventRefresh();
        }}
      >
        <label>
          Sort by:
          <select
            onChange={(e) => setSortField(e.target.value)}
            value={sortField}
          >
            <option value="title">Title</option>
            <option value="createdTime">Time added</option>
          </select>
        </label>

        <label>
          Direction:
          <select
            onChange={(e) => setSortField(e.target.value)}
            value={sortDirection}
          >
            <option value="asc">Ascending</option>
            <option value="dsc">Descendingd</option>
          </select>
        </label>
      </form>
    </div>
  );
}
