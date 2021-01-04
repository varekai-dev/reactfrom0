import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    const { search } = this.state;
    return (
      <>
        <div className="row">
          <div className="input-field ">
            <input
              id="search"
              className="validate"
              placeholder="Search"
              value={search}
              onChange={this.handleSearch}
              onKeyDown={this.handleKey}
            />
            <span
              className="waves-effect waves-light btn search-btn"
              onClick={() =>
                this.props.searchMovies(this.state.search, this.state.type)
              }
            >
              Search
            </span>
          </div>
        </div>
        <div className="checkbox">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };
