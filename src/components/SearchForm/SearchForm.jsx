const SearchForm = ({ setSearchParams }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const inputValue = e.target.elements.search.value.toLowerCase().trim();
    setSearchParams({ "querty": inputValue });
    e.currentTarget.reset();
  };

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input"
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <button type="submit" className="SearchForm-button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
